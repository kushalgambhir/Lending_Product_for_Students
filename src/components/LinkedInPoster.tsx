
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check, Rocket, Lightning, Calendar, Brain } from "lucide-react";

interface LinkedInPosterProps {
  onClose?: () => void;
}

const LinkedInPoster: React.FC<LinkedInPosterProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-3xl bg-white relative">
        {onClose && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            ×
          </button>
        )}
        <CardContent className="p-0">
          <div className="aspect-[16/9] overflow-hidden">
            {/* LinkedIn Post Design */}
            <div className="bg-gradient-to-br from-navy to-mint/70 p-8 h-full flex flex-col">
              <div className="flex-1 flex flex-col">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                    AI-Powered Student <span className="gradient-text">Credit Scoring</span>
                  </h1>
                  <h2 className="text-xl md:text-2xl text-white/90">
                    Revolutionizing student loans with ML-driven creditworthiness assessment
                  </h2>
                </div>
                
                <div className="bg-white/90 rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center text-center p-2">
                      <div className="w-12 h-12 rounded-full bg-mint/30 flex items-center justify-center mb-2">
                        <Brain className="h-6 w-6 text-navy" />
                      </div>
                      <h3 className="font-bold text-navy">Academic Intelligence</h3>
                      <p className="text-sm text-gray-600">Evaluates academic performance and potential</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center p-2">
                      <div className="w-12 h-12 rounded-full bg-lavender/30 flex items-center justify-center mb-2">
                        <Check className="h-6 w-6 text-lavender" />
                      </div>
                      <h3 className="font-bold text-navy">Social Intelligence</h3>
                      <p className="text-sm text-gray-600">Analyzes digital footprint and social connections</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center p-2">
                      <div className="w-12 h-12 rounded-full bg-peach/30 flex items-center justify-center mb-2">
                        <Lightning className="h-6 w-6 text-peach" />
                      </div>
                      <h3 className="font-bold text-navy">Behavioral Data</h3>
                      <p className="text-sm text-gray-600">Tracks interaction patterns and consistency</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className="bg-navy/80 text-white rounded-full px-6 py-2 flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    <span>Developed in just 5 days</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Rocket className="mr-2 h-5 w-5 text-white" />
                    <span className="text-white font-bold">Gradely</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t">
            <p className="text-gray-600">
              <span className="font-bold">LinkedIn Post Copy:</span><br/>
              Excited to share our latest innovation: an AI-powered student credibility scoring system, built in just 5 days using modern AI tools! 🚀<br/><br/>
              
              Our prototype evaluates students based on three key metrics:<br/>
              ✅ Academic Performance<br/>
              ✅ Social Intelligence<br/>
              ✅ Behavioral Data<br/><br/>
              
              This allows us to provide instant credit decisions based on a student's true potential, not just traditional credit history.<br/><br/>
              
              #FinTech #StudentLoans #AIInnovation #PrototypeDevelopment
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinkedInPoster;
