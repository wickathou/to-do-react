import TodosLogic from './components/TodosLogic';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="flex justify-center content-center mt-28">
      <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700  text-neutral-800 dark:text-neutral-50">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
}

export default App;
