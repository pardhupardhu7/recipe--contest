import React, { useState } from 'react';
import { Heart, Share2, Trophy, Clock, ChefHat } from 'lucide-react';

interface Recipe {
  id: string;
  title: string;
  chef: string;
  image: string;
  votes: number;
  timeRequired: string;
  difficulty: string;
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: '1',
      title: 'Homemade Margherita Pizza',
      chef: 'Chef Maria',
      image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
      votes: 245,
      timeRequired: '45 mins',
      difficulty: 'Medium'
    },
    {
      id: '2',
      title: 'Classic Tiramisu',
      chef: 'Chef Antonio',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
      votes: 189,
      timeRequired: '4 hours',
      difficulty: 'Advanced'
    },
    {
      id: '3',
      title: 'Garden Fresh Salad',
      chef: 'Chef Sarah',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      votes: 156,
      timeRequired: '20 mins',
      difficulty: 'Easy'
    }
  ]);

  const handleVote = (id: string) => {
    setRecipes(recipes.map(recipe => 
      recipe.id === id ? { ...recipe, votes: recipe.votes + 1 } : recipe
    ));
  };

  const handleShare = (recipe: Recipe) => {
    // In a real app, implement proper sharing functionality
    alert(`Sharing recipe: ${recipe.title}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Recipe Contest</h1>
              <p className="mt-1 text-sm text-gray-500">Vote for your favorite recipes!</p>
            </div>
            <Trophy className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">{recipe.title}</h2>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <ChefHat className="w-4 h-4 mr-1" />
                  <span>{recipe.chef}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{recipe.timeRequired}</span>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-gray-100">
                    {recipe.difficulty}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => handleVote(recipe.id)}
                    className="flex items-center space-x-1 text-rose-600 hover:text-rose-700"
                  >
                    <Heart className="w-5 h-5" />
                    <span>{recipe.votes} votes</span>
                  </button>
                  <button
                    onClick={() => handleShare(recipe)}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-700"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;