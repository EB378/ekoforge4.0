import styles from './Nav.module.css' 
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Nav() {

  return (
    <>
      <div className={styles.topnav}>
        <Link href="/">
          <Image
            src="/CopyForge-3-removebg-preview.png"
            width={172}
            height={35}
            alt="Results-Driven Business Solutions And Digital Marketing"
          />
        </Link>
          <div className={styles.leftalignment}>
            <div className={styles.pageslink}>
              <Link className={styles.navlinks} href="/#clients" >How Do I Fix My Business?</Link>
              <Link className={styles.navlinks} href="/#testimonials" >Testimonials</Link>
              <Link className={styles.navlinks} href="/#contactsec">Contact Us</Link>
            </div>
          </div>
          <div className={styles.rightalignment}>
            <Link className={styles.navlinks} href="https://calendly.com/ekoforge">Book A Call</Link>
          </div>
      </div>
    </>  
  )
}