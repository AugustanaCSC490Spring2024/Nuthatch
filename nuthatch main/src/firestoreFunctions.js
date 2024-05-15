import { db, auth } from "./firebase";
import { collection, addDoc, getDocs, getDoc, doc, setDoc, deleteDoc } from "firebase/firestore";

export async function saveLessonToFirestore(lessonID, lesson) {
  console.log("Saving lesson to Firestore");
  console.log(JSON.stringify(lesson));
  
  const docRef = doc(db, "userdata", auth.currentUser.uid, "lessons", lessonID);

  await setDoc(docRef, lesson);
}

export async function createLessonInFirestore() {
  console.log("Creating lesson in Firestore");
 
  const lesson = {'title': 'Untitled Lesson', 'description':"", 'drillCodes':[]}
  const collectionRef = collection(db, "userdata", auth.currentUser.uid, "lessons");

  const docRef = await addDoc(collectionRef, lesson);
  console.log("Document written with ID: ", docRef.id);
  console.log("Created Lesson: ", lesson);
  return {id: docRef.id, ...lesson};
}

export async function deleteLessonFromFirestore(lessonID) {
  console.log("Deleting lesson from Firestore");
  const docRef = doc(db, "userdata", auth.currentUser.uid, "lessons", lessonID);
  await deleteDoc(docRef);
}


export async function getLessonsFromFirestore() {
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
