import axios from 'axios';

export const fetchFixtures = async () => {
    try {
        const response = await axios.get('https://v3.football.api-sports.io/fixtures?live=all', {
            headers: {
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-rapidapi-key': '6bb6f3ab359a9629128fa30f191481cd'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
