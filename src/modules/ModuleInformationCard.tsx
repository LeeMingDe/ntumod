import React, { useEffect, useState } from 'react';
import { Module } from '../interfaces/modules';

import '../styles/modules/module-information-card.scss';

const DUMMY_DATA = {
    moduleCode: "CS6969",
    title: "CS6969 Digital connections and physical needs",
    course: "com sci",
    moduleCredit: "3AUS",
    category: ["core", "broadening and deepening/get-pe(sts)", "broadening and deepening/ue"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,`,
    prerequisite: "CS6901",
    corequisite: "asdas",
    preclusion: "asdas",
    availableFor: "CS Year 2, CS Year 3",
    semesters: ["Sem 1", "Sem 2", "ST 1", "ST 2"],
    exam: "27-Nov-2021 1:00PM 2 hrs",
    workload: {
        tut: 2,
        lect: 2,
        lab: 2
    }
}

interface Props extends Module {

}

const ModuleInformationCard: React.FC<Props> = props => {
    const [moduleDetails, setmoduleDetails] = useState<Module>();

    useEffect(() => {
        setmoduleDetails(props);
    }, [props])

    const renderCategory = moduleDetails?.category.map((items, idx) => {
        return <div key={idx} className="category_wrapper">
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
        return <div className="additional-info_container">
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
        <div className="Module-card_container">
            <div className="module-card-left_container">
                <div className="title_container">
                    {moduleDetails?.title}
                </div>
                <div className="course-credit_container">
                    {`${moduleDetails?.course } · ${moduleDetails?.moduleCredit}`}
                </div>
                <div className="category_container">
                    {renderCategory}
                </div>
                <div className="description_container">
                    {moduleDetails?.description}
                </div>
                {renderRequisites()}
                <div className="additional-info_container">
                    <b>Available for</b>
                    {"\n"}
                    {moduleDetails?.availableFor}
                </div>
            </div>
            <div className="module-card-right_container px-2">
                {renderSemesters}
                <div className="exam_container">
                    <b>Exam</b>
                    {"\n"}
                    {moduleDetails?.exam}
                </div>
                <div className="workload_container">
                    <b>Workload</b>
                    {"\n"}
                    {renderWorkload}
                </div>
            </div>
        </div>
    )
}

export default ModuleInformationCard;