import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App(){
  return (
    <main className="app">
      <Header/>
      <TodoForm/>
      <TodoList/>
    </main>
  );
}
export default App;