
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import StudentCredibilityScore from "@/components/StudentCredibilityScore";

const CreditScore = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-mint/20">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Credit Score</h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Based on our proprietary algorithm analyzing your academic, social, and behavioral data
        </p>
        
        <div className="max-w-3xl mx-auto">
          <StudentCredibilityScore />
        </div>
        
        <div className="mt-12 text-center">
          <Button onClick={() => navigate('/dashboard')} className="bg-mint text-navy hover:bg-mint/80">
            Proceed to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreditScore;
