import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle = ({ darkMode, toggleDarkMode }: ThemeToggleProps) => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleDarkMode}
        className="w-10 h-10 rounded-full border-2 bg-background/80 backdrop-blur-sm hover:bg-accent transition-all duration-300 shadow-lg"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <Sun className="h-4 w-4 text-yellow-500 transition-all" />
        ) : (
          <Moon className="h-4 w-4 text-slate-600 transition-all" />
        )}
      </Button>
    </div>
  );
};

export default ThemeToggle;
