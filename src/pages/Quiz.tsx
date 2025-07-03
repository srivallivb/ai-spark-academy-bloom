
import React, { useState } from 'react';
import { Trophy, Clock, CheckCircle, XCircle, Brain, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  subject: string;
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
      correctAnswer: 1,
      explanation: "Mitochondria are called the powerhouse of the cell because they produce ATP, which is the energy currency of the cell.",
      difficulty: "Easy",
      subject: "Biology"
    },
    {
      id: 2,
      question: "What is the value of π (pi) approximately?",
      options: ["3.14", "2.71", "1.41", "1.73"],
      correctAnswer: 0,
      explanation: "π (pi) is approximately 3.14159, which is commonly rounded to 3.14 for basic calculations.",
      difficulty: "Easy",
      subject: "Mathematics"
    },
    {
      id: 3,
      question: "Which programming language is known for 'Write Once, Run Anywhere'?",
      options: ["Python", "JavaScript", "Java", "C++"],
      correctAnswer: 2,
      explanation: "Java is famous for its 'Write Once, Run Anywhere' philosophy due to the Java Virtual Machine (JVM).",
      difficulty: "Medium",
      subject: "Computer Science"
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswered = [...answered];
      newAnswered[currentQuestion] = selectedAnswer === questions[currentQuestion].correctAnswer;
      setAnswered(newAnswered);

      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // Quiz completed
        setQuizStarted(false);
      }
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered([]);
    setQuizStarted(true);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-amber-600 bg-amber-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (!quizStarted) {
    return (
      <div className="md:ml-64 min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-learning rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float">
              <Brain className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Center</h1>
            <p className="text-gray-600">Test your knowledge and track your progress</p>
          </div>

          {answered.length > 0 ? (
            /* Quiz Results */
            <Card className="mb-8 shadow-lg border-0 animate-slide-up">
              <CardHeader className="text-center bg-gradient-learning text-white rounded-t-lg">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    {score}/{questions.length}
                  </div>
                  <div className="text-lg text-gray-600">
                    {Math.round((score / questions.length) * 100)}% Correct
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <CheckCircle className="text-green-600 mx-auto mb-2" size={24} />
                    <div className="text-lg font-bold text-green-800">{score}</div>
                    <div className="text-sm text-green-600">Correct</div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl">
                    <XCircle className="text-red-600 mx-auto mb-2" size={24} />
                    <div className="text-lg font-bold text-red-800">{questions.length - score}</div>
                    <div className="text-sm text-red-600">Incorrect</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <Star className="text-blue-600 mx-auto mb-2" size={24} />
                    <div className="text-lg font-bold text-blue-800">
                      {score >= questions.length * 0.8 ? 'Excellent!' : score >= questions.length * 0.6 ? 'Good!' : 'Keep Learning!'}
                    </div>
                    <div className="text-sm text-blue-600">Performance</div>
                  </div>
                </div>

                <Button onClick={restartQuiz} className="bg-gradient-learning hover:opacity-90 px-8">
                  Take Another Quiz
                </Button>
              </CardContent>
            </Card>
          ) : (
            /* Quiz Start */
            <Card className="shadow-lg border-0 animate-slide-up">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-800">Ready to Test Your Knowledge?</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-800 mb-1">{questions.length}</div>
                    <div className="text-sm text-blue-600">Questions</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-800 mb-1">Mixed</div>
                    <div className="text-sm text-green-600">Subjects</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-800 mb-1">~5 min</div>
                    <div className="text-sm text-purple-600">Duration</div>
                  </div>
                </div>

                <div className="text-center">
                  <Button onClick={() => setQuizStarted(true)} className="bg-gradient-learning hover:opacity-90 px-8 py-3 text-lg">
                    Start Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="md:ml-64 min-h-screen p-6 pb-20 md:pb-6">
      <div className="max-w-3xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(currentQ.difficulty)}`}>
                {currentQ.difficulty}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock size={16} />
              <span>{currentQ.subject}</span>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="shadow-lg border-0 mb-6 animate-slide-up">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800 leading-relaxed">
              {currentQ.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                  selectedAnswer === index
                    ? 'border-learning-primary bg-blue-50 text-learning-primary'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                } ${
                  showResult
                    ? index === currentQ.correctAnswer
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : selectedAnswer === index && index !== currentQ.correctAnswer
                      ? 'border-red-500 bg-red-50 text-red-800'
                      : ''
                    : ''
                }`}
                disabled={showResult}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                    selectedAnswer === index
                      ? 'border-learning-primary bg-learning-primary text-white'
                      : 'border-gray-300'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Result Explanation */}
        {showResult && (
          <Card className="shadow-lg border-0 mb-6 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  selectedAnswer === currentQ.correctAnswer ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  {selectedAnswer === currentQ.correctAnswer ? (
                    <CheckCircle className="text-white" size={16} />
                  ) : (
                    <XCircle className="text-white" size={16} />
                  )}
                </div>
                <div>
                  <div className={`font-bold mb-2 ${
                    selectedAnswer === currentQ.correctAnswer ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {selectedAnswer === currentQ.correctAnswer ? 'Correct!' : 'Incorrect'}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{currentQ.explanation}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          {!showResult ? (
            <Button
              onClick={handleShowResult}
              disabled={selectedAnswer === null}
              className="bg-learning-secondary hover:opacity-90 px-8"
            >
              Check Answer
            </Button>
          ) : (
            <Button
              onClick={handleNextQuestion}
              className="bg-gradient-learning hover:opacity-90 px-8"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
