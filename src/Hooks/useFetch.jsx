import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (endpoint, params) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const BASE_URL = "https://v3.football.api-sports.io";
    const headers = {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': '6bb6f3ab359a9629128fa30f191481cd'
    }

    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`${BASE_URL}/${endpoint}?${params}`, { headers });
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [endpoint, params])

    return { data, loading, error}
  
}

