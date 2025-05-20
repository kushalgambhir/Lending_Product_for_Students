
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-mint/20">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">How Gradely Works</h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Gradely helps college students build credit responsibly while rewarding academic excellence.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              step: "Step 1",
              title: "Create Your Profile",
              description: "Sign up with your student email, connect your academic history, and let our AI understand your potential."
            },
            {
              step: "Step 2",
              title: "Get Your Credit Score",
              description: "Our AI analyzes your academic performance, extracurricular activities and more to determine your credit eligibility."
            },
            {
              step: "Step 3",
              title: "Choose Your Plan",
              description: "Select from our tailored student loan plans based on your needs and academic standing."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-mint font-semibold mb-2">{item.step}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Our Approach Is Different</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Academic Achievement Rewards</h3>
              <ul className="space-y-3">
                {["Lower interest rates for higher GPA", "Credit limit increases with academic progress", "Special perks for Dean's List students"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-mint mr-2" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Smart Financial Tools</h3>
              <ul className="space-y-3">
                {["Customizable spending alerts", "Category-based spending limits", "Financial education resources", "Emergency extensions for graduates"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-mint mr-2" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button onClick={() => navigate('/plans')} className="btn-mint" size="lg">
            View Loan Plans
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
