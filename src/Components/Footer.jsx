import qrCode from "../assets/Qr Code.png";
import googlePlay from "../assets/GooglePlay.png";
import appStore from "../assets/AppStore.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <h3 className="text-xl font-bold">Exclusive</h3>
          <p className="font-medium">Subscribe</p>
          <p className="text-sm text-gray-300">Get 10% off your first order</p>
          <form className="flex items-center border border-white rounded-sm px-3 py-2 w-full max-w-55">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-sm placeholder-gray-300 w-full"
            />
            <button type="submit" aria-label="Subscribe" className="ml-2 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Support</h3>
          <p className="text-sm text-gray-300 max-w-45">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-sm text-gray-300">exclusive@gmail.com</p>
          <p className="text-sm text-gray-300">+88015-88888-9999</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Account</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Login / Register</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Quick Link</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <h3 className="text-xl font-bold">Download App</h3>
          <p className="text-xs text-gray-400">Save $3 with App New User Only</p>
          <div className="flex items-center gap-2">
            <img src={qrCode} alt="QR code to download the app" className="w-16 h-16 shrink-0" />
            <div className="flex flex-col gap-2">
              <a href="#">
                <img src={googlePlay} alt="Get it on Google Play" className="h-10" />
              </a>
              <a href="#">
                <img src={appStore} alt="Download on the App Store" className="h-10" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M22 5.9c-.7.3-1.5.6-2.4.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.2 4.2 0 00-7.1 3.8A11.8 11.8 0 013 4.9a4.2 4.2 0 001.3 5.6c-.6 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.7 3.3 4.1-.6.1-1.2.2-1.8.1.5 1.7 2 2.9 3.8 2.9A8.4 8.4 0 012 18.6a11.9 11.9 0 006.3 1.8c7.6 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1.1.4 2.2.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1.1-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.3-2.2.4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1.1-.4-2.2C2 15 2 14.7 2 12s0-3 .1-4.1c0-1.1.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.3 2.2-.4C8 2 8.3 2 11 2zm0 1.8c-2.7 0-3 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.7-.1 1-.1 1.3-.1 4s0 3 .1 4c0 .9.2 1.4.3 1.7.2.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.7.3 1 .1 1.3.1 4 .1s3 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.7.1-1 .1-1.3.1-4s0-3-.1-4c0-.9-.2-1.4-.3-1.7-.2-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-1.7-.3-1-.1-1.3-.1-4-.1zm0 3a5.2 5.2 0 110 10.4A5.2 5.2 0 0112 6.8zm0 1.8a3.4 3.4 0 100 6.8 3.4 3.4 0 000-6.8zm5.4-2a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M6.9 8.4H3.6V20h3.3V8.4zM5.3 3.6a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM20.4 20h-3.3v-6c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V20H9.5V8.4h3.2v1.6c.4-.8 1.5-1.6 3.1-1.6 3.3 0 3.9 2.2 3.9 5V20z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        &copy; Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
