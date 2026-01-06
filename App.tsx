import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import { TruckIcon, SunIcon, MoonIcon } from './components/icons';

type Theme = 'light' | 'dark';

const ThemeToggle: React.FC<{ theme: Theme; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-indigo-500 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
    </button>
  );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-100 font-sans transition-colors">
      <header className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <TruckIcon className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />
              <h1 className="text-xl font-bold ml-3 text-gray-900 dark:text-white uppercase tracking-wider">Transport Income Tracker</h1>
            </div>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </header>
      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Dashboard theme={theme} />
        </div>
      </main>
      <footer className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Transport Union. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;