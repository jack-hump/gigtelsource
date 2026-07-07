import Link from "next/link";
import { useRouter } from "next/router";

export const NavLinks = () => {
  const router = useRouter();

  const link = (href: string, label: string) => {
    const active = router.pathname === href;
    return (
      <Link
        href={href}
        className={`px-4 text-lg ${
          active ? "text-teal-600 font-semibold" : "text-black"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="flex items-center space-x-6">
      {link("/", "Home")}
      {link("/about", "About Us")}
      {link("/plans", "Plans (Compare)")}
      {link("/stripePricingPage", "Plans (checkout)")}
      {link("/blog", "Blog")}
      <a
        href="https://billing.stripe.com/p/login/aEUg0H4zF2VS6JO288"
        className="px-4 text-lg text-black"
      >
        Client Portal
      </a>

      <a href="tel:+61448313775">
        <button className="flex items-center bg-button-1 text-white py-3 px-5 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            <path d="M15 7a2 2 0 0 1 2 2" />
            <path d="M15 3a6 6 0 0 1 6 6" />
          </svg>
          <span className="ml-2 text-xl">0448 313 775</span>
        </button>
      </a>
    </nav>
  );
};

