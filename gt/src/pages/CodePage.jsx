import React from "react";
import '../css/CodePage.css'; // Make sure this path is correct
import { Link } from 'react-router-dom';

export default function CodePage() {
    return (
        <div className="container py-5" id="accordian">
            <div className="row">
                <div className="col-12 pb-5">
                    {/* accordian 1: introduction */}
                    <div className="card">
                        {/* collapse toggler */}
                        <div className="card-header" id="headingOne" style={{backgroundColor: "white"}}>
                            <button className="btn btn-link" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#collapseIntroduction" 
                                    aria-expanded="true" 
                                    aria-controls="collapseIntroduction"
                                    style={{textDecoration: "none"}}>
                                <span style={{fontSize: "1.5rem", fontWeight: "600", color: "black"}}>Code: </span>
                            </button>
                        </div>

                        {/* collapse item */}
                        <div id="collapseIntroduction" className="collapse show" 
                                aria-labelledby="headingOne" 
                                data-parent="#accordion">
                            <div className="card-body">
                                hi
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="row">
                <div className="col-12 pb-5">
                    {/* accordian 2: games */}
                    <div className="card">
                        {/* collapse toggler */}
                        <div className="card-header" id="headingOne" style={{backgroundColor: "white"}}>
                            <button className="btn btn-link" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#collapseGames" 
                                    aria-expanded="true" 
                                    aria-controls="collapseGames"
                                    style={{textDecoration: "none"}}>
                                <span style={{fontSize: "1.5rem", fontWeight: "600", color: "black"}}>References: </span>
                            </button>
                        </div>

                        {/* collapse item */}
                        <div id="collapseGames" className="collapse show" 
                                aria-labelledby="headingOne" 
                                data-parent="#accordion">
                            <div className="card-body">
                                <ul>
                                    <li>
                                        <Link className="refLink" 
                                            to='https://web.mit.edu/course/other/sp.268/OldFiles/www/gametheoryI.pdf'>
                                            Introduction to Game Theory: Game Representations & Nash Equilibrium (MIT)
                                        </Link>
                                    </li>

                                </ul>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
