
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChartLine, TrendingUp, Award, Star } from "lucide-react";

const StudentCredibilityScore = ({ previewMode = false }) => {
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (!previewMode) {
      // In a real app, this would be an API call to the ML backend
      const calculateStudentScore = () => {
        // Simulate ML algorithm calculating score based on collected data
        // This would actually use data from the student's profile
        setLoading(true);
        
        setTimeout(() => {
          const academicScore = Math.random() * 40 + 60; // 60-100
          const socialScore = Math.random() * 30 + 60; // 60-90
          const behavioralScore = Math.random() * 20 + 70; // 70-90
          
          // Weighted average (academic more important than others)
          const weightedScore = (academicScore * 0.5) + (socialScore * 0.3) + (behavioralScore * 0.2);
          
          setScore(Math.round(weightedScore));
          setLoading(false);
        }, 1500);
      };
      
      calculateStudentScore();
    } else {
      // In preview mode, just show a high score
      setScore(87);
      setLoading(false);
    }
  }, [previewMode]);
  
  const getScoreCategory = (score: number) => {
    if (score >= 90) return { label: "Excellent", color: "bg-green-500" };
    if (score >= 80) return { label: "Very Good", color: "bg-mint" };
    if (score >= 70) return { label: "Good", color: "bg-blue-500" };
    if (score >= 60) return { label: "Fair", color: "bg-yellow-500" };
    return { label: "Needs Improvement", color: "bg-red-500" };
  };
  
  const scoreCategory = getScoreCategory(score);
  
  const getApprovedCreditLimit = (score: number) => {
    // Calculate approved credit limit based on score
    if (score >= 90) return "₹2,00,000";
    if (score >= 80) return "₹1,50,000";
    if (score >= 70) return "₹1,00,000";
    if (score >= 60) return "₹75,000";
    return "₹50,000";
  };
  
  const scoreFactors = [
    { 
      name: "Academic Performance", 
      score: Math.min(100, score + Math.floor(Math.random() * 10 - 5)), 
      icon: Award,
      description: "Based on your GPA, course load, and academic history" 
    },
    { 
      name: "Social Profile", 
      score: Math.min(100, score + Math.floor(Math.random() * 15 - 10)), 
      icon: Star,
      description: "Based on your campus involvement and digital footprint" 
    },
    { 
      name: "Behavioral Data", 
      score: Math.min(100, score + Math.floor(Math.random() * 12 - 6)), 
      icon: ChartLine, 
      description: "Based on your app usage patterns and financial behavior"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Student Credibility Score</CardTitle>
          <CardDescription>
            Powered by Gradely's AI algorithm
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex flex-col items-center justify-center p-8">
              <div className="w-16 h-16 border-4 border-mint border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-sm text-gray-500">Calculating your score...</p>
            </div>
          ) : (
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-48 h-48 rounded-full border-8 border-gray-100 flex items-center justify-center">
                  <div>
                    <div className="text-5xl font-bold text-navy">{score}</div>
                    <div className="text-sm text-gray-500">out of 100</div>
                  </div>
                </div>
                <Badge className={`absolute top-0 right-0 ${scoreCategory.color} text-white`}>
                  {scoreCategory.label}
                </Badge>
              </div>
              
              <div className="mt-6">
                <div className="text-lg font-medium">Approved Credit Limit</div>
                <div className="text-3xl font-bold text-mint">{getApprovedCreditLimit(score)}</div>
              </div>
              
              <div className="mt-8 space-y-6">
                <div className="text-left text-lg font-medium mb-3">Score Factors</div>
                {scoreFactors.map((factor, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <factor.icon className="mr-2 text-mint" size={18} />
                        <span>{factor.name}</span>
                      </div>
                      <span className="font-medium">{factor.score}</span>
                    </div>
                    <Progress value={factor.score} className="h-2" />
                    <p className="text-xs text-gray-500">{factor.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-lavender/20 rounded-lg">
                <div className="flex items-center">
                  <TrendingUp className="text-mint mr-2" size={20} />
                  <span className="font-medium">Score Improvement Tips</span>
                </div>
                <ul className="mt-2 text-sm text-left space-y-1">
                  <li>• Maintain or improve your GPA this semester</li>
                  <li>• Join more campus activities and organizations</li>
                  <li>• Make on-time payments for any existing loans</li>
                </ul>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentCredibilityScore;
