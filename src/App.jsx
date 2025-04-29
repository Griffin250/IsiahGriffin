import Navbar from './components/pages/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <Navbar />
      <main className="text-center mt-20 text-gray-800 dark:text-white">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">Let's build something great together!</p>
      </main>
    </div>
  );
}

export default App;
