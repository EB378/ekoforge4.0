import styles from "./page.module.css";
import styles1 from "./agitate.module.css";
import Link from "next/link";
import Contact from "../components/contact";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>hi</div>
        <div className={styles.parallaxcontainer}>

{/* Hook! */}
          <h1 className={styles.cutouttext}>  
            More Growth. More Sales.<br/> 
            More Turnover. Guaranteed.
          </h1>
          
{/* CTA */}
          <div className={styles.inline}>
            <Link href="https://calendly.com/ekoforge">
              <button className={styles.cta2}>
                
               Let's Make It Happen
              </button>
            </Link>
            <Link href="#contactsec">
              <button className={styles.cta1}>
                Contact Us
              </button>
            </Link>
          </div>
          <p className={styles.cutouttext1}><br/>DO WHAT YOU DO BEST, WE'LL GUIDE YOU TO THE NEXT LEVEL</p>



          
{/* tension/agitation/problem */}

          <div className={styles1.agitationcontainer}>

            <h3>A Businesses In 2024</h3>

            <h2>Needs Marketing and Digitization</h2>

            <h3>So How Do You Get That?</h3>
            
            {/* Inline, Small Business stuggles with marketing*/}
            <div className={styles1.agitationpoints}>


              {/* Point 1 */}
              <div className={styles1.agitationpoint}>
                <div className={styles1.agitationpoint1}>
                  <h3>Do Everthing Yourself?</h3><br/>
                  <p> If you have little to do, it's not a problem.<br/><br/><br/>However, if you're busy... this is not feasible.</p>
                </div>
              </div>


              {/* Point 2 */}
              <div className={styles1.agitationpoint}>
                <div className={styles1.agitationpoint1}>
                  <h3>Hire Staff?</h3><br/>
                  <p>Hiring a good team is <b>difficult</b>,<br/> and training them is expensive.<br/> <br/> It's not worth it and it takes too much time.</p>
                </div>
              </div>


              {/* Point 3 */}
              <div className={styles1.agitationpoint}>
                <div className={styles1.agitationpoint1}>
                  <h3>Hire an Agency?</h3><br/>
                  <p>Your business gets shoved into a generic template, missing out on the tailored strategies needed to skyrocket your success. <br/><br/>Not worth it.</p>
                </div>
              </div>


            </div>
          </div>

          <hr id="clients"/>

{/* CTA, How to solve the problem*/}
          <div className={styles.CTA1container}>

          <h3>Your Business Is Statistically Destined To Fall Apart.</h3>

            <h2>Your Competitors Are Winning!</h2>

            <h3>The Time To Take Action Has Come!</h3>
            
            {/* CTA Button*/}
            <div className={styles.inline}>
              <Link href="https://calendly.com/ekoforge">
                <button className={styles.cta2}>
                  
                  Let's Get My Business On Track
                </button>
              </Link>
              <Link href="#contactsec">
                <button className={styles.cta1}>
                  Contact Us
                </button>
              </Link>
            </div>
            <p className={styles.cutouttext1}>This You Will Not Regret.</p>
          </div>


{/* Testimonials */}
          <div className={styles.testimonialscontatiner} id="testimonials">


            <div className={styles.testimonial1}>
              <Image
                src="/ekotestimoonial1.png"
                width={150}
                height={150}
                alt="Testimonial Client Logo Blured"
              />


              <h2>The impact on our branding and visual image has been very positive. I would highly recommend these services for any company or NGO that wants to have reliable, fast paced and good quality visual updates for their social media and/or advertisement.<br/>
              <br/>
              — Kimmo,  2024
              </h2>


            </div>
          </div>


{/* Not convinced? What Sets Us Apart? */}
          <div className={styles.distinctioncontainer}>

            <h2>Still Not Sure? Still Have Questions?</h2>

            <h1>"What Sets Us Apart From The Rest?"</h1>
            
            {/* Inline, Small Business stuggles with marketing*/}
            <div className={styles.distinctionpoints}>


              {/* Point 1 */}
              <div className={styles.distinctionpoint}>
                <div className={styles.distinctionpoint1}>
                  <h3>GUARANTEE</h3>
                  <p> We only win if you win. <br/><br/>You won't carry a risk, we'll share it.</p>
                </div>
              </div>


              {/* Point 2 */}
              <div className={styles.distinctionpoint}>
                <div className={styles.distinctionpoint1}>
                  <h3>RESULT</h3>
                  <p>Our first priority is to get you results.<br/><br/>Less talk, more walk.</p>
                </div>
              </div>


              {/* Point 3 */}
              <div className={styles.distinctionpoint}>
                <div className={styles.distinctionpoint1}>
                  <h3>OUTLIER</h3>
                  <p>We don't just follow the crowd. <br/><br/> We customise and set new standards.</p>
                </div>
              </div>


            </div>
          </div>

{/* Contact */}
          <Contact/>

        </div>
      </main>
    </div>
  );
}