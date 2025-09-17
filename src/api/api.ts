export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  language: string;
}

export interface RegisterData {
  name: string;
  email: string;
  phone?: string;
  password: string;
  language: string;
  role: 'student' | 'govt_official' | 'college';
}

export interface LoginData {
  email: string;
  password: string;
  role: 'student' | 'govt_official' | 'college';
}

export interface QuizOption {
  id: string;
  text: string;
  score: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  type: 'single-choice' | 'multiple-choice';
  options: QuizOption[];
  category: string;
}

export interface QuizAnswer {
  question_id: number;
  option_id: string;
}

export interface QuizSubmission {
  user_id: number;
  answers: QuizAnswer[];
  metadata: {
    device: string;
    lang: string;
  };
}

export interface Recommendation {
  id: string;
  course: string;
  confidence: number;
  explanation: string;
  careers: string[];
  suggested_colleges: {
    id: number;
    name: string;
    distance_km: number;
  }[];
  scholarships: {
    id: string;
    title: string;
    link: string;
  }[];
}

const API_BASE = '/api';

const mockMode = true;

const mockUser: User = {
  id: 101,
  name: 'Demo User',
  email: 'demo@example.com',
  language: 'en',
};

const mockQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Do you enjoy solving math problems?',
    type: 'single-choice',
    options: [
      { id: 'a', text: 'Always', score: 3 },
      { id: 'b', text: 'Sometimes', score: 2 },
      { id: 'c', text: 'Rarely', score: 1 },
    ],
    category: 'quantitative',
  },
  {
    id: 2,
    question: 'Do you like creative arts?',
    type: 'single-choice',
    options: [
      { id: 'a', text: 'Yes', score: 3 },
      { id: 'b', text: 'No', score: 1 },
    ],
    category: 'creative',
  },
];

const mockRecommendations: Recommendation[] = [
  {
    id: 'rec1',
    course: 'B.Sc. Mathematics',
    confidence: 0.86,
    explanation: 'High quantitative score and interest in problem solving.',
    careers: ['Data Analyst', 'Research Assistant'],
    suggested_colleges: [
      { id: 1, name: 'Govt Degree College A', distance_km: 6 },
    ],
    scholarships: [
      { id: 'sch1', title: 'State Merit Scholarship', link: '#' },
    ],
  },
];

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const api = {
  async register(data: RegisterData): Promise<{ user: User; token: string }> {
    if (mockMode) {
      await delay(500);
      return { user: mockUser, token: 'dummy-jwt-token' };
    }
    // Implement real API call here
    throw new Error('Not implemented');
  },

  async login(data: LoginData): Promise<{ user: User; token: string }> {
    if (mockMode) {
      await delay(500);
      return { user: mockUser, token: 'dummy-jwt-token' };
    }
    // Implement real API call here
    throw new Error('Not implemented');
  },

  async getQuizQuestions(): Promise<QuizQuestion[]> {
    if (mockMode) {
      await delay(500);
      return mockQuizQuestions;
    }
    // Implement real API call here
    throw new Error('Not implemented');
  },

  async submitQuiz(submission: QuizSubmission): Promise<void> {
    if (mockMode) {
      await delay(1000);
      return;
    }
    // Implement real API call here
    throw new Error('Not implemented');
  },

  async getRecommendations(studentId: number): Promise<Recommendation[]> {
    if (mockMode) {
      await delay(500);
      return mockRecommendations;
    }
    // Implement real API call here
    throw new Error('Not implemented');
  },
};
