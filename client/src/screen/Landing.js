import React from 'react'
import logo from '../assets/MYtineraryLogo.png'
import Arrow from "../assets/circled-right-2.png";


const Landing = () => {
    return (
        <div>
            <img src={logo} width={300} alt="" />
            <h1>MyItinerary</h1>
            <p>
                Find your perfect trip, designed by insiders who know and love their
                cities.
        </p>

            <section>
                <h2>Start Browsing</h2>
                <img src={Arrow} width={50} className="circledArrow" alt="circle arrow" />
            </section>
            <section>
                <p>Want to build your own MYtinerary?</p>
                <div className="Links">

                    <a
                        className="Home-link"
                        href=""
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Create Account
            </a>
                </div>
            </section>
        </div>
    )
}

export default Landing
