import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import ProfileCard from "./components/ProfileCard";
import TaskCount from "./components/TaskCount";
import Counter from "./components/Counter";
import ClickButton from "./components/ClickButton";
import InputExample from "./components/InputExample";
import SubmitForm from "./components/SubmitForm";
import LikeButton from "./components/LikeButton";
import ArrayUpdate from "./components/ArrayUpdate";
import AddTodo from "./components/AddTodo";

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
      <h2>Counter Example</h2>
      <Counter />
      <h2>Event Handling Example</h2>
      <ClickButton />
      <h2>Controlled Input</h2>
      <InputExample />
      <h2>Form Submit</h2>
      <SubmitForm />
      <h2>Like Button Example</h2>
      <LikeButton />
      <h2>Immutable Array Update</h2>
      <ArrayUpdate />
      <h2>Add Todo Example</h2>
      <AddTodo />
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