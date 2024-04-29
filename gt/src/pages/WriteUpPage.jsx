import React from "react";
import { Link } from 'react-router-dom';
import '../css/WriteUpPage.css'
import TermField from "../components/TermField";

export default function WriteUpPage() {
    return (
        <div className="container py-5" id="accordian">
            {/* accordian 1: introduction */}
            <div className="row">
                <div className="col-12 pb-5">
                    <div className="card">
                        {/* collapse toggler */}
                        <div className="card-header" id="introHeading" style={{backgroundColor: "white"}}>
                            <button className="btn btn-link" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#collapseIntroduction" 
                                    aria-expanded="true" 
                                    aria-controls="collapseIntroduction"
                                    style={{textDecoration: "none"}}>
                                <span style={{fontSize: "1.5rem", fontWeight: "600", color:"black"}}>Introduction:</span>
                            </button>
                        </div>

                        {/* collapse item */}
                        <div id="collapseIntroduction" className="collapse show" 
                                aria-labelledby="introHeading" 
                                data-parent="#accordion">
                            <p className="card-body" style={{fontSize: "1.1rem", textIndent: "3rem", marginLeft: "1rem", marginRight: "1rem"}}>
                                This landing page will explain some of the of the key-concepts that introduces you 
                                to the topics in Game Theory. Some of the topics covered includes the assumptions 
                                and forms that we assume our "game" holds, the different game states that our 
                                game could end up in, and we will also demonstrate some of the famous paradoxical
                                endings that could show up in a game.
                            </p>
                            
                            <hr className="divider" style={{marginLeft: "30px", marginRight: "30px"}}/>

                            <h5 style={{marginLeft: "2rem"}}> Assumptions </h5>

                            <p className="card-body" style={{fontSize: "1.1rem", textIndent: "3rem", marginLeft: "1rem", marginRight: "1rem", marginBottom: "1.5rem"}}>
                                In the context of the most basic games that we will introduce, we need to assume that the players of a game all 
                                follows the same rules and have the same restricts in order for us to analyze thier strategies. Those are:

                                <ul>
                                    <li>All games are finite.</li>
                                    <li>All players are rational.</li>
                                    <li>All players know the rules of the game.</li>
                                    <li>All players can choose different strategies.</li>
                                    <li>All players aim to maximize gains/minimize losses.</li>
                                </ul>

                                In particular, we will be focusing on Perfect Information Games where all players know the strategies that every other players have.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* accordian 2: key-terms */}
            <div className="row">
                <div className="col-12 pb-5">
                    {/* accordian 3 */}
                    <div className="card">
                        {/* collapse toggler */}
                        <div className="card-header" id="termsHeading" style={{backgroundColor: "white"}}>
                            <button className="btn btn-link" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#collapseKeywords" 
                                    aria-expanded="true" 
                                    aria-controls="collapseKeywords"
                                    style={{textDecoration: "none"}}>
                                <span style={{fontSize: "1.5rem", fontWeight: "600", color:"black"}}>Key-Terms:</span>
                            </button>
                        </div>

                        {/* collapse item */}
                        <div id="collapseKeywords" className="collapse show" 
                                aria-labelledby="termsHeading" 
                                data-parent="#accordion">
                            <div className="card-body">
                                <TermField term="Perfect Information Game" definition="A type of game where all players knows the strategies that every other players could play."/>
                                <TermField term="Non-Cooperative Game" definition="A type of game where all players aims to maximize their own profit."/>
                                <TermField term="Zero-Sum Game" definition="A type of game where the total profit of all players nets to 0."/>
                                <TermField term="Dominant Strategy" definition="A set of player choice that yields strictly better gains than another choice irrespective to other players' actions."/>
                                <TermField term="Strongly Dominated Strategy" definition="A set of player choice where there is a choice that yields strictly better gains."/>
                                <TermField term="Weakly Dominated Strategy" definition="A set of player choice where there is a choice that is at least as good as the current game choice."/>
                                <TermField term="Nash Equilibrium" definition="A set of player choices that cannot yield a better gains in consideration to other players' actions."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* accordian 3: references */}
            <div className="row">
                <div className="col-12 pb-5">
                    <div className="card">
                        {/* collapse toggler */}
                        <div className="card-header" id="referenceHeading" style={{backgroundColor: "white"}}>
                            <button className="btn btn-link" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#collapseReference" 
                                    aria-expanded="true" 
                                    aria-controls="collapseReference"
                                    style={{textDecoration: "none"}}>
                                <span style={{fontSize: "1.5rem", fontWeight: "600", color: "black"}}>References: </span>
                            </button>
                        </div>

                        {/* collapse item */}
                        <div id="collapseReference" className="collapse show" 
                                aria-labelledby="referenceHeading" 
                                data-parent="#accordion">
                            <div className="card-body">
                                <ul>
                                    <li>
                                        <Link className="refLink" 
                                            to='https://web.mit.edu/course/other/sp.268/OldFiles/www/gametheoryI.pdf'>
                                            Introduction to Game Theory: Game Representations & Nash Equilibrium (MIT)
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="refLink"
                                            to='https://en.wikipedia.org/wiki/Strategic_dominance'>
                                            Strategic Dominance (Wikipedia)
                                            </Link>
                                    </li>

                                    <li>
                                        <Link className="refLink"
                                            to='https://www.investopedia.com/ask/answers/071515/what-difference-between-dominant-strategy-solution-and-nash-equilibrium-solution.asp#toc-dominant-strategy-solution'>
                                            Comparing a Dominant Strategy Solution vs. Nash Equilibrium Solution (Investopedia)
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="refLink"
                                            to='https://www.investopedia.com/ask/answers/071515/what-difference-between-dominant-strategy-solution-and-nash-equilibrium-solution.asp#toc-dominant-strategy-solution'>
                                            Introduction to the Theory of Games (Handbook of Dynamic Game Theory. Springer, Cham)

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