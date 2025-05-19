
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";

interface CreditScoreCardProps {
  previewMode?: boolean;
  simplified?: boolean;
}

const CreditScoreCard: React.FC<CreditScoreCardProps> = ({ previewMode = false, simplified = false }) => {
  const [aiScore, setAiScore] = useState(684);
  
  // Factors affecting the credit score in this demo
  const factors = [
    { name: 'Academic Performance', score: 87, impact: 'high', description: 'GPA and course completion history' },
    { name: 'Social Verification', score: 72, impact: 'medium', description: 'Social media profile maturity and connections' },
    { name: 'Career Trajectory', score: 68, impact: 'medium', description: 'Major & career outlook' },
    { name: 'Financial Responsibility', score: 65, impact: 'high', description: 'Payment history & spending patterns' },
  ];
  
  // For simplified view, just show fewer elements
  const displayFactors = simplified ? factors.slice(0, 2) : factors;
  
  const getScoreColor = (score: number) => {
    if (score >= 750) return 'text-green-600';
    if (score >= 650) return 'text-blue-600';
    if (score >= 550) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  const getScoreCategory = (score: number) => {
    if (score >= 750) return 'Excellent';
    if (score >= 650) return 'Good';
    if (score >= 550) return 'Fair';
    return 'Needs Improvement';
  };
  
  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-blue-500';
    if (score >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <div className="w-full">
      <div className={`${!simplified ? 'mb-6' : 'mb-2'}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className={`${simplified ? 'text-xl' : 'text-2xl'} font-bold`}>
            Your AI Credit Score
          </h3>
          {!simplified && !previewMode && (
            <Button variant="outline" size="sm">
              Refresh Score
            </Button>
          )}
        </div>
        
        <div className="flex items-center justify-center">
          <div className={`relative ${simplified ? 'w-24 h-24' : 'w-36 h-36'} rounded-full flex items-center justify-center bg-gray-50 border-4 border-mint`}>
            <div className="text-center">
              <div className={`${getScoreColor(aiScore)} ${simplified ? 'text-2xl' : 'text-4xl'} font-bold`}>
                {aiScore}
              </div>
              <div className={`${simplified ? 'text-xs' : 'text-sm'} text-gray-500`}>
                {getScoreCategory(aiScore)}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {!previewMode && !simplified && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-gray-500">Available Credit</div>
            <div className="text-2xl font-bold">$2,500</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-gray-500">Interest Rate</div>
            <div className="text-2xl font-bold">9.75%</div>
          </div>
        </div>
      )}
      
      <div className={`${simplified ? 'space-y-2' : 'space-y-4'}`}>
        <h4 className={`${simplified ? 'text-sm' : 'text-base'} font-medium`}>Score Factors</h4>
        <div className={`${simplified ? 'space-y-2' : 'space-y-4'}`}>
          {displayFactors.map((factor) => (
            <div key={factor.name}>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <span className={`${simplified ? 'text-sm' : 'text-base'}`}>{factor.name}</span>
                  
                  {!simplified && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="ml-1 text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{factor.description}</p>
                          <p className="text-xs mt-1">Impact: {factor.impact}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                <span className={`${getScoreColor(factor.score)} font-medium ${simplified ? 'text-sm' : 'text-base'}`}>{factor.score}</span>
              </div>
              <Progress 
                value={factor.score} 
                className={`h-1.5 ${getProgressColor(factor.score)}`} 
              />
            </div>
          ))}
        </div>
      </div>
      
      {!simplified && !previewMode && (
        <div className="mt-6">
          <Button className="w-full">View Full Credit Analysis</Button>
        </div>
      )}
    </div>
  );
};

export default CreditScoreCard;
