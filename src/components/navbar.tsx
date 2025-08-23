import { Link } from 'react-router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-border border-b bg-white shadow-lg dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-around">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-primary hover:text-primary/80 text-2xl font-bold transition-colors duration-200"
            >
              Cartify
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline justify-between space-x-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary hover:bg-accent/50 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary hover:bg-accent/50 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary hover:bg-accent/50 focus:ring-primary inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:outline-none focus:ring-inset"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="border-border space-y-1 border-t px-2 pt-2 pb-3 sm:px-3">
            <Link
              to="/"
              className="text-foreground hover:text-primary hover:bg-accent/50 block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary hover:bg-accent/50 block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
