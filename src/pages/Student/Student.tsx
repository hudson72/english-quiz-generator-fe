import React from "react";
import {homeObjTwo} from './Data';
import InfoSectionStudent from "../../components/InfoSectionStudent/InfoSectionStudent";

const Students = () => {
    return (
        <>
            <InfoSectionStudent {...homeObjTwo}/>
        </>
    )
};

export default Students;
