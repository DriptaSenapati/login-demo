import { db } from "./../../database/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { compare } from 'bcrypt';

export default async function handler(req, res) {
    const { email, password } = req.body;

    let userDoc = doc(db, "users", email);
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
        let db_data = docSnap.data();

        const match = await compare(password, db_data.password);
        if(match){
            return res.status(200).json({
                name: db_data.name
            });
        }else{
            return res.status(401).json({ error: "Invalid Credentials" });
        }
        
    }else{
        return res.status(401).json({ error: "Invalid Credentials" });
    }
}