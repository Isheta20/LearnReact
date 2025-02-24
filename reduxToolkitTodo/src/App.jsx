import AddTodos from "./components/AddTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="h-screen bg-slate-900 text-gray-100">
      <h2 className="text-bold text-center text-6xl pt-6">
        Redux Toolkit Todo
      </h2>
      <div className="container mx-auto p-28 space-y-14">
        <AddTodos />
        <Todos />
      </div>
    </div>
  );
}

export default App;
