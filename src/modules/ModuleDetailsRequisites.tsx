import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Module } from '../interfaces/modules';
import Loader from '../layout/Loader';

import '../styles/modules/module-details-requisites.scss';

//TODO: hover tooltip for the modules

interface Props {
    moduleName: string,
    moduleCode: string,
    prerequisite?: string,
    prerequisiteFor?: string
}

const ModuleDetailsRequisites: React.FC<Props> = props => {
    const { prerequisite, prerequisiteFor } = props;

    const [modulePrerequisites, setModulePrerequisites] = useState<Module[]>();
    const [modulePrerequisitesFor, setModulePrerequisitesFor] = useState<Module[]>();
    const [isLoading, setIsLoading] = useState<boolean>();


    useEffect(() => {
        let queries = new URLSearchParams();

        queries.append("prerequisite", prerequisite ? prerequisite : "");
        queries.append("prerequisiteFor", prerequisiteFor ? prerequisiteFor : "");
        const fetchData = async () => {
            await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/modules/get-requisite?${queries}`)
            .then(res => {
                setModulePrerequisites(res.data[0]);
                setModulePrerequisitesFor(res.data[1]);
                setIsLoading(false)
            })
            .catch(err => {
                alert(err.response.data.message)
            });
        }
        fetchData()
    }, [prerequisite, prerequisiteFor])

    const prereqNeededArray = modulePrerequisites?.map((module, idx) => {
        return <li key={idx}>
            <Link
            to={`/module/${module?.moduleCode}/${module?.moduleName.toLowerCase().replaceAll(" ", "-")}`} 
            className="module-req-link">
                {module?.moduleCode}
            </Link>
        </li>
    })

    const prereqForArray = modulePrerequisitesFor?.map((module, idx) => {
        return <li key={idx}>
            <Link
            to={`/module/${module?.moduleCode}/${module?.moduleName.toLowerCase().replaceAll(" ", "-")}`} 
            className="module-req-link">
                {module?.moduleCode}
            </Link>
        </li>
    })

    return (
        <React.Fragment>
            { isLoading
                ? <Loader />
                : <div>
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
                            <div className="current-mod-content">
                                {props.moduleCode}
                            </div>
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
                    <div className="module-req-disclaimer mt-2">
                        <p>The prerequisite links is displayed for visualization purposes and may not be accurate.
                            Viewers are encouraged to double check details.</p>
                    </div>
                </div>
            }
        </React.Fragment>
    )
};

export default ModuleDetailsRequisites;