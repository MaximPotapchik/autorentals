import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-4 lg:px-20 sm:border-b-4 border-b-2">
      <div className="flex items-center">
      <Image src="/download.webp" alt="logo" width={150} height={100} />
        
      </div>
      <div className="flex lg:justify-end space-x-4">
        <Link href="/" className="px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-200 ease-in-out">
          Home
        </Link>
        <Link href='/fleet' className="px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-200 ease-in-out">
          Fleet
        </Link>
        <Link href='/services' className="px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-200 ease-in-out">
          Services
        </Link>
        <Link href="/contact"  className="px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-200 ease-in-out">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;


