// src/components/ThemeToggle.jsx
const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <div className="fixed top-4 right-4 z-50">
            <label className="inline-flex items-center cursor-pointer">
                <span className="mr-2 text-sm text-gray-600 dark:text-gray-300">☀️</span>
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                />
                <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative transition">
                    <div
                        className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${theme === "dark" ? "translate-x-5" : ""
                            }`}
                    ></div>
                </div>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">🌙</span>
            </label>
        </div>
    );
};

export default ThemeToggle;
