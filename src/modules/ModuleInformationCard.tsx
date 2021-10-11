import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Module } from '../interfaces/modules';

import '../styles/modules/module-information-card.scss';

interface Props extends Module {
    detailedView: boolean
}

const ModuleInformationCard: React.FC<Props> = props => {
    const [moduleDetails, setmoduleDetails] = useState<Module>();

    useEffect(() => {
        setmoduleDetails(props);
    }, [props])

    const renderCategory = moduleDetails?.category.map((items, idx) => {
        return <div key={idx} className="category-wrapper">
            {items}
        </div>
    })

    const renderRequisites = () => {
        let prerequisite = null;
        let preclusion = null;
        if (moduleDetails?.prerequisite) {
            prerequisite = <div className="my-1">
                <b>Prerequisites and Corequisite</b>
                {"\n"}
                {moduleDetails?.prerequisite}
            </div>
        }
        if (moduleDetails?.preclusion) {
            preclusion = <div className="my-1">
                <b>Preclusion</b>
                {"\n"}
                {moduleDetails?.preclusion}
            </div>
        }
        return <div className="text-information-container">
            {prerequisite}
            {preclusion}
        </div>
    }

    // const renderSemesters = moduleDetails?.semesters.map((items, idx) => {
    //     return <div key={idx}>
    //         <b>{items}</b>
    //     </div>
    // })

    const renderWorkload = <div>
        {moduleDetails?.workload.lab + moduleDetails?.workload.tutorial + moduleDetails?.workload.lecture} hours
        <ul>
            <li>Lecture: {moduleDetails?.workload.lecture} Hours</li>
            <li>Tutorial: {moduleDetails?.workload.tutorial} Hours</li>
            <li>Lab: {moduleDetails?.workload.lab} Hours</li>
        </ul>
    </div>

    return (
        <div className="Module-card-container">
            <div className="module-card-left-container">
                <div className="title-container">
                    <Link 
                        to={`/module/${moduleDetails?.moduleCode}/${moduleDetails?.moduleName.toLowerCase().replaceAll(" ", "-")}`} 
                        className="title"
                    >
                        {`${moduleDetails?.moduleCode} ${moduleDetails?.moduleName.split(" ").map(word =>
                            `${word.substring(0,1).toUpperCase()}${word.substring(1).toLowerCase()}`)
                        .join(" ")}`}
                    </Link>
                </div>
                <div className="text-information-container">
                    {`${moduleDetails?.programme.reduce((prev, next) => prev + "·" + next)} · ${props.detailedView ? moduleDetails?.faculty + " · " : ""} ${moduleDetails?.au}AUs`}
                </div>
                {props.detailedView ? <hr className="horizontal-divider"/> : null}
                {props.detailedView ? <div className="category-container">
                        {renderCategory}
                    </div>
                    : null
                }
                <div className="text-information-container">
                    {moduleDetails?.description}
                </div>
                {renderRequisites()}
                {props.detailedView && moduleDetails?.notAvailableFor
                    ? <div className="text-information-container">
                        <b>Not available for</b>
                        {"\n"}
                        {moduleDetails?.notAvailableFor}
                    </div>
                    : null
                }
                {props.detailedView && moduleDetails?.notAvailableToProgramme
                    ? <div className="text-information-container">
                        <b>Not available for programmes</b>
                        {"\n"}
                        {moduleDetails?.notAvailableToProgramme}
                    </div>
                    : null
                }
                {props.detailedView && (moduleDetails?.isPassFail || moduleDetails?.isMinor)
                    ? <div className="text-information-container">
                        <b>Additional information</b>
                        {moduleDetails?.isPassFail ? "\nModule grading is pass/fail" : null}
                        {moduleDetails?.isMinor ? "\nModule can be taken as a minor" : null}
                    </div> 
                    : null
                }
            </div>
            <div className="module-card-right-container px-2">
                {/* {renderSemesters} */}
                <div className="exam-container">
                    <b>Exam</b>
                    {"\n"}
                    {moduleDetails?.exam.replace("to", "-")}
                </div>
                <div className="workload-container">
                    <b>Workload</b>
                    {"\n"}
                    {renderWorkload}
                </div>
            </div>
        </div>
    )
}

export default ModuleInformationCard;