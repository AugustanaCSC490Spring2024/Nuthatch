import { db, auth } from "./firebase";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";


async function saveLessonToFirestore(lesson) {
  console.log("Saving lesson to Firestore");
  console.log(JSON.stringify(lesson));

  const collectionRef = collection(db, "userdata", auth.currentUser.uid, "lessons");
  // console.log(JSON.stringify(collectionRef));
  const docRef = await addDoc(collectionRef, {
    title: lesson.title,
    description: lesson.description,
    drillCodes: lesson.drillCodes
  });

  // const docRef = await getDoc(doc(db, "products", "prod_PzSYI74e70odTs"));
  // console.log(JSON.stringify(docRef.data()));

}

export { saveLessonToFirestore };