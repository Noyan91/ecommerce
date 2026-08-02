export const StarIcon = ({ filled = true, className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={`${className} ${filled ? "fill-gold" : "fill-gray-200"}`}>
    <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.9l-6.4 3.8 1.7-7.3-5.6-4.9 7.4-.6z" />
  </svg>
);

export const HeartIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path
      d="M12 20.5s-7.5-4.6-10-9.3C.4 8 1.6 4.5 4.8 3.4c2.2-.8 4.5 0 5.9 1.8l1.3 1.7 1.3-1.7c1.4-1.8 3.7-2.6 5.9-1.8 3.2 1.1 4.4 4.6 2.8 7.8-2.5 4.7-10 9.3-10 9.3z"
      strokeLinejoin="round"
    />
  </svg>
);

export const EyeIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const CartIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 4h2l2.4 12.2a2 2 0 002 1.8h8.4a2 2 0 002-1.6L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9.5" cy="21" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="17.5" cy="21" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const ArrowIcon = ({ direction = "right", className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path
      d={direction === "right" ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronRightIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PhoneIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M11 18h2" strokeLinecap="round" />
  </svg>
);

export const ComputerIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
    <rect x="2" y="4" width="20" height="13" rx="1.5" />
    <path d="M8 21h8M12 17v4" strokeLinecap="round" />
  </svg>
);

export const WatchIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M9 7V4h6v3M9 17v3h6v-3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CameraIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
    <path d="M3 8h3l2-2h8l2 2h3v11a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" strokeLinejoin="round" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

export const HeadphoneIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
    <path d="M4 13v-1a8 8 0 0116 0v1" strokeLinecap="round" />
    <rect x="2" y="13" width="5" height="7" rx="1.5" />
    <rect x="17" y="13" width="5" height="7" rx="1.5" />
  </svg>
);

export const GamingIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
    <path d="M6 9h12l2 8a2 2 0 01-3.5 1.5L14 16h-4l-2.5 2.5A2 2 0 014 17z" strokeLinejoin="round" />
    <path d="M8 11v3M6.5 12.5h3" strokeLinecap="round" />
    <circle cx="16" cy="11.5" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="18" cy="13.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const TruckIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
    <path d="M2 6h11v10H2z" strokeLinejoin="round" />
    <path d="M13 10h4l3 3v3h-7z" strokeLinejoin="round" />
    <circle cx="6.5" cy="18" r="1.6" />
    <circle cx="16.5" cy="18" r="1.6" />
  </svg>
);

export const HeadsetIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
    <path d="M4 13v-1a8 8 0 0116 0v5a2 2 0 01-2 2h-1v-6h3" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="2" y="13" width="5" height="7" rx="1.5" />
    <path d="M17 19a2 2 0 01-2 2h-2" strokeLinecap="round" />
  </svg>
);

export const BoxIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
    <path d="M3 7l9-4 9 4-9 4-9-4z" strokeLinejoin="round" />
    <path d="M3 7v10l9 4 9-4V7M12 11v10" strokeLinejoin="round" />
  </svg>
);

export const ShirtIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
    <path d="M8 4L3 7l2 3 2-1v11h10V9l2 1 2-3-5-3-2 2h-2z" strokeLinejoin="round" />
  </svg>
);

export const BagIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
    <rect x="3" y="8" width="18" height="13" rx="1.5" />
    <path d="M8 8V6a4 4 0 018 0v2" strokeLinecap="round" />
  </svg>
);

export const ShelfIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M3 11h18M9 3v8M9 15v6" strokeLinecap="round" />
  </svg>
);

export const AppleIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M16.7 1c.1 1.1-.3 2.2-1 3-.7.8-1.9 1.5-3 1.4-.1-1.1.4-2.2 1-3 .8-.8 2-1.4 3-1.4zM20.9 17.3c-.5 1.1-1 2.1-1.7 3.1-1 1.4-2 3.1-3.6 3.1-1.4 0-1.8-.9-3.5-.9s-2.2.9-3.5.9c-1.5.1-2.7-1.5-3.6-2.9C3 17.9 2 13.4 3.5 10.3c.7-1.5 2.1-2.5 3.5-2.5 1.4 0 2.3 1 3.4 1s2.4-1.2 4-1c.7 0 2.6.3 3.8 2-.1 0-2.3 1.3-2.3 3.9 0 3.1 2.7 4.1 3 4.6z" />
  </svg>
);

export const ShieldIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
    <path d="M12 2l8 3v6c0 5-3.4 8.7-8 11-4.6-2.3-8-6-8-11V5z" strokeLinejoin="round" />
    <path d="M8.5 12l2.5 2.5 4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
