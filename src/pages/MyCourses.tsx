import { useApp } from '../context/AppContext';
import { COURSES } from '../data/mockData';
import CourseCard from '../components/CourseCard';
import { Link } from 'react-router-dom';

export default function MyCourses() {
  const { user, enrolledCourses } = useApp();

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Please log in</h2>
        <Link to="/login" className="text-primary hover:underline">Go to Login</Link>
      </div>
    );
  }

  const myCoursesList = COURSES.filter(c => enrolledCourses.includes(c.id));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">My Learning</h1>
      {myCoursesList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {myCoursesList.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-2">You haven't enrolled in any courses yet.</h3>
          <Link to="/" className="text-primary font-bold hover:underline">Explore Courses</Link>
        </div>
      )}
    </div>
  );
}