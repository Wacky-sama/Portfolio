const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 px-4">
    <div className="max-w-2xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
        <textarea rows="4" placeholder="Message" className="w-full p-3 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  </section>
  )
}

export default Contact
