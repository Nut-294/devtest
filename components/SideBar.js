import Link from "next/link";
import { CiHome, CiSearch, CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

const menuItems = [
  { label: "Home", href: "/", icon: <CiHome /> },
  { label: "Explore", href: "/explore", icon: <CiSearch /> },
  { label: "Trips", href: "/trips", icon: <CiHeart /> },
  { label: "Profile", href: "/profile", icon: <FiUser /> },
];
const SideBar = () => {
  return (
    <nav className="h-screen w-28 bg-blue-800 text-white flex justify-center items-center rounded-r-4xl">
      <div className="flex flex-col items-center space-y-10">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-white hover:text-blue-800 transition text-xl"
          >
            <div className="flex flex-col items-center justify-center text-center leading-tight">
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SideBar;
