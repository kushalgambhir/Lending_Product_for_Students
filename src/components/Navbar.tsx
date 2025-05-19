
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <Link to="/" className="flex items-center">
        <div className="font-bold text-2xl text-navy">
          <span className="gradient-text">Gradely</span>
        </div>
      </Link>
      
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-navy hover:text-mint transition-colors">Home</Link>
        <Link to="/how-it-works" className="text-navy hover:text-mint transition-colors">How It Works</Link>
        <Link to="/plans" className="text-navy hover:text-mint transition-colors">Loan Plans</Link>
        <Link to="/about" className="text-navy hover:text-mint transition-colors">About Us</Link>
      </div>
      
      <div className="flex items-center space-x-3">
        <Button variant="outline" className="hidden md:block">Login</Button>
        <Button className="bg-mint text-navy hover:bg-mint/80">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
