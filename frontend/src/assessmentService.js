import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getAssessments = async () => {
    try {
        const response = await axios.get(`${API_URL}/assessments`);
        return response.data;
    } catch (error) {
        console.error('Error fetching assessments:', error);
        throw error;
    }
};

export const createAssessment = async (assessmentData) => {
    try {
        const response = await axios.post(`${API_URL}/assessments`, assessmentData);
        return response.data;
    } catch (error) {
        console.error('Error creating assessment:', error);
        throw error;
    }
};
