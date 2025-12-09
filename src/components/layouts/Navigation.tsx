import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul className="md:flex md:space-x-4">
      <li className="py-2 px-16 md:py-0 md:px-0">
        <Link to="/" className="hover:underline text-background">
          Home
        </Link>
      </li>
      <li className="py-2 px-16 md:py-0 md:px-0">
        <Link to="/about" className="hover:underline text-background">
          About Me
        </Link>
      </li>
      <li className="py-2 px-16 md:py-0 md:px-0">
        <Link to="/contact" className="hover:underline text-background">
          Contact Me
        </Link>
      </li>
      <li className="py-2 px-16 md:py-0 md:px-0">
        <Link to="/timeline" className="hover:underline text-background">
          Timeline
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
