export default function WriteUpPage() {
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
                                <span style={{fontSize: "1.5rem", fontWeight: "600", color:"black"}}>Introduction:</span>
                            </button>
                        </div>

                        {/* collapse item */}
                        <div id="collapseIntroduction" className="collapse show" 
                                aria-labelledby="headingOne" 
                                data-parent="#accordion">
                            <p className="card-body" style={{fontSize: "1.1rem", textIndent: "3rem", marginLeft: "1rem", marginRight: "1rem"}}>
                                This landing page will explain some of the of the key-concepts that introduces you 
                                to the topics in Game Theory. Some of the topics covered includes the assumptions 
                                and forms that we assume our "game" holds, the different game states that our 
                                game could end up in, and we will also demonstrate some of the famous paradoxical
                                endings that could show up in a game.
                            </p>
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
                                <span style={{fontSize: "1.5rem", fontWeight: "600", color:"black"}}>Types of Games:</span>
                            </button>
                        </div>

                        {/* collapse item */}
                        <div id="collapseGames" className="collapse show" 
                                aria-labelledby="headingOne" 
                                data-parent="#accordion">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 pb-5">
                    {/* accordian 3 */}
                    <div className="card">
                        {/* collapse toggler */}
                        <div className="card-header" id="headingOne" style={{backgroundColor: "white"}}>
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
                                aria-labelledby="headingOne" 
                                data-parent="#accordion">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}