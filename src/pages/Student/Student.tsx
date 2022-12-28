import React from "react";
import {homeObjTwo} from './Data';
import InfoSectionStudent from "../../components/InfoSectionStudent/InfoSectionStudent";

const Home = () => {
    return (
        <>
            <InfoSectionStudent {...homeObjTwo}/>
        </>
    )
};

export default Home;
