
import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ResponsibleSpendingProps {
  previewMode?: boolean;
}

const ResponsibleSpending: React.FC<ResponsibleSpendingProps> = ({ previewMode = false }) => {
  const { toast } = useToast();
  const [limits, setLimits] = useState({
    dining: 250,
    entertainment: 150,
    shopping: 200,
    travel: 100,
    other: 300
  });
  
  const [alerts, setAlerts] = useState({
    unusualActivity: true,
    approachingLimit: true,
    largeTransactions: true,
    weeklyReport: true,
    categoryOverspend: true
  });
  
  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved!",
      description: "Your spending controls have been updated.",
    });
  };
  
  const handleSliderChange = (category: keyof typeof limits, value: number[]) => {
    setLimits({
      ...limits,
      [category]: value[0]
    });
  };
  
  const handleInputChange = (category: keyof typeof limits, value: string) => {
    const numValue = parseInt(value) || 0;
    setLimits({
      ...limits,
      [category]: numValue
    });
  };
  
  const totalLimit = Object.values(limits).reduce((sum, value) => sum + value, 0);
  
  // Simplified view for preview mode
  if (previewMode) {
    return (
      <div className="space-y-3">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Dining</span>
          <span>${limits.dining}/month</span>
        </div>
        <Slider
          value={[limits.dining]}
          max={500}
          step={10}
          className="mb-6"
          disabled={true}
        />
        
        <div className="flex justify-between mb-2">
          <span className="font-medium">Entertainment</span>
          <span>${limits.entertainment}/month</span>
        </div>
        <Slider
          value={[limits.entertainment]}
          max={500}
          step={10}
          className="mb-6"
          disabled={true}
        />
        
        <div className="flex items-center justify-between space-x-2 mb-2">
          <Label htmlFor="unusualActivity">Alert for unusual activity</Label>
          <Switch id="unusualActivity" checked={true} disabled={true} />
        </div>
        
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="approachingLimit">Alert when approaching limits</Label>
          <Switch id="approachingLimit" checked={true} disabled={true} />
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-medium">Monthly Spending Limits</h3>
          <span className="text-sm text-gray-500">Total: ${totalLimit}/month</span>
        </div>
        
        {Object.entries(limits).map(([category, value]) => (
          <div key={category} className="mb-6">
            <div className="flex justify-between mb-2">
              <Label htmlFor={category} className="capitalize">{category}</Label>
              <div className="flex items-center">
                <span>$</span>
                <Input
                  id={category}
                  type="number"
                  value={value}
                  onChange={(e) => handleInputChange(category as keyof typeof limits, e.target.value)}
                  className="w-20 mx-2 h-6 px-2"
                />
                <span>/month</span>
              </div>
            </div>
            <Slider
              id={`${category}-slider`}
              value={[value]}
              max={500}
              step={10}
              onValueChange={(val) => handleSliderChange(category as keyof typeof limits, val)}
              className="mb-1"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>$0</span>
              <span>$250</span>
              <span>$500</span>
            </div>
          </div>
        ))}
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Spending Alerts & Notifications</h3>
        
        <div className="space-y-4">
          {Object.entries(alerts).map(([alert, value]) => (
            <div key={alert} className="flex items-center justify-between space-x-2">
              <div>
                <Label htmlFor={alert} className="mb-1 block">
                  {alert === 'unusualActivity' && 'Alert for unusual activity'}
                  {alert === 'approachingLimit' && 'Alert when approaching limits (80%)'}
                  {alert === 'largeTransactions' && 'Alert for large transactions (>$100)'}
                  {alert === 'weeklyReport' && 'Send weekly spending reports'}
                  {alert === 'categoryOverspend' && 'Alert if category exceeds monthly average by 50%'}
                </Label>
                {alert === 'unusualActivity' && (
                  <p className="text-xs text-gray-500">Get notified about potentially fraudulent transactions</p>
                )}
                {alert === 'categoryOverspend' && (
                  <p className="text-xs text-gray-500">Helps identify unusual spending patterns</p>
                )}
              </div>
              <Switch
                id={alert}
                checked={value}
                onCheckedChange={(checked) => setAlerts({...alerts, [alert]: checked})}
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="pt-4">
        <Card>
          <CardContent className="p-4">
            <h4 className="font-medium mb-2">Did you know?</h4>
            <p className="text-sm text-gray-600">
              Students who set spending limits are 3x more likely to stay on budget and graduate with less debt.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Button onClick={handleSaveSettings} className="w-full">Save Spending Controls</Button>
    </div>
  );
};

export default ResponsibleSpending;
