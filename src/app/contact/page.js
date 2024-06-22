import React from "react";
import styles from "./contact.module.css";
import ContactCard from "@/app/components/ContactCard";
import ContactForm from "@/app/components/ContactForm";
const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>

          <ContactForm />
        </section>
      </div>

      <iframe
  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.16374826918434!2d74.31880425594505!3d31.454261359017966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190739ba5be2fb%3A0x34c558e406c45867!2sFaisal&apos; Restaurant!5e0!3m2!1sen!2s!4v1719048329133!5m2!1sen!2s`}
  width={100}
  height={450}
  style={{ border: 0 }}
  allowfullscreen=""
  loading="lazy"
  className={styles.mapping}
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
     
    </>
  );
};

export default Contact;
