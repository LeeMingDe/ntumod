import React, { useEffect, useState } from 'react';

import '../styles/modules/ModuleInformationCard.scss';

const DUMMY_DATA = {
    title: "CS6969 Digital connections and physical needs",
    course: "com sci",
    numCredits: "3AUS",
    category: ["core", "broadening and deepening/get-pe(sts)", "broadening and deepening/ue"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,`,
    prereq: "CS6901",
    availableFor: "CS Year 2, CS Year 3",
    availableIn: ["Sem 1", "Sem 2", "ST 1", "ST 2"],
    exam: "27-Nov-2021 1:00PM 2 hrs",
    workload: {
        tut: 2,
        lect: 2,
        lab: 2
    }
}

interface Module {
    title: string,
    course: string,
    numCredits: string,
    category: Array<string>,
    description: string,
    prereq: string,
    availableFor: string,
    availableIn: Array<String>,
    exam: string,
    workload: {
        tut: number,
        lect: number,
        lab: number
    }
}

interface Props {

}

const ModuleInformationCard: React.FC<Props> = () => {
    const [moduleDetails, setModuleDetails] = useState<Module>();

    useEffect(() => {
        setModuleDetails(DUMMY_DATA);
    }, [])

    const renderCategory = moduleDetails?.category.map((items, idx) => {
        return <div key={idx} className="category_wrapper">
            {items}
        </div>
    })

    const renderAvailability = moduleDetails?.availableIn.map((items, idx) => {
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
                    {`${moduleDetails?.course } · ${moduleDetails?.numCredits}`}
                </div>
                <div className="category_container">
                    {renderCategory}
                </div>
                <div className="description_container">
                    {moduleDetails?.description}
                </div>
                <div className="additional-info_container">
                    <b>Prerequisites</b>
                    {"\n"}
                    {moduleDetails?.prereq}
                </div>
                <div className="additional-info_container">
                    <b>Available for</b>
                    {"\n"}
                    {moduleDetails?.availableFor}
                </div>
            </div>
            <div className="module-card-right_container px-2">
                {renderAvailability}
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