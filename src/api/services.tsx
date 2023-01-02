import { addDoc, collection } from "firebase/firestore";
import { db } from "./config";

const post = async (service: string, data: object) => {
  await addDoc(collection(db, service), data);
};

export { post };
