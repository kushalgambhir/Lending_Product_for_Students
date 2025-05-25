
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, MessageCircle, Calendar, Bell } from "lucide-react";

const FamilyCircle = () => {
  const [selectedChallenge, setSelectedChallenge] = useState('');

  const familyMembers = [
    { name: 'Mom', status: 'active', lastActivity: '2 hours ago', mood: '😊', streak: 8 },
    { name: 'Dad', status: 'active', lastActivity: '5 hours ago', mood: '😐', streak: 3 },
    { name: 'Sister', status: 'inactive', lastActivity: '2 days ago', mood: '😔', streak: 0 },
    { name: 'Spouse', status: 'active', lastActivity: '1 hour ago', mood: '😄', streak: 12 }
  ];

  const familyChallenges = [
    { 
      name: 'Gratitude Week', 
      description: 'Share one thing you\'re grateful for daily',
      participants: 3,
      duration: '7 days',
      reward: 'Family dinner voucher'
    },
    { 
      name: 'Mindful Mornings', 
      description: '10 minutes morning meditation together',
      participants: 2,
      duration: '14 days',
      reward: 'Wellness hamper'
    },
    { 
      name: 'Digital Detox Weekend', 
      description: 'Phone-free family time on weekends',
      participants: 4,
      duration: '2 days',
      reward: 'Movie night'
    }
  ];

  const sharedTips = [
    {
      from: 'Mom',
      tip: 'Start your day with 3 deep breaths and a glass of warm water with lemon 🍋',
      time: '2 hours ago',
      likes: 3
    },
    {
      from: 'Dad',
      tip: 'Take a 5-minute walk after every hour of work. Your back will thank you! 🚶‍♂️',
      time: '1 day ago',
      likes: 5
    },
    {
      from: 'Spouse',
      tip: 'We can practice the 4-7-8 breathing technique together before bed tonight 💤',
      time: '2 days ago',
      likes: 2
    }
  ];

  return (
    <div className="space-y-6">
      {/* Family Members Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5 text-blue-500" />
            Family Wellness Circle
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {familyMembers.map((member, index) => (
              <div key={index} className="p-4 border rounded-lg text-center">
                <div className="text-2xl mb-2">{member.mood}</div>
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{member.lastActivity}</p>
                <div className={`inline-block px-2 py-1 rounded-full text-xs ${
                  member.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                }`}>
                  {member.streak} day streak
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Family Challenges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-purple-500" />
            Family Wellness Challenges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {familyChallenges.map((challenge, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">{challenge.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>Participants:</span>
                    <span>{challenge.participants}/4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{challenge.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reward:</span>
                    <span>{challenge.reward}</span>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="w-full mt-3"
                  variant={selectedChallenge === challenge.name ? "default" : "outline"}
                  onClick={() => setSelectedChallenge(challenge.name)}
                >
                  {selectedChallenge === challenge.name ? 'Joined!' : 'Join Challenge'}
                </Button>
              </div>
            ))}
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h5 className="font-medium text-purple-800 mb-2">💡 Pro Tip</h5>
            <p className="text-sm text-purple-700">
              Family challenges have 3x higher completion rates! Invite your family to make wellness a shared journey.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Shared Tips & Support */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
            Family Wellness Tips & Support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sharedTips.map((tip, index) => (
              <div key={index} className="border-l-4 border-green-200 pl-4 py-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-green-700">{tip.from}</span>
                  <span className="text-xs text-gray-500">{tip.time}</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{tip.tip}</p>
                <div className="flex items-center">
                  <Heart className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-xs text-gray-500">{tip.likes} family members found this helpful</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h5 className="font-medium text-blue-800 mb-2">🔔 Emergency Support</h5>
            <p className="text-sm text-blue-700 mb-3">
              If you're feeling overwhelmed, your family circle is here to help. 
              Your sister shared she's going through a tough time - consider reaching out.
            </p>
            <Button size="sm" variant="outline" className="text-blue-700 border-blue-300">
              Send Supportive Message
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Note */}
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="pt-6">
          <div className="flex items-center">
            <Bell className="h-5 w-5 text-amber-600 mr-2" />
            <div>
              <h5 className="font-medium text-amber-800">Privacy & Cultural Sensitivity</h5>
              <p className="text-sm text-amber-700 mt-1">
                All family interactions are optional. Your individual wellness data remains private unless you choose to share specific insights.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FamilyCircle;
