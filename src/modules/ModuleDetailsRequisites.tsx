import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Module } from '../interfaces/modules';

import '../styles/modules/module-details-requisites.scss';

//todo: hover tooltip for the modules

interface Props {
    prerequisite?: string,
    prerequisiteFor?: string
}

const DUMMY_PREREQ: Module[] = 
[
    {
        moduleCode: "CS6901",
        title: "Something"
    },
    {
        moduleCode: "CS6902",
        title: "Something"
    },
]

const DUMMY_PREREQFOR: Module[] = 
[
    {
        moduleCode: "CS7000",
        title: "Something"
    },
    {
        moduleCode: "CS7002",
        title: "Something"
    },
]

const ModuleDetailsRequisites: React.FC<Props> = props => {
    const [ modulePrerequisites, setModulePrerequisites] = useState<Module[]>();
    const [ modulePrerequisitesFor, setModulePrerequisitesFor] = useState<Module[]>();


    useEffect(() => {
        //query for module requisites here
        setModulePrerequisites(DUMMY_PREREQ);
        setModulePrerequisitesFor(DUMMY_PREREQFOR);
    }, [])

    const prereqNeededArray = modulePrerequisites?.map((module, idx) => {
        return <li key={idx}>
            <Link
            to={`/module/${module?.moduleCode}/${module?.title.toLowerCase().replaceAll(" ", "-")}`} 
            className="module-req-link">
                {module?.moduleCode}
            </Link>
        </li>
    })

    const prereqForArray = modulePrerequisitesFor?.map((module, idx) => {
        return <li key={idx}>
            <Link
            to={`/module/${module?.moduleCode}/${module?.title.toLowerCase().replaceAll(" ", "-")}`} 
            className="module-req-link">
                {module?.moduleCode}
            </Link>
        </li>
    })

    return (
        <div>
            <div className="module-req-container">
                <div className="pe-2">
                    <div className="req-col-header">
                        <div></div>Prerequisites needed
                    </div>
                    <ul className="module-req-list">
                        {prereqNeededArray}
                    </ul>
                </div>
                <BsArrowRight size="40"/>
                <div className="px-2">
                    <div className="req-col-header">
                        Current module
                    </div>
                    <Link className="module-current-link" to="">
                        <div className="current-mod-content">
                            CS6969
                        </div>
                    </Link>
                </div>
                <BsArrowRight size="40"/>
                <div className="ps-2">
                    <div className="req-col-header">
                        Prerequisite for
                    </div>
                    <ul className="module-req-list">
                        {prereqForArray}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default ModuleDetailsRequisites;