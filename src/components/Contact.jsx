import { useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',   
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic
        try {
          await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formData,
            {
              publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            }
          );
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        } catch (err) {
          if (err instanceof EmailJSResponseStatus) {
            console.log('EMAILJS FAILED...', err);
            alert('Failed to send message via EmailJS. Please try again.');
            return;
          }
    
          console.log('ERROR', err);
          alert('An unexpected error occurred. Please try again later.');
        }
        // Clear form after submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      };
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>I am always open to discussing new opportunities, collaborations, or projects. Feel free to contact me
            using the details below or through the message form.</p>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Alfred Olumide Adenigba</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Lagos, Nigeria</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title"><a href="mailto:Olumideadenigba@gmail.com">olumideadenigba@gmail.com</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form onSubmit={handleSubmit}>
              <div className="fields">
                <div className="field name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field textarea">
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
