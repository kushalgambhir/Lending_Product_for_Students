
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Brain, Users, Calendar, Bell, Smile } from "lucide-react";

const MentalWellness = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">MindFlow</h1>
          </div>
          <Button onClick={() => navigate('/wellness-dashboard')} className="bg-indigo-600 hover:bg-indigo-700">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Mental Wellness for the <span className="text-indigo-600">Modern Indian Professional</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          A culturally-aware mental wellness platform that integrates with your work life. 
          Built for the unique challenges of Indian professionals.
        </p>
        <Button 
          onClick={() => navigate('/wellness-dashboard')} 
          size="lg" 
          className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4"
        >
          Start Your Wellness Journey
        </Button>
      </section>

      {/* Market Fit & Research */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Market Fit & Research</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-6 w-6 text-indigo-600" />
                  Target Market
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 450M+ working professionals in India</li>
                  <li>• 68% report high stress levels</li>
                  <li>• 85% work 50+ hours/week</li>
                  <li>• 92% use smartphones daily</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 h-6 w-6 text-red-500" />
                  Key Problems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mental health stigma in workplaces</li>
                  <li>• Lack of culturally relevant solutions</li>
                  <li>• Time constraints for self-care</li>
                  <li>• Limited access to mental health resources</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-6 w-6 text-green-500" />
                  Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• $2.3B mental health market by 2025</li>
                  <li>• 300% increase in wellness app usage</li>
                  <li>• Corporate wellness budget growing 15% YoY</li>
                  <li>• Government mental health initiatives</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Competitor Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Existing Players</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Headspace/Calm</h4>
                    <p className="text-sm text-gray-600">Global focus, not Indian-specific, expensive</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Mindhouse (Shyft)</h4>
                    <p className="text-sm text-gray-600">Limited engagement, corporate-only focus</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">ThinkRight</h4>
                    <p className="text-sm text-gray-600">Basic meditation, low retention rates</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Market Gaps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• No integration with work calendars</li>
                  <li>• Lack of vernacular language support</li>
                  <li>• No family/community features</li>
                  <li>• Missing gamification elements</li>
                  <li>• No workplace mental health focus</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Unique Value Proposition</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Calendar className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Smart Calendar Integration</h3>
                <p className="text-sm text-gray-600">Detects meeting stress, suggests micro-breaks</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Family Circle</h3>
                <p className="text-sm text-gray-600">Include family in wellness journey</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cultural Context</h3>
                <p className="text-sm text-gray-600">Indian values, festivals, regional languages</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Workplace Integration</h3>
                <p className="text-sm text-gray-600">Anonymous team wellness, HR insights</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Monetization Strategy */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Monetization Strategy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Freemium Model</CardTitle>
                <CardDescription>₹0/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Basic mood tracking</li>
                  <li>• 3 guided meditations/week</li>
                  <li>• Community access</li>
                  <li>• Basic insights</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-indigo-200 bg-indigo-25">
              <CardHeader>
                <CardTitle>Premium Individual</CardTitle>
                <CardDescription>₹299/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Unlimited content</li>
                  <li>• Calendar integration</li>
                  <li>• Family circle features</li>
                  <li>• Personalized AI coach</li>
                  <li>• Sleep & stress tracking</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>₹199/employee/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Team wellness dashboard</li>
                  <li>• Anonymous insights for HR</li>
                  <li>• Custom wellness programs</li>
                  <li>• Integration with HRIS</li>
                  <li>• Mental health workshops</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* GTM Strategy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Go-to-Market Strategy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Corporate Partnerships</h3>
              <p className="text-sm text-gray-600">Partner with top IT companies, banks, consulting firms</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Influencer Marketing</h3>
              <p className="text-sm text-gray-600">Partner with wellness coaches, corporate trainers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Content Marketing</h3>
              <p className="text-sm text-gray-600">LinkedIn articles, YouTube wellness content</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">Referral Program</h3>
              <p className="text-sm text-gray-600">Family circles drive viral growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Mental Wellness?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of Indian professionals prioritizing their mental health</p>
          <Button 
            onClick={() => navigate('/wellness-dashboard')} 
            size="lg" 
            className="bg-white text-indigo-600 hover:bg-gray-100"
          >
            Start Free Trial Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MentalWellness;
