import { useState } from 'react';

function App() {
  const [complaint, setComplaint] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: complaint }),
      });
      const data = await response.json();
      setCategory(data.category);
    } catch (error) {
      console.error('Error:', error);
      setCategory('Error predicting category');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Complaint Insight Navigator</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          placeholder="Enter your complaint here..."
          className="w-80 h-40 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {loading ? 'Predicting...' : 'Predict Category'}
        </button>
      </form>

      {category && (
        <div className="mt-6 text-lg font-semibold">
          Predicted Category: <span className="text-green-600">{category}</span>
        </div>
      )}
    </div>
  );
}

export default App;
