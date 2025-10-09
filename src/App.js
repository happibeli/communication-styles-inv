import React, { useState } from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import AssessmentPage from './components/AssessmentPage';
import ResultsPage from './components/ResultsPage';
import { questions, communicationStyles } from './data/questions';
import { Toaster } from './components/ui/toaster';
import { toast } from './hooks/use-toast';

const App = () => {
  const [currentStep, setCurrentStep] = useState('welcome'); // welcome, assessment, results
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleStart = () => {
    setCurrentStep('assessment');
    setAnswers({});
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const calculateResult = () => {
    const scores = { O: 0, G: 0, D: 0, I: 0 };
    
    // Calculate scores based on the scoring system
    questions.forEach(question => {
      const answer = answers[question.id];
      const questionNum = question.id;
      
      // O scoring (specific questions where A = O point)
      if ([1, 5, 9, 11, 13, 15, 17].includes(questionNum) && answer === 'A') {
        scores.O++;
      }
      
      // G scoring (questions where B = G point, opposite of O questions)
      if ([1, 3, 5, 7, 9, 11, 13, 15, 17].includes(questionNum) && answer === 'B') {
        scores.G++;
      }
      
      // D scoring (even numbered questions where B = D point)
      if ([2, 4, 6, 8, 10, 12, 14, 16, 18].includes(questionNum) && answer === 'B') {
        scores.D++;
      }
      
      // I scoring (even numbered questions where A = I point)
      if ([2, 4, 6, 8, 10, 12, 14, 16, 18].includes(questionNum) && answer === 'A') {
        scores.I++;
      }
    });
    
    // Determine primary traits
    const primary = scores.O > scores.G ? 'O' : 'G';
    const secondary = scores.D > scores.I ? 'D' : 'I';
    const styleKey = `${primary}_${secondary}`;
    
    return {
      scores,
      primary: primary === 'O' ? 'Outgoing' : 'Guarded',
      secondary: secondary === 'D' ? 'Direct' : 'Indirect',
      styleKey,
      style: communicationStyles[styleKey]
    };
  };

  const handleComplete = () => {
    const calculatedResult = calculateResult();
    setResult(calculatedResult);
    setCurrentStep('results');
    toast({
      title: "Assessment Complete!",
      description: `You are a ${calculatedResult.style.title}`,
    });
  };

  const handleDownload = () => {
    if (!result) return;
    
    const style = result.style;
    const downloadContent = `COMMUNICATION STYLES INVENTORY RESULTS

Your Communication Style: ${style.title}
Subtype: ${style.subtitle}

Your Scores:
O (Outgoing): ${result.scores.O}
G (Guarded): ${result.scores.G}
D (Direct): ${result.scores.D}
I (Indirect): ${result.scores.I}

Dominant Traits: ${result.primary} and ${result.secondary}

Characteristics:
${style.traits.map(trait => `• ${trait}`).join('\n')}

Generated on: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}

---
Communication Styles Inventory
Designed to help you understand your natural communication preferences.
`;
    
    const blob = new Blob([downloadContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Communication-Style-Results-${style.title.replace('/', '-')}-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Results Downloaded!",
      description: "Your communication style results have been saved to your device.",
    });
  };

  const handleRestart = () => {
    setCurrentStep('welcome');
    setAnswers({});
    setResult(null);
  };

  return (
    <div className="App">
      {currentStep === 'welcome' && (
        <WelcomePage onStart={handleStart} />
      )}
      
      {currentStep === 'assessment' && (
        <AssessmentPage 
          answers={answers}
          onAnswer={handleAnswer}
          onComplete={handleComplete}
        />
      )}
      
      {currentStep === 'results' && result && (
        <ResultsPage 
          result={result}
          onRestart={handleRestart}
          onDownload={handleDownload}
        />
      )}
      
      <Toaster />
    </div>
  );
};

export default App;