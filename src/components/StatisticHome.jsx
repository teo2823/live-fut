import React from 'react';
import { useFetch } from '../Hooks/useFetch';

export const StatisticHome = ({ matchId, homeTeam}) => {
    console.log(homeTeam)


   const {data, loading, error} = useFetch('fixtures/statistics', `fixture=${matchId}&team=${homeTeam}`)

    if (!data) {
        return null;
    }
    const dataHome = data;
    console.log(dataHome)



    return (
        <>
        <div className="flex justify-center">
            <p></p>
        </div>

        </>
    );
};