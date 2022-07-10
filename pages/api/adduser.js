import { db } from "./../../database/firebase-config";
var validator = require("email-validator");
import { collection, setDoc, getDocs,doc } from "firebase/firestore";
import { hash } from 'bcrypt';

export const getUsers = async (collectionRef) => {
    const querySnapshot = await getDocs(collectionRef);
    const userList = []
    querySnapshot.forEach((doc) => {
        userList.push(
            doc.id
        )
        // console.log(`${doc.id} => ${doc.data()}`);
    });
    return userList;
}

export default async function handler(req, res) {
    const { username, email, password, cpassword } = req.body;

    if (password !== cpassword) {
        return res.status(401).json({ error: "Password and Confirm Password doesnot match" });
    }

    if (!validator.validate(email)) {
        return res.status(401).json({ error: "Email is not correct" });
    }

    const userCollectionRef = collection(db, "users");
    const userList = await getUsers(userCollectionRef);
    console.log(userList);

    if (userList.includes(email)) {
        return res.status(401).json({ error: "This Email is already registered!" });
    } else {
        try {
            hash(password, 10, async function (err, hash) {
                if (!err) {
                    await setDoc(doc(db, "users", email), {
                        name: username,
                        password: hash
                    });
                }
            });
            return res.status(200).json({ success: "Successfully Created Account\nPlease Log In with credentials" });
        } catch (e) {
            return res.status(401).json({ error: e });
        }
    } 
}
