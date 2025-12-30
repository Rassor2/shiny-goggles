import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { categories } from '../data/mock';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-green-700">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">EnergyWise<span className="text-green-700">Home</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-green-700' : 'text-gray-600 hover:text-green-700'}`}
            >
              Home
            </Link>
            
            {/* Categories Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-green-700 transition-colors"
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                onBlur={() => setTimeout(() => setCategoriesOpen(false), 200)}
              >
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {categoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/category/${cat.slug}`}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/articles" 
              className={`text-sm font-medium transition-colors ${isActive('/articles') ? 'text-green-700' : 'text-gray-600 hover:text-green-700'}`}
            >
              All Articles
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-green-700' : 'text-gray-600 hover:text-green-700'}`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/category/energy-savings">
              <Button className="bg-green-700 hover:bg-green-800 text-white">
                Start Saving
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <div className="p-1.5 rounded-lg bg-green-700">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-gray-900">EnergyWise<span className="text-green-700">Home</span></span>
                  </Link>
                </div>
                
                <nav className="flex flex-col gap-4">
                  <Link 
                    to="/" 
                    className="text-lg font-medium text-gray-900 py-2 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/articles" 
                    className="text-lg font-medium text-gray-900 py-2 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Articles
                  </Link>
                  
                  <div className="py-2">
                    <p className="text-sm font-semibold text-gray-500 mb-3">Categories</p>
                    <div className="space-y-2 pl-2">
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/category/${cat.slug}`}
                          className="block text-gray-700 py-1.5 hover:text-green-700 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    className="text-lg font-medium text-gray-900 py-2 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>

                <div className="mt-auto pt-6">
                  <Link to="/category/energy-savings" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                      Start Saving Energy
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
