
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface ReferralProgramProps {
  previewMode?: boolean;
}

const ReferralProgram: React.FC<ReferralProgramProps> = ({ previewMode = false }) => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  const handleReferral = () => {
    if (email && name) {
      toast({
        title: "Referral Sent!",
        description: `Your invitation has been sent to ${name}.`,
      });
      setEmail('');
      setName('');
    } else {
      toast({
        title: "Missing Information",
        description: "Please enter both name and email.",
        variant: "destructive"
      });
    }
  };
  
  if (previewMode) {
    return (
      <div className="text-center">
        <div className="font-bold text-xl mb-2">Your Referral Code</div>
        <div className="bg-white p-3 rounded-lg border border-dashed border-gray-300 mb-4">
          <span className="font-mono font-medium tracking-wider text-lg">GRADELY500</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">Share this code with friends to earn 500 points each!</p>
        <div className="flex justify-center space-x-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
            Share
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <Tabs defaultValue="invite">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="invite">Invite Friends</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="invite" className="space-y-4 mt-4">
          <div className="text-center bg-mint/20 p-4 rounded-lg mb-6">
            <div className="font-bold text-xl mb-2">Your Referral Code</div>
            <div className="bg-white p-3 rounded-lg border border-dashed border-gray-300 mb-4">
              <span className="font-mono font-medium tracking-wider text-lg">GRADELY500</span>
            </div>
            <div className="flex justify-center space-x-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Copy Code
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                Share Link
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Email a Friend</h3>
            <div className="space-y-3">
              <div>
                <Input
                  placeholder="Friend's Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="friend@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button onClick={handleReferral} className="w-full">Send Invitation</Button>
            </div>
          </div>
          
          <Card className="mt-4">
            <CardContent className="p-4">
              <h4 className="font-medium mb-2">How it works</h4>
              <ol className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="bg-mint text-navy rounded-full h-5 w-5 flex items-center justify-center text-xs">1</span>
                  <span>Share your unique code with friends</span>
                </li>
                <li className="flex gap-2">
                  <span className="bg-mint text-navy rounded-full h-5 w-5 flex items-center justify-center text-xs">2</span>
                  <span>They apply and get approved for Gradely credit</span>
                </li>
                <li className="flex gap-2">
                  <span className="bg-mint text-navy rounded-full h-5 w-5 flex items-center justify-center text-xs">3</span>
                  <span>You both earn 500 reward points!</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="rewards">
          <div className="p-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-1">Your Rewards</h3>
              <div className="text-3xl font-bold text-mint">1,500</div>
              <p className="text-sm text-gray-500">points available</p>
            </div>
            
            <h4 className="font-medium mb-3">Redemption Options</h4>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-medium">$15 Statement Credit</h5>
                    <p className="text-sm text-gray-500">Apply directly to your balance</p>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">1,500 pts</span>
                    <Button variant="outline" size="sm" disabled>Redeem</Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-medium">$25 Amazon Gift Card</h5>
                    <p className="text-sm text-gray-500">Digital delivery via email</p>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">2,500 pts</span>
                    <Button variant="outline" size="sm" disabled>Redeem</Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-medium">$50 Credit Line Increase</h5>
                    <p className="text-sm text-gray-500">Instantly raise your limit</p>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">3,000 pts</span>
                    <Button variant="outline" size="sm" disabled>Redeem</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="history">
          <div className="p-4">
            <h3 className="font-medium mb-3">Referral History</h3>
            
            <div className="space-y-3">
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-medium">Alex Thompson</h5>
                    <p className="text-xs text-gray-500">Referred on May 10, 2025</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Successful</Badge>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-medium">Maya Patel</h5>
                    <p className="text-xs text-gray-500">Referred on May 5, 2025</p>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-medium">Jamal Washington</h5>
                    <p className="text-xs text-gray-500">Referred on April 22, 2025</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Successful</Badge>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center text-sm text-gray-500">
              Total earnings: 1,000 points from 2 successful referrals
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReferralProgram;
