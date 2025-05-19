
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import LoanPlans from "./LoanPlans";
import CreditScoreCard from "./CreditScoreCard";
import ResponsibleSpending from "./ResponsibleSpending";

const OnboardingFlow = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dob: '',
    },
    educationInfo: {
      school: '',
      major: '',
      gpa: '',
      graduationYear: '',
      classStanding: '',
    },
    financialInfo: {
      income: '',
      employmentStatus: '',
      housingStatus: '',
      monthlyExpenses: '',
    },
    selectedPlan: null,
    customLimits: {
      dining: 200,
      entertainment: 100,
      shopping: 150,
    }
  });
  
  const form = useForm();

  const handleNext = () => {
    // In a real app, we would validate the form before proceeding
    if (step < 5) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 24-48 hours.",
    });
    // In a real app, we would submit the form data to an API
    console.log("Form data submitted:", formData);
  };
  
  const handlePlanSelect = (plan: any) => {
    setFormData({...formData, selectedPlan: plan});
    handleNext();
  };

  const updateFormData = (section: string, field: string, value: string) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section as keyof typeof formData],
        [field]: value
      }
    });
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Personal Information</CardTitle>
              <CardDescription>Let's start with the basics about you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name"
                      value={formData.personalInfo.firstName}
                      onChange={(e) => updateFormData('personalInfo', 'firstName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name"
                      value={formData.personalInfo.lastName}
                      onChange={(e) => updateFormData('personalInfo', 'lastName', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@school.edu"
                    value={formData.personalInfo.email}
                    onChange={(e) => updateFormData('personalInfo', 'email', e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">Use your school email for faster verification</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      placeholder="(123) 456-7890"
                      value={formData.personalInfo.phone}
                      onChange={(e) => updateFormData('personalInfo', 'phone', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input 
                      id="dob" 
                      type="date"
                      value={formData.personalInfo.dob}
                      onChange={(e) => updateFormData('personalInfo', 'dob', e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleNext}>Continue</Button>
            </CardFooter>
          </Card>
        );
      
      case 2:
        return (
          <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Educational Background</CardTitle>
              <CardDescription>Tell us about your academic journey.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="school">School/University</Label>
                  <Input 
                    id="school" 
                    placeholder="University name"
                    value={formData.educationInfo.school}
                    onChange={(e) => updateFormData('educationInfo', 'school', e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="major">Major/Area of Study</Label>
                    <Input 
                      id="major" 
                      placeholder="Your major"
                      value={formData.educationInfo.major}
                      onChange={(e) => updateFormData('educationInfo', 'major', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="classStanding">Class Standing</Label>
                    <Select
                      onValueChange={(value) => updateFormData('educationInfo', 'classStanding', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="freshman">Freshman</SelectItem>
                        <SelectItem value="sophomore">Sophomore</SelectItem>
                        <SelectItem value="junior">Junior</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                        <SelectItem value="graduate">Graduate Student</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gpa">Current GPA</Label>
                    <Input 
                      id="gpa" 
                      placeholder="e.g., 3.5"
                      value={formData.educationInfo.gpa}
                      onChange={(e) => updateFormData('educationInfo', 'gpa', e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">Higher GPA can qualify you for better rates</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Expected Graduation Year</Label>
                    <Select
                      onValueChange={(value) => updateFormData('educationInfo', 'graduationYear', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(6)].map((_, i) => {
                          const year = new Date().getFullYear() + i;
                          return <SelectItem key={year} value={year.toString()}>{year}</SelectItem>;
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Connect Academic Profile</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                      Upload Transcript
                    </Button>
                    <Button variant="outline" className="flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      Link School Portal
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Connecting helps us verify your academic standing</p>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>Back</Button>
              <Button onClick={handleNext}>Continue</Button>
            </CardFooter>
          </Card>
        );
        
      case 3:
        return (
          <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Financial Information</CardTitle>
              <CardDescription>Help us understand your financial situation.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="income">Monthly Income (if any)</Label>
                    <Input 
                      id="income" 
                      placeholder="$"
                      type="number"
                      value={formData.financialInfo.income}
                      onChange={(e) => updateFormData('financialInfo', 'income', e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">Include part-time jobs, allowance, etc.</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthlyExpenses">Estimated Monthly Expenses</Label>
                    <Input 
                      id="monthlyExpenses" 
                      placeholder="$"
                      type="number"
                      value={formData.financialInfo.monthlyExpenses}
                      onChange={(e) => updateFormData('financialInfo', 'monthlyExpenses', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Employment Status</Label>
                  <RadioGroup defaultValue="student" className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="student" id="student" />
                      <Label htmlFor="student">Student (No Employment)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="part-time" id="part-time" />
                      <Label htmlFor="part-time">Part-Time Employment</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="work-study" id="work-study" />
                      <Label htmlFor="work-study">Work-Study Program</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="internship" id="internship" />
                      <Label htmlFor="internship">Paid Internship</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label>Housing Situation</Label>
                  <RadioGroup defaultValue="dorm" className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dorm" id="dorm" />
                      <Label htmlFor="dorm">Campus Housing/Dorm</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="off-campus" id="off-campus" />
                      <Label htmlFor="off-campus">Off-Campus Apartment</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="parents" id="parents" />
                      <Label htmlFor="parents">Living with Parents</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label>Social Media Verification</Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    Connect your social profiles to help verify your identity and potentially improve your credit offer.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      Connect Facebook
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      Connect Instagram
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      Connect LinkedIn
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>Back</Button>
              <Button onClick={handleNext}>Continue</Button>
            </CardFooter>
          </Card>
        );
        
      case 4:
        return (
          <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Choose a Loan Plan</h2>
              <p className="text-gray-600 mb-6">
                Select the plan that best fits your educational and financial needs.
              </p>
              <LoanPlans onSelectPlan={handlePlanSelect} />
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="w-full max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Set Up Spending Controls</CardTitle>
                <CardDescription>
                  Customize spending limits to help you stay on budget and build good financial habits.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsibleSpending />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Review Your Application</CardTitle>
                <CardDescription>
                  Please review your information before submitting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-500">Name:</div>
                      <div>{formData.personalInfo.firstName} {formData.personalInfo.lastName}</div>
                      <div className="text-gray-500">Email:</div>
                      <div>{formData.personalInfo.email || 'Not provided'}</div>
                      <div className="text-gray-500">Phone:</div>
                      <div>{formData.personalInfo.phone || 'Not provided'}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Education</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-500">School:</div>
                      <div>{formData.educationInfo.school || 'Not provided'}</div>
                      <div className="text-gray-500">Major:</div>
                      <div>{formData.educationInfo.major || 'Not provided'}</div>
                      <div className="text-gray-500">GPA:</div>
                      <div>{formData.educationInfo.gpa || 'Not provided'}</div>
                      <div className="text-gray-500">Graduation Year:</div>
                      <div>{formData.educationInfo.graduationYear || 'Not provided'}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Selected Plan</h3>
                    <div className="p-4 bg-mint/20 rounded-lg">
                      <div className="font-semibold text-lg">Educational Advancement Plan</div>
                      <div className="text-sm text-gray-600">
                        Credit limit up to $5,000 with interest rates based on GPA performance
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>Back</Button>
                <Button onClick={handleSubmit}>Submit Application</Button>
              </CardFooter>
            </Card>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl md:text-3xl font-bold">Apply for Student Credit</h1>
          <div className="text-sm font-medium">Step {step} of 5</div>
        </div>
        
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div 
            className="h-2 bg-mint rounded-full transition-all"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {renderStep()}
    </div>
  );
};

export default OnboardingFlow;
