import React from "react";
import Matrix from "../components/Matrix";

export default function SimulationPage() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-6">
                    <h3 style={{textDecoration: "underline"}}>Prisoner's Dilemma</h3>
                    <p>One of the most famous game in Game Theory is the Prisoner's dilemma. The game starts with the scenario that 2 prisoners committing a crime together are now
                         given the same options: confess to the crime or stay silent. Confessing to crime reduces their own sentencing but increases the sentence of their partner 
                         in crime. We can suppose that if both prisoners confess to their crime, both will have a payoff of -1. If both remains silent, each will have a payoff of -2. 
                         If either one confesses while the other remains silent, the one who confesses will have payoff of 0 and the one who remained silent will have a payoff of -3.
                    </p>
                </div>
                <div className="col-6">Prisoner</div>
            </div>

            <hr />

            <div className="row">
                <div className="col-6">Pennies</div>
                <div className="col-6">Pennies</div>
            </div>

            <hr />

            <div className="row">
                <div className="col-6">IESDS</div>
                <div className="col-6">IESDS</div>
            </div>

            <hr />

            <div className="row">
                <div className="col-6">Weighted Mixed</div>
                <div className="col-6">Weighted Mixed</div>
            </div>
        </div>
    );
}