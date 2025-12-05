export interface Course {
  id: string;
  title: string;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  lectures: number;
}

export const CATEGORIES = [
  { id: 'data-science', name: 'Data Science', icon: '📊' },
  { id: 'machine-learning', name: 'Machine Learning', icon: '🤖' },
  { id: 'web-development', name: 'Web Development', icon: '💻' },
  { id: 'digital-marketing', name: 'Digital Marketing', icon: '📱' },
  { id: 'ai-engineering', name: 'AI Engineering', icon: '🧠' },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒' },
];

export const COURSES: Course[] = [
  // --- Data Science ---
  {
    id: 'ds1',
    title: 'Complete Python Bootcamp for Data Science',
    instructor: 'Dr. Angela Yu',
    level: 'Beginner',
    description: 'Master Python from scratch and learn how to use it for data analysis and visualization.',
    price: 89.99,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'data-science',
    lectures: 45
  },
  {
    id: 'ds2',
    title: 'Data Science A-Z™: Real-Life Exercises',
    instructor: 'Kirill Eremenko',
    level: 'Intermediate',
    description: 'Learn Data Science step by step through real Analytics examples. Data Mining, Modeling, Tableau Visualization and more!',
    price: 94.99,
    thumbnail: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    category: 'data-science',
    lectures: 62
  },
  {
    id: 'ds3',
    title: 'Statistics for Data Science and Business Analysis',
    instructor: '365 Careers',
    level: 'Beginner',
    description: 'Master the fundamentals of statistics and learn how to apply them to data science and business.',
    price: 49.99,
    thumbnail: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&q=80&w=800',
    category: 'data-science',
    lectures: 38
  },

  // --- Web Development ---
  {
    id: 'wd1',
    title: 'The Complete 2024 Web Development Bootcamp',
    instructor: 'Dr. Angela Yu',
    level: 'Beginner',
    description: 'Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!',
    price: 119.99,
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    category: 'web-development',
    lectures: 85
  },
  {
    id: 'wd2',
    title: 'Advanced React Patterns & Performance',
    instructor: 'Kent C. Dodds',
    level: 'Advanced',
    description: 'Deep dive into React internals, performance optimization, and scalable architecture.',
    price: 129.99,
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    category: 'web-development',
    lectures: 32
  },
  {
    id: 'wd3',
    title: 'Modern TypeScript: The Complete Guide',
    instructor: 'Maximilian Schwarzmüller',
    level: 'Intermediate',
    description: 'Master TypeScript by building real-world projects and understanding the compiler.',
    price: 89.99,
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
    category: 'web-development',
    lectures: 40
  },

  // --- Machine Learning ---
  {
    id: 'ml1',
    title: 'Machine Learning A-Z: Hands-On Python',
    instructor: 'Kirill Eremenko',
    level: 'Intermediate',
    description: 'Learn to create Machine Learning Algorithms in Python and R from two Data Science experts.',
    price: 94.99,
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800',
    category: 'machine-learning',
    lectures: 60
  },
  {
    id: 'ml2',
    title: 'Deep Learning Specialization',
    instructor: 'Andrew Ng',
    level: 'Advanced',
    description: 'Build and train deep neural networks, identify key architecture parameters, and analyze test sets.',
    price: 159.99,
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    category: 'machine-learning',
    lectures: 110
  },
  {
    id: 'ml3',
    title: 'NLP with Python for Machine Learning',
    instructor: 'Jose Portilla',
    level: 'Intermediate',
    description: 'Learn how to work with text and data to build Natural Language Processing systems.',
    price: 84.99,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    category: 'machine-learning',
    lectures: 45
  },

  // --- Digital Marketing ---
  {
    id: 'dm1',
    title: 'The Complete Digital Marketing Course - 12 in 1',
    instructor: 'Rob Percival',
    level: 'Beginner',
    description: 'Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!',
    price: 89.99,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'digital-marketing',
    lectures: 50
  },
  {
    id: 'dm2',
    title: 'Social Media Marketing MASTERY',
    instructor: 'Coursenvy',
    level: 'Intermediate',
    description: 'Join 100,000+ students! Learn to master social media marketing on all major platforms.',
    price: 74.99,
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    category: 'digital-marketing',
    lectures: 35
  },
  {
    id: 'dm3',
    title: 'Google Ads (AdWords) Certification Course',
    instructor: 'Isaac Rudansky',
    level: 'Advanced',
    description: 'Drive Consistent, Round-The-Clock Traffic To Your Website or Landing Page.',
    price: 99.99,
    thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
    category: 'digital-marketing',
    lectures: 42
  },

  // --- AI Engineering ---
  {
    id: 'ai1',
    title: 'Artificial Intelligence A-Z 2024',
    instructor: 'Hadelin de Ponteves',
    level: 'Beginner',
    description: 'Learn how to build an AI, make a virtual self-driving car, and beat games.',
    price: 94.99,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    category: 'ai-engineering',
    lectures: 55
  },
  {
    id: 'ai2',
    title: 'Generative AI with Large Language Models',
    instructor: 'DeepLearning.AI',
    level: 'Advanced',
    description: 'Understand how LLMs work and how to tune them for your specific use cases.',
    price: 149.99,
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    category: 'ai-engineering',
    lectures: 28
  },
  {
    id: 'ai3',
    title: 'Prompt Engineering for Developers',
    instructor: 'Andrew Ng',
    level: 'Intermediate',
    description: 'Learn how to use LLMs to build new and powerful applications quickly.',
    price: 59.99,
    thumbnail: 'https://images.unsplash.com/photo-1684469733240-e2b2c451634b?auto=format&fit=crop&q=80&w=800',
    category: 'ai-engineering',
    lectures: 15
  },

  // --- Cybersecurity (UPDATED IMAGES) ---
  {
    id: 'cs1',
    title: 'The Complete Cyber Security Course: Hackers Exposed!',
    instructor: 'Nathan House',
    level: 'Beginner',
    description: 'Volume 1 : Become a Cyber Security Specialist, Learn How to Stop Hackers, Prevent Hacking, Learn IT Security & INFOSEC.',
    price: 109.99,
    thumbnail: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=800', // Code on screen
    category: 'cybersecurity',
    lectures: 65
  },
  {
    id: 'cs2',
    title: 'Ethical Hacking: The Complete Guide',
    instructor: 'Heath Adams',
    level: 'Intermediate',
    description: 'Learn practical ethical hacking techniques and how to protect networks.',
    price: 149.99,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=800', // Data tunnel
    category: 'cybersecurity',
    lectures: 55
  },
  {
    id: 'cs3',
    title: 'CompTIA Security+ (SY0-601) Complete Course',
    instructor: 'Jason Dion',
    level: 'Beginner',
    description: 'Pass the CompTIA Security+ (SY0-601) exam on your first attempt.',
    price: 99.99,
    thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800', // Matrix/Code
    category: 'cybersecurity',
    lectures: 80
  },
];