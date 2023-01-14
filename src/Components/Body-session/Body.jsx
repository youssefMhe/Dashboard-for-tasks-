import React from 'react';
import "./body.scss"
import Top from "./Top-session/Top";
import Bottom from "./Bottom-session/Bottom";

const Body = (props) => (
    <div className={'body'}>
        <Top/>
        <Bottom/>
    </div>
);

export default Body;