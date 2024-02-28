import React, { useState, useEffect } from 'react';
import { StatisticHome } from "../components/StatisticHome"
import { StatisticAway } from "../components/StatisticAway"


export const Statistics = ({ matchId, fixtures }) => {
    
    const homeTeam = fixtures.teams.home.id;
    const awayTeam = fixtures.teams.away.id;
    

    return (
        <div className='flex justify-center my-8 gap-24'>
            <StatisticHome homeTeam={homeTeam} matchId={matchId} />
            <div className='text-xl font-light lg:text-3xl'>
                <h2 className='pb-5'>-</h2>
                <p className='pb-3'>Posesion</p>
                <p className='pb-3'>Tiros</p>
                <p className='pb-3'>Total Pases</p>
                <p className='pb-3'>Tiros de esquina</p>
                <p className='pb-3'>Faltas</p>
                <p className='pb-3'>Tarjetas amarillas</p>
                <p className='pb-3'>Tarjetas rojas</p>
                <p className='pb-3'>Goles esperados</p>
            </div>
            <StatisticAway awayTeam={awayTeam} matchId={matchId} />
        </div>
    );
};
