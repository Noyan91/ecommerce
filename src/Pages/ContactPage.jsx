import { Link } from "react-router";
import { CallIcon, MailIcon } from "../Components/icons";

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16">
      <nav className="flex items-center gap-2 py-6 text-sm text-gray-500 border-b border-gray-200">
        <Link to="/" className="hover:text-secondary">Home</Link>
        <span>/</span>
        <span className="text-black">Contact</span>
      </nav>

      <div className="py-12 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-start">
        <div className="border border-gray-200 rounded-sm shadow-sm p-8 flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shrink-0">
                <CallIcon />
              </span>
              <h3 className="font-medium">Call To Us</h3>
            </div>
            <p className="text-sm mb-2">We are available 24/7, 7 days a week.</p>
            <p className="text-sm">Phone: +8801611112222</p>
          </div>

          <hr className="border-gray-200" />

          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shrink-0">
                <MailIcon />
              </span>
              <h3 className="font-medium">Write To US</h3>
            </div>
            <p className="text-sm mb-2">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm">Emails: customer@exclusive.com</p>
            <p className="text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>

        <form className="border border-gray-200 rounded-sm shadow-sm p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
            <input
              type="text"
              placeholder="Your Name *"
              required
              className="bg-gray-100 rounded-sm px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-secondary"
            />
            <input
              type="email"
              placeholder="Your Email *"
              required
              className="bg-gray-100 rounded-sm px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-secondary"
            />
            <input
              type="tel"
              placeholder="Your Phone *"
              required
              className="bg-gray-100 rounded-sm px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-secondary"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full bg-gray-100 rounded-sm px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-secondary resize-none mb-5"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-secondary text-white text-sm font-medium px-10 py-3 rounded-sm"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
