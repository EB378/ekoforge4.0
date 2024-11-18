import React from 'react'
import styles from './Footer.module.css' 
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
  return (
    <>
    <div className={styles.footcontainer}>
        <Link href="/">
            <Image
              src="/CopyForge-3-removebg-preview.png"
              width={172}
              height={35}
              alt="Logo"
            />
        </Link>
        <div className={styles.contact}>
            <p>
                EkoForge Oy <br/>
                Phone: <a href="tel:+358442413840">+358 44 2413 840</a><br/>
              Email: <a href="mailto:ekoforge@gmail.com">ekoforge@gmail.com</a><br/>
            </p>
        </div>
        <div>
            <h1>All Rights Reserved</h1>
        </div>
    </div>

    </>
  )
}