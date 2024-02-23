import React, { useState, useEffect } from 'react';
import { statisticsData } from '../lib/testStatistics';
import { fetchFixtures } from '../lib/fetchData';

export const Statistics = ({ matchId, fixtures }) => {
    
   // const homeTeam = fixtures.teams.home.id;
    //const awayTeam = fixtures.teams.away.id;

    //const [homeStats, setHomeStats] = useState(statisticsData);
   //const [awayStats, setAwayStats] = useState(statisticsData);

    //const fetchDataHome = async () => {
        //const data = await fetchFixtures('fixtures/statistics', `fixture=${matchId}&team=${homeTeam}`)
        //setHomeStats(data)
    //}
    //const fetchDataAway = async () => {
    //    const data = await fetchFixtures('fixtures/statistics', `fixture=${matchId}&team=${awayTeam}`)
    //    setAwayStats(data)
   // }

    //useEffect(() => {
    //    fetchDataHome()
    //    fetchDataAway()
    //}, [])

    const dataHome = statisticsData.response[0];
    const dataAway = statisticsData.response[0];


    return (
        <>
        <div className="flex justify-center">
            <table className="w-full md:text-xl lg:text-2xl">
                <thead>
                    <tr>
                        <th className="w-2/5 px-4 py-2">{dataHome.team.name}</th>
                        <th className="px-4 py-2"></th>
                        <th className="w-2/5 px-4 py-2">{dataAway.team.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className= "">
                        <td className="px-4 py-2 text-gray-200">{dataHome.statistics[9].value ? dataHome.statistics[9].value : "0"}</td>
                        <td className="px-4 py-2">{dataHome.statistics[9].type}</td>
                        <td className="px-4 py-2">{dataAway.statistics[9].value ? dataAway.statistics[9].value : "0"}</td>
                    </tr>
                    <tr className="">
                        <td className="px-4 py-2 text-gray-200">{dataHome.statistics[0].value ? dataHome.statistics[0].value : "0"}</td>
                        <td className="px-4 py-2">{dataHome.statistics[0].type}</td>
                        <td className="px-4 py-2">{dataAway.statistics[0].value ? dataAway.statistics[0].value : "0"}</td>
                    </tr>
                    <tr className="">
                        <td className="px-4 py-2 text-gray-200">{dataHome.statistics[7].value ? dataHome.statistics[7].value : "0"}</td>
                        <td className="px-4 py-2">{dataHome.statistics[7].type}</td>
                        <td className="px-4 py-2">{dataAway.statistics[7].value ? dataAway.statistics[7].value : "0"}</td>
                    </tr>
                    <tr className="">
                        <td className="px-4 py-2 text-gray-200">{dataHome.statistics[10].value ? dataHome.statistics[10].value : "0"}</td>
                        <td className="px-4 py-2">{dataHome.statistics[10].type}</td>
                        <td className="px-4 py-2">{dataAway.statistics[10].value ? dataAway.statistics[10].value : "0"}</td>
                    </tr>
                    <tr className="">
                        <td className="px-4 py-2 text-gray-200">{dataHome.statistics[13].value ? dataHome.statistics[13].value : "0"}</td>
                        <td className="px-4 py-2">{dataHome.statistics[13].type}</td>
                        <td className="px-4 py-2">{dataAway.statistics[13].value ? dataAway.statistics[13].value : "0"}</td>
                    </tr>
                    <tr className="">
                        <td className="px-4 py-2 text-gray-200">{dataHome.statistics[16].value ? dataHome.statistics[16].value : "0"}</td>
                        <td className="px-4 py-2">Expected Goals</td>
                        <td className="px-4 py-2">{dataAway.statistics[16].value ? dataAway.statistics[16].value : "0"}</td>
                    </tr>
                    <tr className="">
                        <td className="px-4 py-2 text-gray-200">{dataHome.statistics[8].value ? dataHome.statistics[8].value : "0"}</td>
                        <td className="px-4 py-2">{dataHome.statistics[8].type}</td>
                        <td className="px-4 py-2">{dataAway.statistics[8].value ? dataAway.statistics[8].value : "0"}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        </>
    );
};
