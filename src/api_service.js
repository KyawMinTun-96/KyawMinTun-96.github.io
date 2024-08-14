import axios from 'axios';

const API_URL = 'https://api.jsonbin.io/v3/b';
const API_KEY = '$2a$10$gm9FGtVG3aJd/wyXuNRtd.goTVxG4ApH82AK60cmd2BU3P4dWfhdS'; // Replace with your JSONBin API key

export const getBinData = async (binId) => {
  try {
    const response = await axios.get(`${API_URL}/${binId}`, {
      headers: {
        'X-Master-Key': API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

export const updateBinData = async (binId, data) => {
  try {
    const response = await axios.put(`${API_URL}/${binId}`, data, {
      headers: {
        'X-Master-Key': API_KEY,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating data', error);
    throw error;
  }
};
