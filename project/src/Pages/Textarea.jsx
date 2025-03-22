import React, { useState } from 'react';

function TextEditorUI() {
  const [text, setText] = useState('');
  const [history, setHistory] = useState([]);

  
  const upperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    addToHistory('Converted to Uppercase', newText);
  };

  const lowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    addToHistory('Converted to Lowercase', newText);
  };

  const clear = () => {
    setText('');
    addToHistory('Text Cleared', '');
  };

  const capitalize = () => {
    const newText = text.replace(/\b\w/g, char => char.toUpperCase());
    setText(newText);
    addToHistory('Capitalized Words', newText);
  };

  const addToHistory = (action, result) => {
    setHistory(prev => [...prev, { action, result, timestamp: new Date().toLocaleTimeString() }]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
     

      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold"></h1>
      </header>

      <div className="flex-1 flex flex-col md:flex-row container mx-auto p-4 gap-6">
       

        <div className="md:w-1/2 flex flex-col">
          <div className="bg-white rounded-lg shadow-md p-4 flex-1 flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800 mb-3"></h2>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type your text here..."
              className="w-full flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
            
           
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={upperCase}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Uppercase
              </button>
              <button
                onClick={lowerCase}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Lowercase
              </button>
           
                
            
              <button
                onClick={clear}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Clear
              </button>
            </div>

           
            <div className="mt-4 text-gray-600 text-sm">
              <span>Words: {text.split(/\s+/).filter(word => word).length} | </span>
              <span>Characters: {text.length}</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col">
          <div className="bg-white rounded-lg shadow-md p-4 flex-1">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">History & Preview</h2>
            <div className="h-[400px] overflow-y-auto space-y-4">
              {history.map((entry, index) => (
                <div key={index} className="border-l-4 border-indigo-500 pl-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-indigo-600">{entry.action}</span>
                    <span className="text-xs text-gray-500">{entry.timestamp}</span>
                  </div>
                  <p className="text-gray-700 mt-1 whitespace-pre-wrap">{entry.result || 'No content'}</p>
                </div>
              ))}
              {history.length === 0 && (
                <p className="text-gray-500 text-center mt-4"></p>
              )}
            </div>
          </div>
        </div>
      </div>

     
      <footer className="bg-gray-200 p-3 text-center text-gray-600 text-sm">
       
      </footer>
    </div>
  );
}

export default TextEditorUI;