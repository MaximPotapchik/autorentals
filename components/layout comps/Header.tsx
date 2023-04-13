import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-4 lg:px-20 sm:border-b-4 border-b-2">
      <div className="flex items-center">
      <Image src="/download.webp" alt="logo" width={150} height={100} />
        
      </div>
      <div className="flex lg:justify-end space-x-4">
        <a href="/" className="px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-200 ease-in-out">
          Home
        </a>
        <a href="/" className="px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-200 ease-in-out">
          Fleet
        </a>
        <a href="/" className="px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-200 ease-in-out">
          Services
        </a>
        <a href="/" className="px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-200 ease-in-out">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;


