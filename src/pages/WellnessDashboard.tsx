
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, Heart, Calendar, Users, Bell, Smile, Clock, Activity } from "lucide-react";
import MoodCheckIn from "@/components/MoodCheckIn";
import WellnessInsights from "@/components/WellnessInsights";
import FamilyCircle from "@/components/FamilyCircle";

const WellnessDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showMoodCheckIn, setShowMoodCheckIn] = useState(false);

  const weeklyProgress = 75;
  const streakDays = 12;
  const teamWellnessScore = 82;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">MindFlow</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-600" />
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">AK</span>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="mt-4">
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'dashboard' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('insights')}
                className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'insights' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500'
                }`}
              >
                Insights
              </button>
              <button
                onClick={() => setActiveTab('family')}
                className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'family' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500'
                }`}
              >
                Family Circle
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {activeTab === 'dashboard' && (
          <>
            {/* Quick Actions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Good morning, Arjun! 🌅</h2>
              <div className="grid md:grid-cols-4 gap-4">
                <Button
                  onClick={() => setShowMoodCheckIn(true)}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-20 flex-col"
                >
                  <Smile className="h-6 w-6 mb-1" />
                  Daily Check-in
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Brain className="h-6 w-6 mb-1" />
                  5-min Meditation
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Activity className="h-6 w-6 mb-1" />
                  Breathing Exercise
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Calendar className="h-6 w-6 mb-1" />
                  Schedule Break
                </Button>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Weekly Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{weeklyProgress}%</div>
                  <Progress value={weeklyProgress} className="mt-2" />
                  <p className="text-xs text-gray-500 mt-1">5 of 7 days completed</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{streakDays} days</div>
                  <p className="text-xs text-gray-500">Personal best: 18 days</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Team Wellness</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{teamWellnessScore}/100</div>
                  <p className="text-xs text-gray-500">Your team is doing great!</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Next Meeting</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold">In 30 min</div>
                  <p className="text-xs text-gray-500">Suggested: 2-min breathing</p>
                </CardContent>
              </Card>
            </div>

            {/* Smart Recommendations */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 h-5 w-5" />
                  Smart Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">Take a micro-break</p>
                        <p className="text-sm text-gray-600">You have 3 back-to-back meetings. 2-min breathing exercise recommended.</p>
                      </div>
                    </div>
                    <Button size="sm">Start</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <p className="font-medium">Family check-in reminder</p>
                        <p className="text-sm text-gray-600">Your mom shared a wellness tip. Check your Family Circle.</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">View</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm">Completed morning meditation (5 min)</span>
                    <span className="text-xs text-gray-500 ml-auto">2 hours ago</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm">Mood check-in: Feeling optimistic</span>
                    <span className="text-xs text-gray-500 ml-auto">Yesterday</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-sm">Joined family wellness challenge</span>
                    <span className="text-xs text-gray-500 ml-auto">2 days ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {activeTab === 'insights' && <WellnessInsights />}
        {activeTab === 'family' && <FamilyCircle />}
      </div>

      {showMoodCheckIn && <MoodCheckIn onClose={() => setShowMoodCheckIn(false)} />}
    </div>
  );
};

export default WellnessDashboard;
