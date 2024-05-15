import { db, auth } from "./firebase";
import { collection, addDoc, getDocs, getDoc, doc, setDoc } from "firebase/firestore";

async function saveLessonToFirestore(lessonID, lesson) {
  console.log("Saving lesson to Firestore");
  console.log(JSON.stringify(lesson));
  
  const docRef = doc(db, "userdata", auth.currentUser.uid, "lessons", lessonID);

  await setDoc(docRef, lesson);
}

async function createLessonInFirestore() {
  console.log("Creating lesson in Firestore");
 
  const lesson = {'title': 'Untitled Lesson', 'description':"", 'drillCodes':[]}
  const collectionRef = collection(db, "userdata", auth.currentUser.uid, "lessons");

  await addDoc(collectionRef, lesson);
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