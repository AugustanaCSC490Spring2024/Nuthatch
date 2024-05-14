import { db, auth } from "./firebase";
import { collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";


async function saveLessonToFirestore(lesson) {
  console.log("Saving lesson to Firestore");
  console.log(JSON.stringify(lesson));
  const collectionRef = collection(db, "userdata", auth.currentUser.uid, "lessons");


  //not being used

  // console.log(JSON.stringify(collectionRef));
  const docRef = await addDoc(collectionRef, {
    title: lesson.title,
    description: lesson.description,
    drillCodes: lesson.drillCodes
  });

  // const docRef = await getDoc(doc(db, "products", "prod_PzSYI74e70odTs"));
  // console.log(JSON.stringify(docRef.data()));

}

async function getLessonsFromFirestore() {
  console.log("Getting lessons from Firestore");
  if (!auth.currentUser) {
    console.log("Not signed in");
    return [];
  }
  const collectionRef = collection(db, "userdata", auth.currentUser.uid, "lessons");
  const querySnapshot = await getDocs(collectionRef);

  //console.log(JSON.stringify(querySnapshot));
  const allUserLessons = querySnapshot.docs.map((doc) => 
    ({id: doc.id, ...doc.data()}));
  
  return allUserLessons;
}

export async function getLessonFromFirestoreByID(lessonID) {
  console.log("Getting lesson from Firestore by ID");
  if (!auth.currentUser) {
    console.log("Not signed in");
    return [];
  }
  const docRef = doc(db, "userdata", auth.currentUser.uid, "lessons", lessonID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", {id:docSnap.id, ...docSnap.data()});
    return {id:docSnap.id, ...docSnap.data()};
  } else {
    console.log("No such document!");
    return null;
  }


}

export { saveLessonToFirestore, getLessonsFromFirestore };