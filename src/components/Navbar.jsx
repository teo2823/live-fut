import React from 'react'

export const Navbar = () => {
    return (
        <header className=" navbar px-3 bg-holly-950" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Matches</a></li>
                        <li>
                            <a>Leagues</a>
                            <ul className="p-2">
                                <li><a>La Liga</a></li>
                                <li><a>Premier League</a></li>
                                <li><a>Bundeliga</a></li>
                                <li><a>Seria A</a></li>
                                <li><a>Eridivise</a></li>
                            </ul>
                        </li>
                        <li><a>News</a></li>
                    </ul>
                </div>
                <a href='/' className=" text-2xl font-bold text-holly-400 ">Fut <span className=' font-light tracking-widest'>live</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white ">
                    <li ><a>Matches</a></li>
                    <li>
                        <details>
                            <summary>Leagues</summary>
                            <ul className="p-2 bg-holly-800">
                                <li><a>La Liga</a></li>
                                <li><a>Premier League</a></li>
                                <li><a>Bundeliga</a></li>
                                <li><a>Seria A</a></li>
                                <li><a>Eridivise</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>News</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-white bg-holly-600 hover:bg-holly-700">Login</a>
            </div>
        </header>
    )

}
