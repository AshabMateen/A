import React from 'react';
import '../App.css';
import './ContactMap.css';

const ContactMap = () => {
  return (
    <>
    <div className='ContactMap'>
        <h1>Feel Free to Contact us</h1>
        <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.404474628263!2d-99.1638940856571!3d19.438120445542303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8cea8f3ab67%3A0x26ca03069e8d1085!2sTeatro%20Aldama!5e0!3m2!1sen!2s!4v1673367833285!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className='form-container'>
            <form action="https://formspree.io/f/xayzyknq" method='post'>
                <input type='text' name='username' placeholder='User Name' autoComplete='off' required />
                <input type='email' name='email' placeholder='Email Adress' autoComplete='off' required />
                <textarea name='message' col='30' rows='6' placeholder='Your Message' autoComplete='off' required></textarea>
                <input type='submit' value='Submit' />
            </form>
        </div>
    </div>
    </>
  )
}

export default ContactMap
