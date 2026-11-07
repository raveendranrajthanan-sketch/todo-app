import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App(){
  return (
    <main className="app">
      <Header/>
      <TodoForm/>
      <TodoList/>
      <Footer/>
    </main>
  );
}
export default App;