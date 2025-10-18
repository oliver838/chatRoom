import { addDoc, collection,query } from "firebase/firestore"
import { doc } from "firebase/firestore/lite";
import { db } from "../firebaseApp";

export const addMessage = async (message)=>{
    try{
        const docRef = collection(db, "messages")
        await addDoc(docRef, message)
    }catch{
        console.log("hiba az üzenet küldésekor");
        
    }
}

export const readMessages = async (message)=> {
    try{
        const adat = query(db,"messages")
        return await doc(query,message)
    }catch{
        console.log("hiba az üzenet küldésekor");
    }
}