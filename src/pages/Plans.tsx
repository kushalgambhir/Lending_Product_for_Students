
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import LoanPlans from "@/components/LoanPlans";
import { Button } from "@/components/ui/button";

const Plans = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (plan: any) => {
    // Store selected plan in session storage
    sessionStorage.setItem('selectedPlan', JSON.stringify(plan));
    // Navigate to login or onboarding
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-mint/20">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Choose Your Plan</h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Select the loan plan that best fits your academic journey and financial needs.
        </p>
        
        <LoanPlans onSelectPlan={handleSelectPlan} />
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Not sure which plan is right for you?</p>
          <Button variant="outline" onClick={() => navigate('/how-it-works')}>
            Learn More About Our Plans
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
