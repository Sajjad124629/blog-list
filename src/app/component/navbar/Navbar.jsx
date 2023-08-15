import React from 'react';
import styles from './navbar.module.css'
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className='container justify-center mt-10'>
            <nav>
                <ul className={`flex justify-center ${styles.navStyle}`}>
                    <li><Link href={`/`}>Home</Link></li>
                    <li><Link href={`/blog`}>Blog</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;