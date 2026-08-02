import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/contact", label: "Contact" },
  { to: "/about", label: "About" },
  { to: "/signup", label: "Sign Up" },
];

const languages = ["English", "Bangla", "Hindi", "Arabic", "Spanish"];

const LanguageSelect = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(languages[0]);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative hidden sm:block">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1"
      >
        {language}
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul className="absolute right-0 mt-2 w-32 bg-white text-black rounded-sm shadow-lg py-1 text-sm z-10">
          {languages.map((lang) => (
            <li key={lang}>
              <button
                type="button"
                onClick={() => {
                  setLanguage(lang);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-1.5 hover:bg-gray-100 ${
                  lang === language ? "font-semibold" : ""
                }`}
              >
                {lang}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-3 flex items-center justify-center relative">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <a href="#" className="font-semibold underline underline-offset-2">
              ShopNow
            </a>
          </p>
          <div className="absolute right-6 md:right-16">
            <LanguageSelect />
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-6 flex items-center justify-between gap-8">
          <span className="text-2xl font-bold shrink-0">Exclusive</span>

          <nav>
            <ul className="flex items-center gap-8 text-sm">
              {navLinks.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      isActive ? "underline underline-offset-4" : "hover:opacity-70"
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6 shrink-0">
            <div className="flex items-center bg-gray-100 rounded-sm px-4 py-2 gap-3">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none text-sm placeholder-gray-500 w-40 md:w-56"
              />
              <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
              </svg>
            </div>

            <button aria-label="Wishlist">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 20.5s-7.5-4.6-10-9.3C.4 8 1.6 4.5 4.8 3.4c2.2-.8 4.5 0 5.9 1.8l1.3 1.7 1.3-1.7c1.4-1.8 3.7-2.6 5.9-1.8 3.2 1.1 4.4 4.6 2.8 7.8-2.5 4.7-10 9.3-10 9.3z" strokeLinejoin="round" />
              </svg>
            </button>

            <button aria-label="Cart">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 4h2l2.4 12.2a2 2 0 002 1.8h8.4a2 2 0 002-1.6L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9.5" cy="21" r="1.2" fill="currentColor" stroke="none" />
                <circle cx="17.5" cy="21" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
