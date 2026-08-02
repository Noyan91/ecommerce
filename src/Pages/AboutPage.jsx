import { useState } from "react";
import { Link } from "react-router";
import {
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  BagIcon,
  TruckIcon,
  HeadsetIcon,
  ShieldIcon,
} from "../Components/icons";

import storyImg from "../assets/AboutImage/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png";
import shopIcon from "../assets/AboutImage/icon_shop.png";
import saleIcon from "../assets/AboutImage/Icon-Sale.png";
import moneyBagIcon from "../assets/AboutImage/Group.png";
import tomImg from "../assets/AboutImage/Frame 874.png";
import emmaImg from "../assets/AboutImage/Frame 875.png";
import willImg from "../assets/AboutImage/Frame 876.png";

const stats = [
  { image: shopIcon, value: "10.5k", label: "Sallers active our site" },
  { image: saleIcon, value: "33k", label: "Mopnthly Product Sale", active: true },
  { Icon: BagIcon, value: "45.5k", label: "Customer active in our site" },
  { image: moneyBagIcon, value: "25k", label: "Anual gross sale in our site" },
];

const team = [
  { name: "Tom Cruise", role: "Founder & Chairman", image: tomImg },
  { name: "Emma Watson", role: "Managing Director", image: emmaImg },
  { name: "Will Smith", role: "Product Designer", image: willImg },
];

const AboutPage = () => {
  const [slide, setSlide] = useState(2);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16">
      <nav className="flex items-center gap-2 py-6 text-sm text-gray-500 border-b border-gray-200">
        <Link to="/" className="hover:text-secondary">Home</Link>
        <span>/</span>
        <span className="text-black">About</span>
      </nav>

      {/* Our Story */}
      <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-semibold mb-6">Our Story</h1>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive has
            10,500 sellers and 300 brands and serves 3 million customers across
            the region.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>
        <img src={storyImg} alt="Our story" className="w-full rounded-sm" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-16">
        {stats.map(({ image, Icon, value, label, active }) => (
          <div
            key={label}
            className={`border rounded-sm p-8 flex flex-col items-center text-center gap-4 ${
              active ? "bg-secondary text-white border-secondary" : "border-gray-200"
            }`}
          >
            <span
              className={`w-16 h-16 rounded-full flex items-center justify-center ring-8 ${
                active ? "bg-white ring-black/10" : "bg-black text-white ring-gray-200"
              }`}
            >
              {image ? <img src={image} alt="" className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
            </span>
            <p className="text-2xl font-semibold">{value}</p>
            <p className="text-sm">{label}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <div className="pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {team.map(({ name, role, image }) => (
            <div key={name}>
              <div className="bg-gray-100 rounded-sm overflow-hidden mb-6">
                <img src={image} alt={name} className="w-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{name}</h3>
              <p className="text-sm text-gray-500 mb-4">{role}</p>
              <div className="flex items-center gap-4">
                <TwitterIcon className="w-4 h-4" />
                <InstagramIcon className="w-4 h-4" />
                <LinkedInIcon className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`w-2 h-2 rounded-full ${i === slide ? "bg-secondary" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="py-16 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center ring-8 ring-gray-200">
            <TruckIcon className="w-8 h-8" />
          </div>
          <h3 className="font-semibold">FREE AND FAST DELIVERY</h3>
          <p className="text-sm text-gray-500">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center ring-8 ring-gray-200">
            <HeadsetIcon className="w-8 h-8" />
          </div>
          <h3 className="font-semibold">24/7 CUSTOMER SERVICE</h3>
          <p className="text-sm text-gray-500">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center ring-8 ring-gray-200">
            <ShieldIcon className="w-8 h-8" />
          </div>
          <h3 className="font-semibold">MONEY BACK GUARANTEE</h3>
          <p className="text-sm text-gray-500">We return money within 30 days</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
