
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import StudentCredibilityScore from "@/components/StudentCredibilityScore";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const CreditScore = () => {
  const navigate = useNavigate();
  
  const handleAcceptOffer = () => {
    toast({
      title: "Credit Limit Accepted",
      description: "Congratulations! Your credit limit has been successfully activated.",
    });
    navigate('/dashboard');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-mint/20">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Instant Credit Approval</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Based on our proprietary AI algorithm analyzing your academic performance, social profile, and behavioral data
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <Check className="h-5 w-5 text-blue-500" />
                </div>
                Academic Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Your college reputation, GPA, course completion rate, and academic achievements are factored into your credit assessment.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-mint/30 flex items-center justify-center mr-2">
                  <Check className="h-5 w-5 text-mint" />
                </div>
                Social Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We analyze your digital footprint, campus involvement, and social connections to assess your credibility profile.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-lavender/30 flex items-center justify-center mr-2">
                  <Check className="h-5 w-5 text-lavender" />
                </div>
                Behavioral Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Your app usage patterns, financial responsibility indicators, and interaction consistency contribute to your score.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-3xl mx-auto mb-8">
          <StudentCredibilityScore />
        </div>
        
        <div className="mt-8 text-center">
          <Card className="max-w-md mx-auto bg-mint/10 border-mint">
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                Accept your pre-approved credit limit now and start using it immediately!
              </p>
              <div className="space-x-4">
                <Button 
                  onClick={handleAcceptOffer}
                  className="bg-mint text-navy hover:bg-mint/80 px-6"
                >
                  Accept Offer <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  onClick={() => navigate('/dashboard')} 
                  variant="outline"
                >
                  Review Later
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreditScore;
