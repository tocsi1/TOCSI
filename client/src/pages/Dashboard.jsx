import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        Student Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">Videos</div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">Notes</div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">PPTs</div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">Mock Tests</div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">Quizzes</div>
      </div>
    </div>
  );
};

export default Dashboard;