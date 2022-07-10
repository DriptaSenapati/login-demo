import React, { useState } from 'react';
import styles from '../styles/SignIn.module.css';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import validatePassword from '../helpers/validate_password';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import confirmpassword from "./../helpers/confirmPassword";

const SignIn = () => {
    const [page, setPage] = useState("signin");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const router = useRouter();

    const resetForm = () => {
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setEmail("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (page === "signup") {
            var ch = validatePassword(password);
            if (!ch.valid){
                console.log(ch);
                toast.error(ch.exp);
                return;
            }
            const myPromise = new Promise((resolve, reject) =>
                fetch("/api/adduser", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username,
                        email: email,
                        password: password,
                        cpassword: confirmPassword
                    })
                })
                    .then((response) => {
                        if (response.status === 200) {
                            return response.json().then((json) => resolve(json))
                        } else {
                            return response.json().then(error => reject(error))
                        }
                    })
            );
            const response = await toast.promise(
                myPromise,
                {
                    pending: 'Signing In. Please Wait ...',
                    success: {
                        render({ data }) {
                            return data.success;
                        }
                    },
                    error: {
                        render({ data }) {
                            return data.error;
                        }
                    }
                }
            );
            resetForm();
            setPage("signin")
        } else if (page === "signin") {
            const myPromise = new Promise((resolve, reject) =>
                signIn('credentials', {
                    redirect: false,
                    email: email,
                    password: password,
                    callbackUrl: "/",
                })
                    .then((response) => {
                        if (response.status === 200) {
                            return resolve(response)
                        } else {
                            return reject(response)
                        }
                    })
            );

            const response = await toast.promise(
                myPromise,
                {
                    pending: 'Logging In. Please Wait ...',
                    success: "Successfully Logged In",
                    error: {
                        render({ data }) {
                            return data.error;
                        }
                    }
                }
            );

            // console.log(response);
            if (response.status === 200) {
                router.push(response.url);
            }
        }

    }

    const handleCpassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    return (
        <section className={styles.container}>
            <div className={styles.data_container}>
                <div className={styles.toggle_container}>
                    <div>
                        <h2>{page === "signin" ? "New to our Platform?" : "Already have Account?"}</h2>
                        <p>{page === "signin" ? "Register Now!" : "Login Now!"}</p>
                        <div className={styles.btn} onClick={() => {
                            resetForm();
                            setPage(page === "signin" ? "signup" : "signin")
                        }}>
                            {page === "signin" ? "Sign Up" : "Sign In"}
                        </div>
                    </div>
                </div>
                <div className={styles.form_container}>
                    <div className={styles.form_content}>
                        <h2>{page === "signin" ? "Sign In to your Account" : "Sign Up to your Account"}</h2>
                        {
                            page === "signin" ?
                                <form onSubmit={handleSubmit}>
                                    <input type="text" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}
                                        name="email" required />
                                    <input type="password" placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    <input className={styles.btn} type="submit" value={page === "signin" ? "Sign In" : "Sign Up"} />
                                </form> :
                                <form onSubmit={handleSubmit}>
                                    <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}
                                        required />
                                    <input type="text" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}
                                        name="email" required />
                                    <input type="password" placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    <input type="password" placeholder='Confirm Password' name='cpassword' value={confirmPassword} onChange={handleCpassword}
                                        required />
                                    <input className={styles.btn} type="submit" value={page === "signin" ? "Sign In" : "Sign Up"} />
                                </form>
                        }

                        <div className={styles.sign_link_active}>
                            {page === "signin" ?
                                <span>
                                    New to our Platform? <span className={styles.sign_link} onClick={() => setPage("signup")}>Sign Up</span>
                                </span> :
                                <span>
                                    Already have Account? <span className={styles.sign_link} onClick={() => setPage("signin")}>Sign In</span>
                                </span>}
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

export default SignIn