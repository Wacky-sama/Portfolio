import { useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
          setIsLoading(false);
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message, please try again later.");
          setIsLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gradient-to-r from-purple-950 to-purple-600 text-white"
    >
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold mb-4">Get in Touch</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white/80">
            Have a project in mind, want to collaborate, or just say hello? Drop
            me a message below and I’ll get back to you soon.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="lg:w-1/2 md:w-2/3 mx-auto"
        >
          <div className="flex flex-wrap -m-2">
            {/* Name */}
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-gray-900/60 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-500 text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200"
                />
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-gray-900/60 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-500 text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-gray-900/60 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-500 h-32 text-base outline-none text-white py-2 px-3 resize-none leading-6 transition-colors duration-200"
                ></textarea>
              </div>
            </div>

            <div className="p-2 w-full">
              <button
                type="submit"
                disabled={loading}
                className={`flex mx-auto px-6 py-2 rounded-full shadow-lg text-lg transition ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-yellow-500 hover:bg-yellow-600 text-black"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
