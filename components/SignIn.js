import React, { useState } from 'react';
import styles from '../styles/SignIn.module.css';

const SignIn = () => {
    const [page, setPage] = useState("signin");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <section className={styles.container}>
            <div className={styles.data_container}>
                <div className={styles.toggle_container}>
                    <div>
                        <h2>{page === "signin" ? "New to our Platform?" : "Already have Account?"}</h2>
                        <p>{page === "signin" ? "Register Now!" : "Login Now!"}</p>
                        <div className={styles.btn} onClick={() => setPage(page === "signin" ? "signup" : "signin")}>
                            {page === "signin" ? "Sign Up" : "Sign In"}
                        </div>
                    </div>
                </div>
                <div className={styles.form_container}>
                    <div className={styles.form_content}>
                        <h2>{page === "signin" ? "Sign In to your Account" : "Sign Up to your Account"}</h2>
                        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <input type="text" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}
                            className={page === "signin" ? styles.disabled : undefined} required />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            className={page === "signin" ? styles.disabled : undefined} required />
                        <div className={styles.btn}>{page === "signin" ? "Sign In" : "Sign Up"}</div>
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
        </section>
    )
}

export default SignIn