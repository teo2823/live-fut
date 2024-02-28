import React from 'react';
import { useFetch } from '../Hooks/useFetch';
import { statisticsDataAway } from '../lib/dataTestAway'

export const StatisticAway = ({ matchId, awayTeam}) => {



   const {data, loading, error} = useFetch('fixtures/statistics', `fixture=${matchId}&team=${awayTeam}`)

    if (!data) {
        return null;
    }
    const dataAway = data.response[0];
    console.log(dataAway)

   

    return (
        <>
        <div className="flex flex-col justify-center text-center text-xl lg:text-3xl">
            <h2 className='pb-5 text-holly-400'>{dataAway.team.name}</h2>
            <p className='pb-3'>{dataAway.statistics[9].value ? dataAway.statistics[9].value : "0"}</p>
            <p className='pb-3'>{dataAway.statistics[0].value ? dataAway.statistics[0].value : "0"}</p>
            <p className='pb-3'>{dataAway.statistics[13].value ? dataAway.statistics[13].value : "0"}</p>
            <p className='pb-3'>{dataAway.statistics[7].value ? dataAway.statistics[7].value : "0"}</p>
            <p className='pb-3'>{dataAway.statistics[6].value ? dataAway.statistics[6].value : "0"}</p>
            <p className='pb-3'>{dataAway.statistics[10].value ? dataAway.statistics[10].value : "0"}</p>
            <p className='pb-3'>{dataAway.statistics[11].value ? dataAway.statistics[11].value : "0"}</p>
            <p className='pb-3'>{dataAway.statistics[16].value ? dataAway.statistics[16].value : "0"}</p>
            
        </div>

        </>
    );
};