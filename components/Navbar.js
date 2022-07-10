import React from 'react'
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';


const Navbar = () => {
    const { data: session } = useSession();
    const router = useRouter();

    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.brand}>
                    <div style={{ width: 40 + "px", height: 40 + "px", borderRadius: "50%", overflow: "hidden" }}>
                        <Image src="./brand.png" width={40} height={40} />
                    </div>
                    <span className={styles.brandname}>Brand</span>
                </div>
                <div className={styles.navlinkcontainer}>
                    <ul>
                        <Link href={"/"}><a>Home</a></Link>
                        <Link href={"/products"}><a>Products</a></Link>
                        <Link href={"/services"}><a>Services</a></Link>
                        <Link href={"/contact"}><a>Contact Us</a></Link>
                    </ul>
                </div>
            </nav>
            {
                router.pathname !== "/login" &&
                <button className={styles.btn} onClick={session ? signOut : signIn}>
                    {
                        session ? "Log Out" : "Log In"
                    }
                </button>
            }

        </div>
    )
}

export default Navbar