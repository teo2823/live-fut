import React from 'react'
import { Link } from 'react-router-dom'
import GoToTop from './GoToTop'

export const Table = ({ data, loading, error }) => {
    return (
        <>
            {loading && (<h2>cargando..</h2>)}
            {error && (<h2>Something went wrong.</h2>)}
            <h2 className=' text-center mt-5 mb-7 text-3xl' >Live</h2>
            <div className='grid grid-cols-1 px-5 md:grid-cols-2 gap-7 lg:px-0 ' >
                {data.response.map((fixtures) => (
                    <Link to={`/fixtures/${fixtures.fixture.id}`} key={fixtures.fixture.id}>

                        <div className=' py-4 px-3 border border-gray-700 rounded-xl hover:bg-gray-800 cursor-pointer' >

                            <div className="flex justify-center w-full items-center gap-2 py-1 mb-2 bg-gray-800">
                                {
                                    fixtures.league.flag == null ?
                                        (<img src={fixtures.league.logo} alt="" className=' size-5' />)
                                        : (<img src={fixtures.league.flag} alt="" className=' size-5' />)
                                }
                                <p>{fixtures.league.name}</p>
                            </div>

                            <div className="flex items-center">
                                <h3 className=' text-center text-green-500'>{fixtures.fixture.status.elapsed}'</h3>
                                <div className="datos w-full mx-5">
                                    <div className="flex items-center justify-between ">
                                        <div className="flex items-center gap-3 pb-3">
                                            <div className="">
                                                <img src={fixtures.teams.home.logo} alt="" className=' size-8' />
                                            </div>
                                            <h2>{fixtures.teams.home.name}</h2>
                                        </div>
                                        <h3 className='text-xl'>{fixtures.goals.home}</h3>
                                    </div>

                                    <div className="flex items-center justify-between ">
                                        <div className="flex items-center gap-3">
                                            <div className="">
                                                <img src={fixtures.teams.away.logo} alt="" className=' size-8' />
                                            </div>
                                            <h2>{fixtures.teams.away.name}</h2>
                                        </div>
                                        <h3 className='text-xl'>{fixtures.goals.away}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    
                ))}
            </div>
            <GoToTop />
        </>
    )
}

