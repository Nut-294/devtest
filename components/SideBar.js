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
    <nav className="fixed bottom-0 sm:static h-[100px] sm:h-screen w-full sm:w-[157px] bg-blue-800 text-white flex sm:flex-col justify-around sm:justify-center items-center sm:items-center rounded-t-4xl sm:rounded-none sm:rounded-r-4xl py-2 sm:py-0 z-50">
      <div className="flex w-full sm:w-auto flex-row sm:flex-col justify-around sm:space-y-10">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="w-16 h-16 text-xl flex flex-col items-center justify-center rounded-full hover:rounded-full hover:bg-white hover:text-blue-800 transition "
          >
            <div className="flex flex-col items-center justify-center text-center leading-tight">
              {item.icon}
              <span className="text-[10px] sm:text-xs">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SideBar;
