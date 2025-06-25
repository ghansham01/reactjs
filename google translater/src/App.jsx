import React, { useState } from 'react';
import Translater from './components/Translater';

function App() {
  const [translatedText, setTranslatedText] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8 drop-shadow-lg">
        Google Translator App
      </h1>
      <Translater setTranslatedText={setTranslatedText} />
      {translatedText && (
        <div className="mt-8 bg-white shadow-md rounded-lg p-6 w-full max-w-xl text-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Translated Text:</h2>
          <p className="text-gray-800 text-lg">{translatedText}</p>
        </div>
      )}
    </div>
  );
}

export default App;