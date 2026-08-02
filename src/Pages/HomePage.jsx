import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import SectionHeading from "../Components/SectionHeading";
import CountdownTimer from "../Components/CountdownTimer";
import {
  ArrowIcon,
  ChevronRightIcon,
  PhoneIcon,
  ComputerIcon,
  WatchIcon,
  CameraIcon,
  HeadphoneIcon,
  GamingIcon,
  ShirtIcon,
  BagIcon,
  ShelfIcon,
  AppleIcon,
  TruckIcon,
  HeadsetIcon,
  ShieldIcon,
} from "../Components/icons";

import gamepadImg from "../assets/Home Image/Frame 611.png";
import keyboardImg from "../assets/Home Image/Frame 612.png";
import monitorImg from "../assets/Home Image/Frame 613.png";
import chairImg from "../assets/Home Image/Frame 614.png";
import coatImg from "../assets/Home Image/Frame 605.png";
import duffleBagImg from "../assets/Home Image/Frame 606.png";
import cpuCoolerImg from "../assets/Home Image/Frame 610.png";
import bookshelfImg from "../assets/Home Image/Frame 612 (1).png";
import dogFoodImg from "../assets/Home Image/Frame 604.png";
import cameraImg from "../assets/Home Image/Frame 604 (1).png";
import laptopImg from "../assets/Home Image/Frame 604 (2).png";
import perfumeImg from "../assets/Home Image/Frame 706.png";
import speakersImg from "../assets/Home Image/Frame 707.png";
import womanImg from "../assets/Home Image/attractive-woman-wearing-hat-posing-black-background 1.png";
import iphoneImg from "../assets/Home Image/hero_endframe__cvklg0xk3w6e_large 2.png";
import jblSpeakerImg from "../assets/Home Image/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
import ps5Img from "../assets/Home Image/ps5-slim-goedkope-playstation_large 1.png";
import curologyImg from "../assets/Home Image/curology-unsplash 1.png";

const sidebarCategories = [
  { label: "Woman's Fashion", hasArrow: true },
  { label: "Men's Fashion", hasArrow: true },
  { label: "Electronics" },
  { label: "Home & Lifestyle" },
  { label: "Medicine" },
  { label: "Sports & Outdoor" },
  { label: "Baby's & Toys" },
  { label: "Groceries & Pets" },
  { label: "Health & Beauty" },
];

const flashSaleProducts = [
  { name: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, discount: 40, rating: 5, reviews: 88, image: gamepadImg },
  { name: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, discount: 35, rating: 4, reviews: 75, image: keyboardImg },
  { name: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, discount: 30, rating: 5, reviews: 99, image: monitorImg },
  { name: "S-Series Comfort Chair", price: 375, oldPrice: 400, discount: 25, rating: 4, reviews: 99, image: chairImg },
];

const categories = [
  { label: "Phones", icon: PhoneIcon },
  { label: "Computers", icon: ComputerIcon },
  { label: "SmartWatch", icon: WatchIcon },
  { label: "Camera", icon: CameraIcon, active: true },
  { label: "HeadPhones", icon: HeadphoneIcon },
  { label: "Gaming", icon: GamingIcon },
];

const bestSellingProducts = [
  { name: "The north coat", price: 260, oldPrice: 360, rating: 4, reviews: 65, image: coatImg },
  { name: "Gucci duffle bag", price: 960, oldPrice: 1160, rating: 4, reviews: 65, image: duffleBagImg },
  { name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, rating: 4, reviews: 65, image: cpuCoolerImg },
  { name: "Small BookSelf", price: 360, rating: 4, reviews: 45, image: bookshelfImg },
];

const exploreProducts = [
  { name: "Breed Dry Dog Food", price: 100, rating: 3, reviews: 35, image: dogFoodImg },
  { name: "CANON EOS DSLR Camera", price: 360, rating: 4, reviews: 95, image: cameraImg },
  { name: "ASUS FHD Gaming Laptop", price: 700, rating: 5, reviews: 325, image: laptopImg },
  { name: "Curology Product Set", price: 500, rating: 4, reviews: 145, image: curologyImg },
  { name: "Breed Dry Dog Food", price: 100, rating: 3, reviews: 35, image: dogFoodImg },
  { name: "CANON EOS DSLR Camera", price: 360, rating: 4, reviews: 95, image: cameraImg },
  { name: "ASUS FHD Gaming Laptop", price: 700, rating: 5, reviews: 325, image: laptopImg },
  { name: "Curology Product Set", price: 500, rating: 4, reviews: 145, image: curologyImg },
];

const ArrowNav = () => (
  <div className="flex items-center gap-3">
    <button aria-label="Previous" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
      <ArrowIcon direction="left" />
    </button>
    <button aria-label="Next" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
      <ArrowIcon direction="right" />
    </button>
  </div>
);

const HeroBanner = () => {
  const [slide, setSlide] = useState(2);
  return (
    <div className="flex-1 bg-black text-white rounded-sm px-8 md:px-16 py-10 flex items-center justify-between overflow-hidden">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <AppleIcon className="w-10 h-10" />
          <p className="text-sm">iPhone 14 Series</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 max-w-xs leading-tight">
          Up to 10% off Voucher
        </h2>
        <a href="#" className="inline-flex items-center gap-2 text-sm underline underline-offset-4">
          Shop Now <ArrowIcon className="w-4 h-4" />
        </a>

        <div className="flex items-center gap-2 mt-10">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`w-2 h-2 rounded-full ${i === slide ? "bg-[#0D6EFD]" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>

      <img src={iphoneImg} alt="iPhone 14 Series" className="hidden md:block w-56 shrink-0 object-contain" />
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16">
      {/* Categories sidebar + hero banner */}
      <div className="flex gap-6 py-6 border-b border-gray-200">
        <aside className="hidden lg:block w-60 shrink-0">
          <ul className="text-sm divide-y divide-gray-100">
            {sidebarCategories.map(({ label, hasArrow }) => (
              <li key={label}>
                <a href="#" className="flex items-center justify-between py-2.5 hover:text-secondary">
                  {label}
                  {hasArrow && <ChevronRightIcon className="w-4 h-4" />}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <HeroBanner />
      </div>

      {/* Flash Sales */}
      <section className="py-16 border-b border-gray-200">
        <SectionHeading
          tag="Today's"
          title={
            <span className="flex items-center gap-8">
              Flash Sales
              <CountdownTimer />
            </span>
          }
          right={<ArrowNav />}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {flashSaleProducts.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-secondary text-white text-sm font-medium px-12 py-3 rounded-sm">
            View All Products
          </button>
        </div>
      </section>

      {/* Browse By Category */}
      <section className="py-16 border-b border-gray-200">
        <SectionHeading tag="Categories" title="Browse By Category" right={<ArrowNav />} />
        <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
          {categories.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              className={`flex flex-col items-center justify-center gap-3 border rounded-sm py-6 ${
                active ? "bg-secondary text-white border-secondary" : "border-border hover:border-secondary hover:text-secondary"
              }`}
            >
              <Icon className="w-8 h-8" />
              <span className="text-sm">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-16 border-b border-gray-200">
        <SectionHeading
          tag="This Month"
          title="Best Selling Products"
          right={
            <button className="bg-secondary text-white text-sm font-medium px-12 py-3 rounded-sm">
              View All
            </button>
          }
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bestSellingProducts.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* Music promo banner */}
      <section className="py-16">
        <div className="bg-black text-white rounded-sm px-8 md:px-20 py-16 flex items-center justify-between overflow-hidden">
          <div>
            <p className="text-accent font-semibold mb-4">Categories</p>
            <h2 className="text-3xl md:text-4xl font-semibold max-w-sm leading-tight mb-8">
              Enhance Your Music Experience
            </h2>
            <CountdownTimer days={23} hours={5} minutes={59} seconds={35} />
            <button className="mt-8 bg-accent text-black text-sm font-medium px-8 py-3 rounded-sm">
              Buy Now!
            </button>
          </div>
          <img src={jblSpeakerImg} alt="JBL Boombox 2 speaker" className="hidden md:block w-72 shrink-0 object-contain" />
        </div>
      </section>

      {/* Explore Our Products */}
      <section className="py-16 border-b border-gray-200">
        <SectionHeading tag="Our Products" title="Explore Our Products" right={<ArrowNav />} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {exploreProducts.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-secondary text-white text-sm font-medium px-12 py-3 rounded-sm">
            View All Products
          </button>
        </div>
      </section>

      {/* New Arrival */}
      <section className="py-16">
        <SectionHeading tag="Featured" title="New Arrival" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-sm overflow-hidden bg-gray-900 min-h-125 flex items-end p-8">
            <img src={ps5Img} alt="PlayStation 5" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
            <div className="relative text-white">
              <h3 className="text-2xl font-semibold mb-2">PlayStation 5</h3>
              <p className="text-sm text-gray-300 mb-3 max-w-xs">
                Black and White version of the PS5 coming out on sale.
              </p>
              <a href="#" className="text-sm underline underline-offset-4">Shop Now</a>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-6">
            <div className="relative rounded-sm overflow-hidden bg-gray-900 min-h-58.75 flex items-end p-8">
              <img src={womanImg} alt="Women's Collections" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent" />
              <div className="relative text-white">
                <h3 className="text-xl font-semibold mb-2 max-w-45">Women's Collections</h3>
                <p className="text-sm text-gray-300 mb-3 max-w-xs">
                  Featured woman collections that give you another vibe.
                </p>
                <a href="#" className="text-sm underline underline-offset-4">Shop Now</a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative rounded-sm overflow-hidden bg-gray-900 min-h-58.75 flex items-end p-6">
                <img src={speakersImg} alt="Speakers" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                <div className="relative text-white">
                  <h3 className="text-lg font-semibold mb-2">Speakers</h3>
                  <a href="#" className="text-xs underline underline-offset-4">Shop Now</a>
                </div>
              </div>
              <div className="relative rounded-sm overflow-hidden bg-gray-900 min-h-58.75 flex items-end p-6">
                <img src={perfumeImg} alt="Perfume" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                <div className="relative text-white">
                  <h3 className="text-lg font-semibold mb-2">Perfume</h3>
                  <a href="#" className="text-xs underline underline-offset-4">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default HomePage;
