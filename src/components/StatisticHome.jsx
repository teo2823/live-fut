import React from 'react';
import { useFetch } from '../Hooks/useFetch';
import { statisticsDataHome } from "../lib/dataTestHome"

export const StatisticHome = ({ matchId, homeTeam}) => {

   const {data, loading, error} = useFetch('fixtures/statistics', `fixture=${matchId}&team=${homeTeam}`)

    if (!data) {
        return null;
    }
    const dataHome = data.response[0];
    console.log(dataHome)

    return (
        <>
        <div className="flex flex-col justify-center text-center text-xl lg:text-3xl">
            <h2 className='pb-5 text-holly-400'>{dataHome.team.name}</h2>
            <p className='pb-3'>{dataHome.statistics[9].value ? dataHome.statistics[9].value : "0"}</p>
            <p className='pb-3'>{dataHome.statistics[2].value ? dataHome.statistics[2].value : "0"}</p>
            <p className='pb-3'>{dataHome.statistics[13].value ? dataHome.statistics[13].value : "0"}</p>
            <p className='pb-3'>{dataHome.statistics[7].value ? dataHome.statistics[7].value : "0"}</p>
            <p className='pb-3'>{dataHome.statistics[6].value ? dataHome.statistics[6].value : "0"}</p>
            <p className='pb-3'>{dataHome.statistics[10].value ? dataHome.statistics[10].value : "0"}</p>
            <p className='pb-3'>{dataHome.statistics[11].value ? dataHome.statistics[11].value : "0"}</p>
            <p className='pb-3'>{dataHome.statistics[16].value ? dataHome.statistics[16].value : "0"}</p>
        </div>

        </>
    );
};