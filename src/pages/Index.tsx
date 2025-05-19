
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import OnboardingFlow from "@/components/OnboardingFlow";
import LoanPlans from "@/components/LoanPlans";
import CreditScoreCard from "@/components/CreditScoreCard";
import ResponsibleSpending from "@/components/ResponsibleSpending";
import ReferralProgram from "@/components/ReferralProgram";

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);

  const startOnboarding = () => {
    setShowOnboarding(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-mint/20">
      <Navbar />

      {showOnboarding ? (
        <OnboardingFlow />
      ) : (
        <>
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Student loans that <span className="gradient-text">grow</span> with your <span className="gradient-text">potential</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-lg">
                Get credit that considers your academic success, not just your financial history. Built for students, by students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={startOnboarding} className="btn-mint" size="lg">
                  Get Started
                </Button>
                <Button variant="outline" className="btn-outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-lavender rounded-full opacity-50 animate-float"></div>
                <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-peach rounded-full opacity-40 animate-float" style={{ animationDelay: "2s" }}></div>
                <div className="relative bg-white rounded-2xl shadow-xl p-8 card-hover">
                  <CreditScoreCard previewMode={true} />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Features designed for student success</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Credit that rewards academic achievement, responsible spending, and helps you build a strong financial foundation.
                </p>
              </div>

              <Tabs defaultValue="ai-scoring" className="max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="ai-scoring">AI Scoring</TabsTrigger>
                  <TabsTrigger value="rewards">Grade Rewards</TabsTrigger>
                  <TabsTrigger value="spending">Smart Spending</TabsTrigger>
                  <TabsTrigger value="referrals">Referrals</TabsTrigger>
                </TabsList>

                <TabsContent value="ai-scoring" className="p-4">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Holistic AI Credit Scoring</h3>
                      <p className="mb-4 text-gray-600">
                        Our AI looks beyond traditional credit history to consider your academic performance,
                        extracurricular activities, and career potential.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="bg-mint rounded-full p-1 mr-2">✓</span>
                          Considers academic transcripts
                        </li>
                        <li className="flex items-center">
                          <span className="bg-mint rounded-full p-1 mr-2">✓</span>
                          Evaluates leadership roles and activities
                        </li>
                        <li className="flex items-center">
                          <span className="bg-mint rounded-full p-1 mr-2">✓</span>
                          Analyzes career path potential
                        </li>
                      </ul>
                    </div>
                    <div className="bg-lavender/20 p-6 rounded-xl">
                      <CreditScoreCard previewMode={true} simplified={true} />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="rewards" className="p-4">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Academic Achievement Rewards</h3>
                      <p className="mb-4 text-gray-600">
                        Maintain good grades and watch your interest rates drop. We believe academic success
                        translates to financial responsibility.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="bg-mint rounded-full p-1 mr-2">✓</span>
                          Lower interest rates for high GPA
                        </li>
                        <li className="flex items-center">
                          <span className="bg-mint rounded-full p-1 mr-2">✓</span>
                          Credit limit increases with academic progress
                        </li>
                        <li className="flex items-center">
                          <span className="bg-mint rounded-full p-1 mr-2">✓</span>
                          Special rewards for Dean's List students
                        </li>
                      </ul>
                    </div>
                    <div className="bg-peach/20 p-6 rounded-xl">
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">3.0-3.4 GPA</span>
                            <span>8.5% APR</span>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">3.5-3.9 GPA</span>
                            <span>7.2% APR</span>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-mint">
                          <div className="flex justify-between items-center">
                            <span className="font-bold">4.0 GPA</span>
                            <span className="font-bold text-green-600">5.9% APR</span>
                          </div>
                          <div className="text-xs text-green-600 mt-1">Dean's List Special Rate!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="spending" className="p-4">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Smart Spending Controls</h3>
                      <p className="mb-4 text-gray-600">
                        Take charge of your finances with customizable spending limits and real-time
                        spending alerts to keep you on track.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="bg-mint rounded-full p-1 mr-2">✓</span>
                          Category-based spending limits
                        </li>
                        <li className="flex items-center">
                          <span className="bg-mint rounded-full p-1 mr-2">✓</span>
                          Real-time spending notifications
                        </li>
                        <li className="flex items-center">
                          <span className="bg-mint rounded-full p-1 mr-2">✓</span>
                          Intelligent spending patterns analysis
                        </li>
                      </ul>
                    </div>
                    <div className="bg-lemon/20 p-6 rounded-xl">
                      <ResponsibleSpending previewMode={true} />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="referrals" className="p-4">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Refer & Earn Program</h3>
                      <p className="mb-4 text-gray-600">
                        Invite your friends and classmates to join Gradely and earn credit points
                        that can reduce your balance or increase your credit limit.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="bg-mint rounded-full p-1 mr-2">✓</span>
                          Earn 500 points per successful referral
                        </li>
                        <li className="flex items-center">
                          <span className="bg-mint rounded-full p-1 mr-2">✓</span>
                          Your friends get a special APR discount
                        </li>
                        <li className="flex items-center">
                          <span className="bg-mint rounded-full p-1 mr-2">✓</span>
                          Redeem points for statement credits
                        </li>
                      </ul>
                    </div>
                    <div className="bg-mint/20 p-6 rounded-xl">
                      <ReferralProgram previewMode={true} />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Loan Plans Section */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the right plan for you</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Flexible loan options designed specifically for different student needs.
                </p>
              </div>

              <LoanPlans previewMode={true} />
              
              <div className="text-center mt-12">
                <Button onClick={startOnboarding} className="btn-mint" size="lg">
                  Apply Now
                </Button>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What students are saying</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Join thousands of students who have already transformed their financial future with Gradely.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Alex Thompson",
                    school: "UCLA, Computer Science",
                    text: "Gradely helped me finance my last year of college when traditional banks wouldn't even look at my application. The GPA rewards really motivated me to keep my grades up!",
                    image: "https://i.pravatar.cc/150?img=11"
                  },
                  {
                    name: "Maya Patel",
                    school: "NYU, Business",
                    text: "The spending controls have been a game-changer for me. I'm actually saving money while building credit, and the lower interest rate for my 3.8 GPA is amazing.",
                    image: "https://i.pravatar.cc/150?img=5"
                  },
                  {
                    name: "Jamal Washington",
                    school: "Georgia Tech, Engineering",
                    text: "As a first-generation college student, traditional credit was out of reach. Gradely considered my academic achievements and gave me a chance when no one else would.",
                    image: "https://i.pravatar.cc/150?img=8"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.school}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-mint/40 to-lavender/40">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build your financial future?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Join Gradely today and get credit that grows with your academic success.
              </p>
              <Button onClick={startOnboarding} className="btn-mint" size="lg">
                Get Started
              </Button>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-navy text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-bold text-xl mb-4">Gradely</h3>
                  <p className="text-gray-300 text-sm">Building credit solutions for tomorrow's leaders.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Company</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Press</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Legal</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">FDIC Disclosure</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400 text-center">
                <p>© {new Date().getFullYear()} Gradely. All rights reserved.</p>
                <p className="mt-2">For demonstration purposes only. Not a real financial product.</p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Index;
