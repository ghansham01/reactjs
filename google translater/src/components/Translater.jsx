import React, { useState } from 'react';
import axios from 'axios';

function Translater({ setTranslatedText }) {
    const [text, setText] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('en');
    const [targetLanguage, setTargetLanguage] = useState('hi');
    const [loading, setLoading] = useState(false);

    const handleTranslate = async () => {
        setLoading(true);
        try {
            const response = await axios.post('https://libretranslate.de/translate', {
                q: text,
                source: sourceLanguage,
                target: targetLanguage,
                format: 'text'
            });
            setTranslatedText(response.data.translatedText);
        } catch (error) {
            setTranslatedText('Translation failed.');
            console.error('Translation error:', error);
        }
        setLoading(false);
    };

    return (
        <div className=" shadow-lg rounded-lg p-8 w-full max-w-xl mx-auto flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">Google Translator</h2>
            <textarea
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to translate"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
            <div className="flex flex-row gap-4 justify-center">
                <select
                    value={sourceLanguage}
                    onChange={(e) => setSourceLanguage(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="hi">Hindi</option>
                </select>
                <span className="self-center text-gray-400">→</span>
                <select
                    value={targetLanguage}
                    onChange={(e) => setTargetLanguage(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="hi">Hindi</option>
                </select>
            </div>
            <button
                onClick={handleTranslate}
                disabled={loading}
                className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
                {loading ? 'Translating...' : 'Translate'}
            </button>
        </div>
    );
}

export default Translater;