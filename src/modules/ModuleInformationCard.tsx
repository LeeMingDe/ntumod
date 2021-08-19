import React, { useEffect, useState } from 'react';
import { Module } from '../interfaces/modules';

import '../styles/modules/module-information-card.scss';

interface Props extends Module {

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
        let corequisite = null;
        let preclusion = null;
        if (moduleDetails?.prerequisite) {
            prerequisite = <div className="my-1">
                <b>Prerequisites</b>
                {"\n"}
                {moduleDetails?.prerequisite}
            </div>
        }
        if (moduleDetails?.corequisite) {
            corequisite = <div className="my-1">
                <b>Corequisites</b>
                {"\n"}
                {moduleDetails?.corequisite}
            </div>
        }
        if (moduleDetails?.preclusion) {
            preclusion = <div className="my-1">
                <b>Preclusion</b>
                {"\n"}
                {moduleDetails?.preclusion}
            </div>
        }
        return <div className="additional-info-container">
            {prerequisite}
            {corequisite}
            {preclusion}
        </div>
    }

    const renderSemesters = moduleDetails?.semesters.map((items, idx) => {
        return <div key={idx}>
            <b>{items}</b>
        </div>
    })

    const renderWorkload = <div>
        {moduleDetails?.workload.lab + moduleDetails?.workload.tut + moduleDetails?.workload.lect} hours
        <ul>
            <li>Lecture: {moduleDetails?.workload.lect}</li>
            <li>Tutorial: {moduleDetails?.workload.tut}</li>
            <li>Lab: {moduleDetails?.workload.lab}</li>
        </ul>
    </div>

    return (
        <div className="Module-card-container">
            <div className="module-card-left-container">
                <div className="title-container">
                    {moduleDetails?.title}
                </div>
                <div className="course-credit-container">
                    {`${moduleDetails?.course } · ${moduleDetails?.academicUnits}AUs`}
                </div>
                <div className="category-container">
                    {renderCategory}
                </div>
                <div className="description-container">
                    {moduleDetails?.description}
                </div>
                {renderRequisites()}
                <div className="additional-info-container">
                    <b>Available for</b>
                    {"\n"}
                    {moduleDetails?.availableFor}
                </div>
                {moduleDetails?.isPassFail !== undefined
                    ? <div className="additional-info-container">
                        <b>Additional information</b>
                        {"\n"}
                        Module grading is pass/fail
                    </div> 
                    : null
                }
            </div>
            <div className="module-card-right-container px-2">
                {renderSemesters}
                <div className="exam-container">
                    <b>Exam</b>
                    {"\n"}
                    {moduleDetails?.exam}
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