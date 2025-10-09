import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MessageSquare, Users, Target, Brain } from 'lucide-react';

const WelcomePage = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow-xl border-0">
          <CardHeader className="text-center py-12 bg-gradient-to-r from-[#00a999] to-[#00c4a7] text-white rounded-t-lg">
            <CardTitle className="text-4xl font-bold mb-4">
              Communication Styles Inventory
            </CardTitle>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover your unique communication style and unlock better relationships and professional success
            </p>
          </CardHeader>
          
          <CardContent className="p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00a999] bg-opacity-10 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-[#00a999]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Understand Your Style</h3>
                  <p className="text-gray-600">
                    Learn how you naturally communicate and interact with others in different situations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#00a999] bg-opacity-10 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-[#00a999]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Improve Relationships</h3>
                  <p className="text-gray-600">
                    Enhance your ability to connect and collaborate effectively with colleagues and friends.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#00a999] bg-opacity-10 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-[#00a999]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Achieve Better Results</h3>
                  <p className="text-gray-600">
                    Adapt your communication approach to be more effective in various professional contexts.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#00a999] bg-opacity-10 p-3 rounded-lg">
                  <Brain className="w-6 h-6 text-[#00a999]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personal Growth</h3>
                  <p className="text-gray-600">
                    Gain insights into your strengths and areas for development in communication.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-slate-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-lg mb-3 text-[#00a999]">What to Expect</h3>
                <ul className="text-left space-y-2 max-w-md mx-auto text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#00a999] rounded-full"></div>
                    <span>18 carefully crafted questions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#00a999] rounded-full"></div>
                    <span>5-7 minutes to complete</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#00a999] rounded-full"></div>
                    <span>Detailed results and insights</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#00a999] rounded-full"></div>
                    <span>Downloadable results summary</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#00a999] rounded-full"></div>
                    <span>Survey taken from The Platinum Rule by Tony Alessandra, Ph.D, & Michael J. O’Connor Ph.D. New York, New York, Warner Brooks 1996</span>
                  </li>
                </ul>
              </div>
              
              <Button 
                onClick={onStart}
                size="lg"
                className="bg-[#00a999] hover:bg-[#008a7a] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Assessment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WelcomePage;
