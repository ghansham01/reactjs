import axios from 'axios';

const GOOGLE_TRANSLATE_API_URL = 'https://translation.googleapis.com/language/translate/v2';
const API_KEY = 'https://t.song.work/api?text=hello&from=en&to=zh-CN'; // Replace with your actual API key

export const translateText = async (text, targetLanguage) => {
    try {
        const response = await axios.post(GOOGLE_TRANSLATE_API_URL, {
            q: text,
            target: targetLanguage,
            key: API_KEY,
        });

        return response.data.data.translations[0].translatedText;
    } catch (error) {
        console.error('Error translating text:', error);
        throw error;
    }
};

export const getSupportedLanguages = async () => {
    try {
        const response = await axios.get(`${GOOGLE_TRANSLATE_API_URL}/languages`, {
            params: {
                key: API_KEY,
            },
        });

        return response.data.data.languages;
    } catch (error) {
        console.error('Error fetching supported languages:', error);
        throw error;
    }
};