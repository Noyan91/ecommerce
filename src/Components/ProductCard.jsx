import { StarIcon, HeartIcon, EyeIcon } from "./icons";

const ProductCard = ({ name, price, oldPrice, discount, badge, rating, reviews, image, icon: Icon, iconBg = "text-gray-300" }) => {
  return (
    <div className="w-full">
      <div className="group relative bg-gray-100 rounded-sm aspect-square flex items-center justify-center overflow-hidden">
        {(discount || badge) && (
          <span className="absolute top-3 left-3 bg-secondary text-white text-xs rounded-sm px-2 py-1">
            {discount ? `-${discount}%` : badge}
          </span>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button aria-label="Add to wishlist" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:text-secondary">
            <HeartIcon className="w-4 h-4" />
          </button>
          <button aria-label="Quick view" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:text-secondary">
            <EyeIcon className="w-4 h-4" />
          </button>
        </div>

        {image ? (
          <img src={image} alt={name} className="w-full h-full object-contain p-6" />
        ) : (
          <Icon className={`w-16 h-16 ${iconBg}`} />
        )}

        <button className="absolute inset-x-0 bottom-0 bg-black text-white text-sm py-2 translate-y-full group-hover:translate-y-0 transition-transform">
          Add To Cart
        </button>
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-sm font-medium truncate">{name}</p>
        <div className="flex items-center gap-2">
          <span className="text-secondary font-medium">${price}</span>
          {oldPrice && <span className="text-gray-400 line-through text-sm">${oldPrice}</span>}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < rating} className="w-3.5 h-3.5" />
            ))}
          </div>
          <span className="text-gray-500 text-xs">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
