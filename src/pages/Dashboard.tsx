import React from 'react';
import Navbar from "@/components/Navbar";
import CreditScoreCard from "@/components/CreditScoreCard";
import ResponsibleSpending from "@/components/ResponsibleSpending";
import ReferralProgram from "@/components/ReferralProgram";
import StudentCredibilityScore from "@/components/StudentCredibilityScore";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { IndianRupee } from "lucide-react";

const Dashboard = () => {
  // Mock user data - in a real app this would come from API/backend
  const userData = {
    name: "Rahul Kumar",
    creditLimit: 150000,
    availableCredit: 125000,
    nextPayment: 5000,
    dueDate: "2025-06-15",
    gpa: 3.7,
    referralCount: 3,
    pointsEarned: 1500
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-mint/20">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Welcome, {userData.name}</h1>
          <Button className="bg-mint text-navy hover:bg-mint/80">Take a Loan</Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Available Credit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold flex items-center">
                {formatCurrency(userData.availableCredit)}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                of {formatCurrency(userData.creditLimit)} total
              </div>
              <div className="mt-4">
                <Button className="w-full">Request Funds</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Next Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold flex items-center">
                {formatCurrency(userData.nextPayment)}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Due by {new Date(userData.dueDate).toLocaleDateString()}
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full">Make Payment</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>GPA Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {userData.gpa} GPA
              </div>
              <div className="text-sm text-green-500 mt-1">
                0.35% APR reduction applied
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full">Update GPA</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="credit" className="mb-8">
          <TabsList className="grid grid-cols-4 w-full max-w-lg mx-auto mb-4">
            <TabsTrigger value="credit">Credit Score</TabsTrigger>
            <TabsTrigger value="credibility">Credibility Score</TabsTrigger>
            <TabsTrigger value="spending">Spending</TabsTrigger>
            <TabsTrigger value="referrals">Referrals</TabsTrigger>
          </TabsList>
          
          <TabsContent value="credit">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <CreditScoreCard />
            </div>
          </TabsContent>
          
          <TabsContent value="credibility">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <StudentCredibilityScore />
            </div>
          </TabsContent>
          
          <TabsContent value="spending">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <ResponsibleSpending />
            </div>
          </TabsContent>
          
          <TabsContent value="referrals">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <ReferralProgram />
            </div>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest spending activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "University Bookstore",
                  amount: 3500,
                  date: "2025-05-18",
                  category: "Education"
                },
                {
                  title: "Campus Cafe",
                  amount: 450,
                  date: "2025-05-17",
                  category: "Food"
                },
                {
                  title: "Online Course Subscription",
                  amount: 1999,
                  date: "2025-05-15",
                  category: "Education"
                },
                {
                  title: "City Bus Pass",
                  amount: 1200,
                  date: "2025-05-10",
                  category: "Transportation"
                }
              ].map((transaction, index) => (
                <div key={index} className="flex justify-between items-center p-3 border-b border-gray-100 last:border-0">
                  <div>
                    <div className="font-medium">{transaction.title}</div>
                    <div className="text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString()} • {transaction.category}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      - {formatCurrency(transaction.amount)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="link">View All Transactions</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
