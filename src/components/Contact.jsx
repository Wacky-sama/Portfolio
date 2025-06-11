import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
    .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    .then(
      (result) => {
        console.log(result.text);
        toast.success('Message sent successfully!');
        formRef.current.reset();
        setIsLoading(false);
      },
      (error) => {
        toast.error('Failed to send message, please try again later.');
        console.error(error.text);
        setIsLoading(false);
      }
    );
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-r from-purple-950 to-purple-600 text-white">
    <div className="max-w-2xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-6">Contact</h3>
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input name="user_name" type="text" placeholder="Name" className="w-full p-3 border rounded " required />
          <input name="user_email" type="email" placeholder="Email" className="w-full p-3 border rounded " required />
          <textarea name="message" rows="4" placeholder="Message" className="w-full p-3 border rounded " required />
          <button type="submit" disabled={loading} className="bg-purple-600 text-white px-6 py-2 rounded shadow hover:bg-purple-700">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
      </form>
    </div>
  </section>
  )
}

export default Contact;
