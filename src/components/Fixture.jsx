import React from 'react'
import { useParams } from 'react-router-dom'
import YellowCardImg from "../assets/images/yellow-card.png"
import GoToTop from './GoToTop';
import { Statistics } from './Statistics';

export const Fixture = ({ data }) => {
    const params = useParams();

    const matchID = params.matchID;
    const results = data.response.filter((match) => {
        return match.fixture.id == matchID
    })
    const fixtures = results[0];
    
    return (
        <div className="mt-5 ">
            <div className="flex items-center justify-center w-full py-3 mb-2 bg-gray-800 text-xl md:text-2xl">

                <div className="flex justify-center gap-4 items-center">
                    {
                        fixtures.league.flag == null ?
                            (<img src={fixtures.league.logo} alt="" className=' size-5 md:size-10' />)
                            : (<img src={fixtures.league.flag} alt="" className=' size-5 md:size-10' />)
                    }
                    <p className=''>{fixtures.league.name}</p>
                </div>
                <p className=' hidden mx-4 md:flex'>•</p>
                <p className=' hidden md:flex'>{fixtures.league.round}</p>
            </div>
            <div className="score bg-score bg-center bg-cover bg-black/50 bg-blend-darken text-white flex w-full py-8 md:px-4">
                <div className=' w-1/3 first-team flex flex-col justify-center items-center'>
                    <img src={fixtures.teams.home.logo} alt="" className=' size-16 md:size-28' />
                    <h2 className=' text-lg md:text-2xl mt-2'>{fixtures.teams.home.name}</h2>
                </div>

                <div className=" w-1/3 flex-col justify-center items-center">
                    <p className='md:hidden'>{fixtures.league.round}</p>
                    <p>{fixtures.fixture.status.long}</p>
                    <div className=" flex justify-center items-center text-5xl md:text-7xl lg:text-8xl ">
                        <h3 className=' shadow  '>{fixtures.goals.home}</h3>
                        <p className=' shadow '>-</p>
                        <h3 className=' shadow  '>{fixtures.goals.away}</h3>
                    </div>
                    <p className='text-xl lg:text-2xl text-green-300'>{fixtures.fixture.status.elapsed}'</p>
                    <p className=' text-sm mt-2 '>{fixtures.fixture.venue.name}</p>

                </div>

                <div className=' w-1/3  flex flex-col justify-center items-center'>
                    <img src={fixtures.teams.away.logo} alt="" className=' size-16 md:size-28' />
                    <h2 className=' text-lg md:text-2xl mt-2'>{fixtures.teams.away.name}</h2>
                </div>

            </div>
            <div className="px-5 lg:px-0">
                <p className="flex items-center justify-center w-full py-2 mb-2 bg-gray-800 text-lg md:text-xl">Timeline</p>
                {fixtures.events ? (
                    fixtures.events.map((event) => (
                        event.type === "Goal" ? (
                            <div className="p-5 flex flex-col w-full border-b border-b-gray-500" key={event.team.id}>
                                {event.type === "Goal" && (
                                    <div className="flex justify-center items-center">
                                        <p className='relative right-3 text-green-500'>{event.time.elapsed}'</p>
                                        <div className="flex flex-col justify-center items-center">
                                            <div className='flex gap-3'>
                                                <i className="fa-regular fa-futbol text-xl text-white"></i>
                                                <p>Goal!</p>
                                            </div>
                                            <div className='flex justify-center items-center gap-2'>
                                                <p>{event.player.name}</p>
                                                <small className='flex items-center'>({event.team.name} <img className=' size-5 ml-2' src={event.team.logo} alt="" />)</small>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : event.type === "Card" ? (
                            <div className="p-5 flex flex-col w-full border-b border-b-gray-500" key={event.team.id}>
                                {event.type === "Card" && (
                                    <div className="flex justify-center items-center w-full">
                                        <p className='relative right-3 text-green-500'>{event.time.elapsed}'</p>
                                        <div className="flex flex-col justify-center items-center">
                                            <div className='flex gap-2'>
                                                <img className='size-5' src={YellowCardImg} alt="" />
                                                <p>Yellow Card</p>
                                            </div>
                                            <div className='flex justify-center items-center gap-3'>
                                                <p>{event.player.name}</p>
                                                <small className='flex items-center'>({event.team.name} <img className=' size-5 ml-2' src={event.team.logo} alt="" />)</small>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : null)
                    )
                ) : null}
            </div>
            <p className="flex items-center justify-center w-full py-2 mt-4 mb-2 bg-gray-800 text-lg md:text-xl">Stastics</p>                        
            <Statistics matchId={matchID} fixtures={fixtures}/>
            <GoToTop />                         
        </div>


    )
}
