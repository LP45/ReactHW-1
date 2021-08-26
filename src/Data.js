import React from "react";
import Review from "./Review";
import Average from "./Average";
import Sentiment_Analysis from "./Sentiment_Analysis";


class Data extends React.Component {
    render() {
        return (
            <div className="data">
                <h4><Review /></h4>
                <h4><Average /></h4>
                <h4><Sentiment_Analysis /></h4>
            </div>
        )
    }
}

export default Data