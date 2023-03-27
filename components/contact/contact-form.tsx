'use client';

import React, { useState, useEffect } from 'react';
import styles from './contact-form.module.css';
import Notification from 'components/ui/notification';

async function sendContactData(contractDetails: {
  email: string;
  name: string;
  message: string;
}) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contractDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
}

function ContactForm() {
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Message, setMessage] = useState('');
  const [error, seterror] = useState('');
  const [requestStatus, setRequestStatus] = useState('');

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus('');
        seterror('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event: React.ChangeEvent<SubmitEvent>) {
    event.preventDefault();
    setRequestStatus('pending');

    try {
      await sendContactData({
        email: email,
        name: Name,
        message: Message,
      });
      setRequestStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      seterror(err.message);
      setRequestStatus('error');
    }
  }

  let notification;
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending Message...',
      message: 'Your message is on its way!',
    };
  }
  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: error,
    };
  }

  return (
    <section className={styles.contact}>
      <h1>How can i help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
