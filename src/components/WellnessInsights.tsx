
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Calendar, Brain, Heart, Users } from "lucide-react";

const WellnessInsights = () => {
  const moodData = [
    { day: 'Mon', mood: 4, stress: 3 },
    { day: 'Tue', mood: 3, stress: 4 },
    { day: 'Wed', mood: 5, stress: 2 },
    { day: 'Thu', mood: 4, stress: 3 },
    { day: 'Fri', mood: 3, stress: 5 },
    { day: 'Sat', mood: 5, stress: 1 },
    { day: 'Sun', mood: 4, stress: 2 }
  ];

  const productivityData = [
    { hour: '9 AM', focus: 8, energy: 7 },
    { hour: '11 AM', focus: 9, energy: 8 },
    { hour: '1 PM', focus: 6, energy: 5 },
    { hour: '3 PM', focus: 7, energy: 6 },
    { hour: '5 PM', focus: 5, energy: 4 }
  ];

  const teamInsights = [
    { metric: 'Team Happiness', value: 82, change: '+5%' },
    { metric: 'Stress Levels', value: 35, change: '-12%' },
    { metric: 'Engagement', value: 78, change: '+8%' },
    { metric: 'Work-Life Balance', value: 71, change: '+3%' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamInsights.map((insight, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{insight.metric}</p>
                  <p className="text-2xl font-bold">{insight.value}%</p>
                </div>
                <div className="flex items-center text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">{insight.change}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="mr-2 h-5 w-5 text-red-500" />
              Weekly Mood & Stress Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis domain={[1, 5]} />
                <Tooltip />
                <Line type="monotone" dataKey="mood" stroke="#10b981" strokeWidth={2} name="Mood" />
                <Line type="monotone" dataKey="stress" stroke="#ef4444" strokeWidth={2} name="Stress" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 h-5 w-5 text-purple-500" />
              Daily Focus & Energy Patterns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Bar dataKey="focus" fill="#6366f1" name="Focus Level" />
                <Bar dataKey="energy" fill="#f59e0b" name="Energy Level" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-blue-500" />
            Personalized Insights & Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">✅ What's Working</h4>
              <ul className="space-y-2 text-sm">
                <li>• Weekend relaxation significantly improves your mood</li>
                <li>• Morning meditation sessions boost focus by 40%</li>
                <li>• Family check-ins reduce stress levels</li>
                <li>• Short breaks between meetings help maintain energy</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-orange-600">⚠️ Areas to Focus</h4>
              <ul className="space-y-2 text-sm">
                <li>• Friday stress levels consistently high - consider lighter schedules</li>
                <li>• Afternoon energy dips - try 2 PM walking breaks</li>
                <li>• Back-to-back meetings impact mood - schedule buffers</li>
                <li>• Sleep quality affects next-day productivity</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5 text-indigo-500" />
            Team Wellness Overview (Anonymous)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">82%</div>
              <p className="text-sm text-gray-600">Team reporting positive mood</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">7.2/10</div>
              <p className="text-sm text-gray-600">Average wellness score</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">15 min</div>
              <p className="text-sm text-gray-600">Daily avg. wellness activities</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h5 className="font-medium text-blue-800 mb-2">Team Insight</h5>
            <p className="text-sm text-blue-700">
              Your team's wellness has improved 15% this month! The most popular activities are breathing exercises (67%) and family circle interactions (43%).
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WellnessInsights;
