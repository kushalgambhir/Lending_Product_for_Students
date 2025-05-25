
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Heart, Brain, Calendar, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface MoodCheckInProps {
  onClose: () => void;
}

const MoodCheckIn: React.FC<MoodCheckInProps> = ({ onClose }) => {
  const [selectedMood, setSelectedMood] = useState('');
  const [stressLevel, setStressLevel] = useState(3);
  const [workPressure, setWorkPressure] = useState('');
  const [support, setSupport] = useState('');

  const moods = [
    { emoji: '😄', label: 'Excellent', value: 'excellent', color: 'bg-green-100 border-green-300' },
    { emoji: '😊', label: 'Good', value: 'good', color: 'bg-blue-100 border-blue-300' },
    { emoji: '😐', label: 'Okay', value: 'okay', color: 'bg-yellow-100 border-yellow-300' },
    { emoji: '😔', label: 'Low', value: 'low', color: 'bg-orange-100 border-orange-300' },
    { emoji: '😰', label: 'Stressed', value: 'stressed', color: 'bg-red-100 border-red-300' }
  ];

  const workPressures = [
    'Tight deadlines',
    'Heavy workload',
    'Team conflicts',
    'Work-life balance',
    'Job uncertainty',
    'Other'
  ];

  const supportOptions = [
    'Talk to a counselor',
    'Guided meditation',
    'Breathing exercises',
    'Family support',
    'Colleague support',
    'Just track for now'
  ];

  const handleSubmit = () => {
    toast({
      title: "Check-in completed!",
      description: "Your daily wellness data has been recorded. Keep up the great work!"
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl bg-white relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="mr-2 h-6 w-6 text-red-500" />
            Daily Wellness Check-in
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Mood Selection */}
          <div>
            <h3 className="font-semibold mb-3">How are you feeling today?</h3>
            <div className="grid grid-cols-5 gap-3">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => setSelectedMood(mood.value)}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    selectedMood === mood.value 
                      ? mood.color + ' scale-105' 
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="text-3xl mb-1">{mood.emoji}</div>
                  <div className="text-xs font-medium">{mood.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Stress Level */}
          <div>
            <h3 className="font-semibold mb-3">Stress Level (1-5)</h3>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Low</span>
              <div className="flex space-x-2 flex-1">
                {[1, 2, 3, 4, 5].map((level) => (
                  <button
                    key={level}
                    onClick={() => setStressLevel(level)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      stressLevel >= level 
                        ? 'bg-red-500 border-red-500' 
                        : 'border-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">High</span>
            </div>
          </div>

          {/* Work Pressure */}
          <div>
            <h3 className="font-semibold mb-3">Main source of work pressure? (Optional)</h3>
            <div className="grid grid-cols-2 gap-2">
              {workPressures.map((pressure) => (
                <button
                  key={pressure}
                  onClick={() => setWorkPressure(pressure)}
                  className={`p-3 text-sm rounded-lg border transition-all ${
                    workPressure === pressure
                      ? 'bg-indigo-100 border-indigo-300 text-indigo-700'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {pressure}
                </button>
              ))}
            </div>
          </div>

          {/* Support Options */}
          {(selectedMood === 'low' || selectedMood === 'stressed' || stressLevel >= 4) && (
            <div>
              <h3 className="font-semibold mb-3 text-red-600">We're here to help. What would be most helpful?</h3>
              <div className="grid grid-cols-2 gap-2">
                {supportOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSupport(option)}
                    className={`p-3 text-sm rounded-lg border transition-all ${
                      support === option
                        ? 'bg-green-100 border-green-300 text-green-700'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Cultural Context */}
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-medium text-orange-800 mb-2">💡 Today's Wellness Tip</h4>
            <p className="text-sm text-orange-700">
              "Taking care of your mental health is not selfish - it's necessary. Even 5 minutes of mindfulness can make a difference in your day."
            </p>
          </div>

          <div className="flex space-x-3">
            <Button onClick={handleSubmit} className="flex-1 bg-indigo-600 hover:bg-indigo-700">
              Complete Check-in
            </Button>
            <Button onClick={onClose} variant="outline">
              Skip Today
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoodCheckIn;
