
import React from 'react';
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-mint/20">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">About Gradely</h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Building credit solutions for tomorrow's leaders.
        </p>
        
        <div className="bg-white p-8 rounded-xl shadow-sm mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Gradely, we believe that academic achievement is a strong indicator of future success. Our mission is to help college students build credit responsibly while rewarding them for their educational achievements.
              </p>
              <p className="text-gray-600">
                Traditional credit scoring doesn't consider a student's academic potential, campus involvement, or career trajectory. We're changing that with our innovative AI-driven approach to student credit.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="space-y-4">
                <li>
                  <div className="font-semibold">Educational Excellence</div>
                  <p className="text-gray-600">We believe in the power of education and reward students for academic achievement.</p>
                </li>
                <li>
                  <div className="font-semibold">Financial Responsibility</div>
                  <p className="text-gray-600">Our tools help students learn healthy financial habits from the start.</p>
                </li>
                <li>
                  <div className="font-semibold">Innovation</div>
                  <p className="text-gray-600">We leverage AI and technology to create a more equitable credit system for students.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {name: "Priya Sharma", role: "CEO & Founder", image: "https://i.pravatar.cc/150?img=44"},
              {name: "Rahul Mehta", role: "CTO", image: "https://i.pravatar.cc/150?img=69"},
              {name: "Anjali Gupta", role: "Chief Data Scientist", image: "https://i.pravatar.cc/150?img=26"},
              {name: "Vikram Singh", role: "Head of Student Relations", image: "https://i.pravatar.cc/150?img=67"}
            ].map((person, index) => (
              <div key={index} className="text-center">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-3"
                />
                <div className="font-semibold">{person.name}</div>
                <div className="text-sm text-gray-500">{person.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
