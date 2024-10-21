// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-end">
    <h5 className='text-white mt-0 mr-[700px]'>shop.co</h5>
      <ul className="flex space-x-11 mr-8">
        <li>
          <Link href="/"
          className="text-white hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link href="/about"
           className="text-white hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
