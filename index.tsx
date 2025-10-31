import React from "https://aistudiocdn.com/react@19.2.0";
import ReactDOM from "https://aistudiocdn.com/react-dom@19.2.0";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1c59c6] text-white text-center p-6">
      <h1 className="text-5xl font-bold mb-4">🚀 LazGo</h1>
      <p className="text-xl mb-6">
        Where Time Meets Responsibility
      </p>

      <div className="bg-white text-[#1c59c6] rounded-2xl shadow-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Welcome to LazGo!</h2>
        <p className="mb-4">
          A digital transformation initiative for smarter attendance and school efficiency.
        </p>
        <button
          className="bg-[#1c59c6] text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-800 transition"
          onClick={() => alert("This is just a demo button!")}
        >
          Get Started
        </button>
      </div>

      <footer className="mt-10 text-sm opacity-75">
        © 2025 LazGo — Built with 💙 by Dini
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
