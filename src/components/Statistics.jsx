import React, { useState, useEffect } from 'react';
import { StatisticHome } from "../components/StatisticHome"
import { StatisticAway } from "../components/StatisticAway"


export const Statistics = ({ matchId, fixtures }) => {
    
    const homeTeam = fixtures.teams.home.id;
    const awayTeam = fixtures.teams.away.id;
    

    return (
        <div className='flex justify-center'>
            <StatisticHome homeTeam={homeTeam} matchId={matchId} />
            <div>
                <p>prueba</p>
            </div>
            <StatisticAway awayTeam={awayTeam} matchId={matchId} />
        </div>
    );
};
