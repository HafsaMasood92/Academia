import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
}

interface AppContextType {
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
  enrolledCourses: string[];
  enrollInCourse: (courseId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Auth State
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('academia_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Enrollment State
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>(() => {
    const saved = localStorage.getItem('academia_enrollments');
    return saved ? JSON.parse(saved) : [];
  });

  // Sync Auth
  useEffect(() => {
    if (user) localStorage.setItem('academia_user', JSON.stringify(user));
    else localStorage.removeItem('academia_user');
  }, [user]);

  // Sync Enrollments
  useEffect(() => {
    localStorage.setItem('academia_enrollments', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const login = (name: string, email: string) => setUser({ name, email });
  const logout = () => setUser(null);
  
  const enrollInCourse = (courseId: string) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
  };

  return (
    <AppContext.Provider value={{ user, login, logout, enrolledCourses, enrollInCourse }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};