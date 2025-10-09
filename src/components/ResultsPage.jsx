import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Download, RefreshCw, Target, Users, MessageSquare, Brain } from 'lucide-react';
import { communicationStyles } from '../data/questions';

const getStyleIcon = (styleKey) => {
  const iconMap = {
    'G_D': Target,
    'O_D': MessageSquare,
    'O_I': Users,
    'G_I': Brain
  };
  
  const IconComponent = iconMap[styleKey] || Target;
  return <IconComponent className="w-8 h-8" />;
};

const ResultsPage = ({ result, onRestart, onDownload }) => {
  const style = communicationStyles[result.styleKey];
  
  const getStyleColor = (styleKey) => {
    const colorMap = {
      'G_D': 'from-red-500 to-red-600',
      'O_D': 'from-orange-500 to-orange-600', 
      'O_I': 'from-blue-500 to-blue-600',
      'G_I': 'from-green-500 to-green-600'
    };
    return colorMap[styleKey] || 'from-[#00a999] to-[#00c4a7]';
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto w-full">
        <Card className="bg-white shadow-xl border-0">
          <CardHeader className={`bg-gradient-to-r ${getStyleColor(result.styleKey)} text-white rounded-t-lg`}>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-full">
                  {getStyleIcon(result.styleKey)}
                </div>
              </div>
              <CardTitle className="text-3xl font-bold mb-2">
                {style.title}
              </CardTitle>
              <Badge variant="secondary" className="bg-white bg-opacity-20 text-white border-0 text-lg px-4 py-1">
                {style.subtitle}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Your Communication Style Characteristics:</h3>
              <div className="grid gap-4">
                {style.traits.map((trait, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-slate-50 rounded-lg p-4">
                    <div className="w-2 h-2 bg-[#00a999] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 flex-1">{trait}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#00a999] bg-opacity-5 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4 text-[#00a999]">Your Scores:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">O (Outgoing):</span>
                    <span className="font-bold text-[#00a999]">{result.scores.O}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">G (Guarded):</span>
                    <span className="font-bold text-[#00a999]">{result.scores.G}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">D (Direct):</span>
                    <span className="font-bold text-[#00a999]">{result.scores.D}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">I (Indirect):</span>
                    <span className="font-bold text-[#00a999]">{result.scores.I}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-[#00a999] border-opacity-20">
                <p className="text-sm text-gray-600">
                  Your dominant traits are <strong>{result.primary}</strong> and <strong>{result.secondary}</strong>, 
                  making you a <strong>{style.title}</strong>.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={onDownload}
                className="bg-[#00a999] hover:bg-[#008a7a] text-white px-6 py-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Results
              </Button>
              
              <Button
                onClick={onRestart}
                variant="outline"
                className="border-[#00a999] text-[#00a999] hover:bg-[#00a999] hover:text-white px-6 py-3 transition-all duration-300"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Take Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultsPage;