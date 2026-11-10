import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import ProfileCard from "./components/ProfileCard";
import TaskCount from "./components/TaskCount";

function App(){
  const courses = [
  { id: 1, title: "React", hours: 16 },
  { id: 2, title: "Git", hours: 4 },
  { id: 3, title: "CSS", hours: 6 },
  ];
  const todos = [
  { id: 1, text: "Finish React setup", done: true },
  { id: 2, text: "Practise props", done: false },
  { id: 3, text: "Push to GitHub", done: false, priority: "high" },
  ];
  return (
    <main className="app">
      <Header
      title="My Todo App"
      subtitle="One task at a time"
      />
      <TodoForm/>
      <TodoList todos={todos}/>
      <TaskCount todos={todos} />
      <Footer/>
      <h2>My Courses</h2>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          hours={course.hours}
        />
      ))}
      <h2>Our Team</h2>
        <ProfileCard
          name="Kavi"
          role="Student"
        />
        <ProfileCard
          name="Ana"
          role="Mentor"
          city="Colombo"
        />
    </main>
  );
}
export default App;