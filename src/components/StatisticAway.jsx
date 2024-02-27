import React from 'react';
import { useFetch } from '../Hooks/useFetch';

export const StatisticAway = ({ matchId, awayTeam}) => {
    console.log(awayTeam)


   const {data, loading, error} = useFetch('fixtures/statistics', `fixture=${matchId}&team=${awayTeam}`)

    if (!data) {
        return null;
    }
    const dataAway = data;
    console.log(dataAway)


    return (
        <>
        <div className="flex justify-center">
            <p></p>
        </div>

        </>
    );
};