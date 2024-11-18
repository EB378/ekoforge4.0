import styles from './Contact.module.css' 
export default function Contact() {

  return (
    <>
      <div id="contactsec"></div>
      <div className={styles.contactcontainer}>
        <div className={styles.contactleft}>
            <h1>Contact Us</h1>
            <form name="contact">
                    <input type="text" name="name" placeholder="Name" required/>

                    <input type="email" name="email" placeholder="Email" required/>

                    <input type="phone" name="phone" placeholder="Phone Number" required/>

                    <input type="text" name="company" placeholder="Company Name" required/>

                    <input type="textbox" name="reason" placeholder="What are you contacting us about?" required/>

                    <input type="textbox" name="source" placeholder="How did you find us?"/>

                    <input type="textbox" name="website" placeholder="Add the link to your website."/>

                    <input type="textbox" name="budget" placeholder="What is your budget like?"/>


                    <br/>
                    <button type="submit"><h1>Send</h1></button>
            </form>

        </div>
        <div className={styles.contactright}>  
          <div className={styles.contactright1}>
          <h3>You don't pay the plumber for banging on the pipes. 
            <br/>You pay him for knowing where to bang.</h3>
            </div>
          <div className={styles.contactinfo}>
            <h2>Contact Information</h2>
            <p>
              EkoForge Oy <br/>
              Phone: <a href="tel:+358442413840">+358 44 2413 840</a><br/>
              Email: <a href="mailto:ekoforge@gmail.com">ekoforge@gmail.com</a><br/>
            </p>
          </div>
        </div>
      </div>
    </>  
  )
}