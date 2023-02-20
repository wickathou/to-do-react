import TodosList from './components/TodosList';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="flex justify-center">
      <div className='block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700  text-neutral-800 dark:text-neutral-50'>
        <Header/>
        <TodosList/>
      </div>
    </div>
  );
}

export default App;
