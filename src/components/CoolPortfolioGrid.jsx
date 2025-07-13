// src/components/CoolPortfolioGrid.jsx
export default function CoolPortfolioGrid() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        My Cool Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-xl p-6 text-white transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer">
          <h2 className="text-2xl font-bold mb-2">Project One</h2>
          <p className="text-sm">A cool app with awesome features.</p>
        </div>

        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-6 text-white transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer">
          <h2 className="text-2xl font-bold mb-2">Project Two</h2>
          <p className="text-sm">Built with React and Tailwind CSS.</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 rounded-xl p-6 text-white transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer">
          <h2 className="text-2xl font-bold mb-2">Project Three</h2>
          <p className="text-sm">Fully responsive and mobile friendly.</p>
        </div>

        <div className="bg-gradient-to-r from-indigo-400 to-purple-600 rounded-xl p-6 text-white transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer">
          <h2 className="text-2xl font-bold mb-2">Project Four</h2>
          <p className="text-sm">Smooth hover animations with Tailwind.</p>
        </div>
      </div>
    </div>
  );
}
