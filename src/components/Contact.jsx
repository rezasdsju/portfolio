import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Replace with your WhatsApp number (with country code, e.g. 8801XXXXXXXXX)
  const whatsappNumber = '8801722292603';
  // Replace with your email
  const yourEmail = 'rezaul2002104@gmail.com';

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Contact Form Message');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" style={{ padding: '20px 20px', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: 'black' }}>Get In Touch</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '15px',
              margin: '10px 0',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '1em'
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '15px',
              margin: '10px 0',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '1em'
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message*"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '15px',
              margin: '10px 0',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '1em',
              fontFamily: 'inherit'
            }}
          ></textarea>
          <button
            onClick={handleWhatsApp}
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#25D366',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1.1em',
              cursor: 'pointer',
              marginBottom: '10px'
            }}
          >
            Send via WhatsApp
          </button>
          <button
            onClick={handleEmail}
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#4493F8',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1.1em',
              cursor: 'pointer'
            }}
          >
            Send via Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;