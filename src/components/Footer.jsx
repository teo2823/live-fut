import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer mt-20 p-10 bg-base-200 text-base-content">
            <aside className=' flex flex-col justify-center'>
                <a href='/' className=" text-xl">FutLive</a>
                <p>Live Score matches</p>
            </aside>
            <nav>
                <h6 className="footer-title">Leagues</h6>
                <a className="link link-hover">La Liga</a>
                <a className="link link-hover">Premier League</a>
                <a className="link link-hover">Serie A</a>
                <a className="link link-hover">Ligue One</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}
