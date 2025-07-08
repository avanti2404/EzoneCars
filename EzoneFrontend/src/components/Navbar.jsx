import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import { scroller } from "react-scroll";


const Navbar = ({ setScrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (section) => {
    console.log(location.pathname);
    console.log(section);

    if (location.pathname !== "/") {
      setScrollToSection(section); // Save target section
      navigate("/"); // Navigate to Home first
    } else {
      scroller.scrollTo(section, { duration: 400, smooth: true, offset: -130 });
    }
  };

  // Function to handle "Home" click
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0, { duration: 500, smooth: true, offset: -100 });
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="containerr">
        <div className="flex justify-between h-16">
          <div className="flex items-center h-full">
            <Link to="/" onClick={() => handleHomeClick()}>
              <img src='/eZoneLogo.png' className='w-32'></img>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {/* Home Tab with Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-600 hover:text-primary-blue transition-colors flex items-center"
              >
                Home <ChevronDown size={16} className='ml-1 mt-1' />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute -left-11 mt-[21px] w-48 bg-white shadow-xl overflow-hidden border border-gray-200">
                  <button
                    onClick={() => { handleScrollTo("about"), setIsDropdownOpen(false) }}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 w-full text-left"
                  >
                    About
                  </button>
                  <button
                    onClick={() => { handleScrollTo("popularDestinations"), setIsDropdownOpen(false) }}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 w-full text-left"
                  >
                    Popular Destinations
                  </button>
                  <button
                    onClick={() => { handleScrollTo("successfulAchievements"), setIsDropdownOpen(false) }}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 w-full text-left"
                  >
                    Successful Achievements
                  </button>
                  <button
                    onClick={() => { handleScrollTo("howItWorks"), setIsDropdownOpen(false) }}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 w-full text-left"
                  >
                    How It Works
                  </button>
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            <NavLink to="/services" className="text-gray-600 hover:text-primary-blue transition-colors">
              Services
            </NavLink>
            <NavLink to="/car-fleet" className="text-gray-600 hover:text-primary-blue transition-colors">
              Car Fleet
            </NavLink>
            <NavLink to="/contact" className="bg-primary-blue text-white px-4 py-2 rounded-md transition-colors">
              Contact Us
            </NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <Menu className="h-6 w-6" /> 
            </button>
          </div>
        </div>
      </div>


      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

        {/* Sidebar Header with Logo and Close Button */}
        <div className="flex justify-between items-center h-16 px-5 sm:px-6">
          <img src="/eZoneLogo.png" alt="eZone Logo" className="w-32" />
          <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <div className="py-6 px-5 sm:px-6 flex flex-col gap-2 w-full text-base">
          <NavLink to="/" className="block pl-2 py-2 text-primary-blue font-bold font-heading text-lg transition-colors w-full"
            onClick={() => {setIsOpen(false), handleHomeClick()}}>
              Home
          </NavLink>

          <button
            className="pl-7 py-1 text-gray-700 transition-colors w-full text-left "
            onClick={() => {setIsOpen(false); handleScrollTo("about");}}>
              About
          </button>
          <button
            className="pl-7 py-1 text-gray-700 transition-colors w-full text-left "
            onClick={() => {setIsOpen(false); handleScrollTo("popularDestinations");}}>
              Popular Destinations
          </button>
          <button
            className="pl-7 py-1 text-gray-700 transition-colors w-full text-left"
            onClick={() => {setIsOpen(false); handleScrollTo("successfulAchievements");}}>
              Successful Achievements
          </button>
          <button
            className="pl-7 py-1 text-gray-700 transition-colors w-full text-left "
            onClick={() => {setIsOpen(false); handleScrollTo("howItWorks");}}>
              How It Works
          </button>

          <NavLink to="/services" className="block pl-2 py-2 text-primary-blue font-bold font-heading text-lg transition-colors w-full "
            onClick={() => setIsOpen(false)}>
            Services
          </NavLink>

          <NavLink to="/car-fleet" className="block pl-2 py-2 text-primary-blue font-bold font-heading text-lg transition-colors w-full "
            onClick={() => setIsOpen(false)}>
            Car Fleet
          </NavLink>

          <NavLink to="/contact" className="block pl-2 py-2 text-primary-blue font-bold font-heading text-lg transition-colors w-full "
            onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>

          {/* <NavLink
            to="/"
            className="block px-3 py-2 text-gray-700 font-medium transition-colors w-full hover:text-primary-blue"
            onClick={() => {
              setIsOpen(false);
              handleHomeClick();
            }}
          >
            Home
          </NavLink>
          <button
            className="block px-3 py-2 text-gray-700 font-medium transition-colors w-full hover:text-primary-blue"
            onClick={() => {
              setIsOpen(false);
              handleScrollTo("about");
            }}
          >
            About
          </button>
          <NavLink to="/services" className="block px-3 py-2 text-gray-700 font-medium transition-colors w-full hover:text-primary-blue"
            onClick={() => setIsOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/contact" className="block px-3 py-2 text-gray-700 font-medium transition-colors w-full hover:text-primary-blue"
            onClick={() => setIsOpen(false)}>
            Contact
          </NavLink> */}
        </div>
      </div>



    </nav>
  )
}

export default Navbar