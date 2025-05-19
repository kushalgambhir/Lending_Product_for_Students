
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface LoanPlansProps {
  previewMode?: boolean;
  onSelectPlan?: (plan: any) => void;
}

const LoanPlans: React.FC<LoanPlansProps> = ({ previewMode = false, onSelectPlan }) => {
  const plans = [
    {
      id: 'starter',
      name: 'Starter Credit Builder',
      description: 'Perfect for freshmen looking to establish credit history with responsible limits.',
      limit: '$500 - $1,500',
      apr: 'Starting at 11.99%',
      gpaDiscount: '0.25% APR reduction per 0.5 GPA above 3.0',
      features: [
        'No credit history required',
        'Monthly budget tracking tools',
        'Free credit score monitoring',
        'Option to increase limit after 6 months of good standing'
      ],
      popular: false,
      ideal: 'Freshmen & Sophomores'
    },
    {
      id: 'standard',
      name: 'Educational Advancement',
      description: 'Our most popular option with generous limits and GPA-based incentives.',
      limit: '$1,000 - $5,000',
      apr: 'Starting at 9.99%',
      gpaDiscount: '0.5% APR reduction per 0.5 GPA above 3.0',
      features: [
        'Flexible payment schedules',
        'Category-based spending controls',
        'Real-time spending alerts',
        'Cash back on educational expenses',
        'Lower rates for Dean\'s List students'
      ],
      popular: true,
      ideal: 'All college students'
    },
    {
      id: 'premium',
      name: 'Future Professional',
      description: 'For upperclassmen and graduate students preparing for career success.',
      limit: '$3,000 - $10,000',
      apr: 'Starting at 8.49%',
      gpaDiscount: '0.75% APR reduction per 0.5 GPA above 3.0',
      features: [
        'Higher limits for responsible borrowers',
        'Career networking benefits',
        'Premium financial education resources',
        'No foreign transaction fees',
        'Emergency loan extensions for job-seeking graduates'
      ],
      popular: false,
      ideal: 'Upperclassmen & Graduate Students'
    }
  ];

  const handleSelectPlan = (plan: any) => {
    if (onSelectPlan) {
      onSelectPlan(plan);
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <Card key={plan.id} className={`border ${plan.popular ? 'border-mint shadow-md' : ''} card-hover`}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </div>
              {plan.popular && <Badge className="bg-mint text-navy">Most Popular</Badge>}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-gray-500">Credit Limit</div>
                <div className="text-xl font-bold">{plan.limit}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Interest Rate</div>
                <div className="text-xl font-bold">{plan.apr}</div>
                <div className="text-xs text-green-600">{plan.gpaDiscount}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Best For</div>
                <div className="text-base">{plan.ideal}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">Features</div>
                <ul className="space-y-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-mint text-navy rounded-full p-0.5 mr-2 text-xs flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={() => handleSelectPlan(plan)}
              className={`w-full ${plan.popular ? 'bg-mint text-navy hover:bg-mint/80' : ''}`}
            >
              {previewMode ? 'Learn More' : 'Select Plan'}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default LoanPlans;
