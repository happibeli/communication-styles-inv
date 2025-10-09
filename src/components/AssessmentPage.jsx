import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { questions } from '../data/questions';

const QUESTIONS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(questions.length / QUESTIONS_PER_PAGE);

const AssessmentPage = ({ answers, onAnswer, onComplete }) => {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Scroll to top when component mounts or page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);
  
  // Scroll to top when assessment first loads
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
  
  const getCurrentQuestions = () => {
    const startIndex = currentPage * QUESTIONS_PER_PAGE;
    const endIndex = startIndex + QUESTIONS_PER_PAGE;
    return questions.slice(startIndex, endIndex);
  };
  
  const progress = (Object.keys(answers).length / questions.length) * 100;
  
  const canGoNext = () => {
    const currentQuestions = getCurrentQuestions();
    return currentQuestions.every(q => answers[q.id] !== undefined);
  };
  
  const handleNext = () => {
    if (currentPage < TOTAL_PAGES - 1) {
      setCurrentPage(currentPage + 1);
      // Scroll to top immediately
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      // Final page, complete assessment
      onComplete();
    }
  };
  
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      // Scroll to top immediately
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  };
  
  const currentQuestions = getCurrentQuestions();
  const isLastPage = currentPage === TOTAL_PAGES - 1;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto w-full">
        <Card className="bg-white shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-[#00a999] to-[#00c4a7] text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">
              Question {currentPage * QUESTIONS_PER_PAGE + 1} - {Math.min((currentPage + 1) * QUESTIONS_PER_PAGE, questions.length)} of {questions.length}
            </CardTitle>
            <div className="mt-4">
              <Progress value={progress} className="h-2 bg-white bg-opacity-20" />
              <p className="text-center mt-2 text-white text-opacity-90">
                {Math.round(progress)}% Complete
              </p>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="space-y-8">
              {currentQuestions.map((question) => (
                <div key={question.id} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-6 text-gray-800">
                    {question.id}. {question.question}
                  </h3>
                  
                  <div className="space-y-4">
                    <label className="flex items-start space-x-4 cursor-pointer group">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value="A"
                        checked={answers[question.id] === 'A'}
                        onChange={() => onAnswer(question.id, 'A')}
                        className="mt-1 w-4 h-4 text-[#00a999] border-gray-300 focus:ring-[#00a999] focus:ring-2"
                      />
                      <div className="flex-1">
                        <span className="font-medium text-[#00a999] mr-2">A)</span>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          {question.optionA}
                        </span>
                      </div>
                    </label>
                    
                    <label className="flex items-start space-x-4 cursor-pointer group">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value="B"
                        checked={answers[question.id] === 'B'}
                        onChange={() => onAnswer(question.id, 'B')}
                        className="mt-1 w-4 h-4 text-[#00a999] border-gray-300 focus:ring-[#00a999] focus:ring-2"
                      />
                      <div className="flex-1">
                        <span className="font-medium text-[#00a999] mr-2">B)</span>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          {question.optionB}
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-8">
              <Button
                onClick={handlePrevious}
                disabled={currentPage === 0}
                variant="outline"
                className="border-[#00a999] text-[#00a999] hover:bg-[#00a999] hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!canGoNext()}
                className="bg-[#00a999] hover:bg-[#008a7a] text-white transition-all duration-300 transform hover:scale-105"
              >
                {isLastPage ? 'Complete Assessment' : 'Next'}
                {!isLastPage && <ChevronRight className="w-4 h-4 ml-2" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssessmentPage;