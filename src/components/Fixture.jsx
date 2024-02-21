import React from 'react'
import { useParams } from 'react-router-dom'

export const Fixture = ({ data }) => {
    const params = useParams();

    const matchID = params.matchID;
    const results = data.response.filter((match) => {
        return match.fixture.id == matchID
    })
    const fixtures = results[0];


    return (
        <div className="">
            <div className="flex items-center justify-center w-full py-3 mb-2 bg-gray-800 text-xl md:text-2xl">

                <div className="flex justify-center gap-4 items-center">
                    {
                        fixtures.league.flag == null ?
                            (<img src={fixtures.league.logo} alt="" className=' size-5 md:size-10' />)
                            : (<img src={fixtures.league.flag} alt="" className=' size-5 md:size-10' />)
                    }
                    <p className=''>{fixtures.league.name}</p>
                </div>
                <p className='mx-4'>•</p>
                <p>{fixtures.league.round}</p>
            </div>
            <div className="score flex w-full py-8 md:px-4">
                <div className=' w-1/3 first-team flex flex-col justify-center items-center'>
                    <img src={fixtures.teams.home.logo} alt="" className=' size-16 md:size-28' />
                    <h2 className=' text-lg md:text-2xl mt-2'>{fixtures.teams.home.name}</h2>
                </div>

                <div className=" w-1/3 flex-col justify-center items-center">
                    <p>{fixtures.fixture.date}</p>
                    <div className=" flex justify-center items-center text-5xl md:text-7xl lg:text-8xl ">
                        <h3>{fixtures.goals.home}</h3>
                        <p>-</p>
                        <h3>{fixtures.goals.away}</h3>
                    </div>
                    <p className='text-xl lg:text-2xl text-green-500'>{fixtures.fixture.status.elapsed}'</p>
                </div>

                <div className=' w-1/3  flex flex-col justify-center items-center'>
                    <img src={fixtures.teams.away.logo} alt="" className=' size-16 md:size-28' />
                    <h2 className=' text-lg md:text-2xl mt-2'>{fixtures.teams.away.name}</h2>
                </div>

            </div>
            
        </div>


    )
}
