import React from "react";

export default function TermField(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <h5>{props.term}:</h5>
                </div>
                <div className="col-9">
                    <p>{props.definition}</p>
                </div>
            </div>
        </div>
    );
}