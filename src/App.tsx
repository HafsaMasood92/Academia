import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop'; // 1. Import the component
import Home from './pages/Home';
import Login from './pages/Login';
import CourseDetails from './pages/CourseDetails';
import CategoryPage from './pages/CategoryPage';
import MyCourses from './pages/MyCourses';

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop /> {/* 2. Place it here, inside Router but outside Routes */}
        <Routes>
          {/* Wrap all routes inside Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/categories/:categoryName" element={<CategoryPage />} />
            <Route path="/course/:courseId" element={<CourseDetails />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;