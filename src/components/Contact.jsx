
function Contact() {
  return (
    <section
      id="contact"
      className="container mx-auto px-6 py-20 max-w-2xl text-center"
    >
      <h2 className="text-4xl font-bold mb-10">Get in Touch</h2>
      <form className="space-y-6 text-left">
        <div>
          <label className="block mb-2 font-semibold" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Yeamim Hossain Sajid"
            className="w-full px-4 py-3 rounded-md text-black"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="yeamimhossainsajid@gmail.com"
            className="w-full px-4 py-3 rounded-md text-black"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            rows="5"
            className="w-full px-4 py-3 rounded-md text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-10 flex justify-center space-x-8 text-3xl">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-yellow-400"
        >
          <i className="fab fa-github"></i>🐱
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-yellow-400"
        >
          <i className="fab fa-linkedin"></i>🔗
        </a>
        <a
          href="mailto:youremail@example.com"
          aria-label="Email"
          className="hover:text-yellow-400"
        >
          <i className="fas fa-envelope"></i>✉️
        </a>
      </div>
    </section>
  );
}
export default Contact;