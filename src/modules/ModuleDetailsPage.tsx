import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Disqus from "disqus-react";

import '../styles/modules/module-details-page.scss';

import { Module } from '../interfaces/modules';
import ModuleInformationCard from './ModuleInformationCard';
import ModuleDetailsNavTab from './ModuleDetailsNavTab';
import ModuleDetailsRequisites from './ModuleDetailsRequisites';

const dummy_data = {
    moduleCode: "CS6969",
    moduleName: "Digital connections and physical needs",
    course: "com sci",
    faculty: "School of computing",
    academicUnits: 3,
    category: ["core", "broadening and deepening/get-pe(sts)", "broadening and deepening/ue"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,`,
    prequisitie: "CS6901, CS6902, CS6901, CS6902, CS6901",
    prerequisiteFor: "CS7000, CS7002",
    availableFor: "CS Year 2, CS Year 3",
    // semesters: ["Sem 1", "Sem 2", "ST 1", "ST 2"],
    exam: "27-Nov-2021 1:00PM 2 hrs",
    workload: {
        tutorial: 2,
        lecture: 2,
        lab: 2
    }
};

const ModuleDetailsPage = () => {
    const [moduleInformation, setModuleInformation] = useState<Module>();
    const { moduleCode, moduleName} = useParams();
    console.log(moduleCode, moduleName)

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/modules/${moduleCode}/${moduleName}`)
            .then(res => {
                setModuleInformation(res.data);
            })
            .catch(err => {
                alert(err.response.data.message)
            });
        }
        fetchData()
    }, [moduleCode, moduleName])
    
    return (
        <div className="module-details-container">
            <div>
                <section id="details">
                    {moduleInformation == null ? null :
                        <ModuleInformationCard
                            moduleCode={moduleInformation?.moduleCode}
                            moduleName={moduleInformation?.moduleName}
                            programme={moduleInformation?.programme}
                            faculty={moduleInformation?.faculty}
                            au={moduleInformation?.au}
                            // category={moduleInformation?.category}
                            description={moduleInformation?.description}
                            prerequisite={moduleInformation?.prerequisite}
                            preclusion={moduleInformation?.preclusion}
                            notAvailableFor={moduleInformation?.notAvailableFor}
                            // semesters={moduleInformation?.semesters}
                            isPassFail={moduleInformation?.isPassFail}
                            exam={moduleInformation?.exam}
                            workload={moduleInformation?.workload}
                            detailedView = {true}
                            isMinor={moduleInformation?.isMinor}
                        />
                    }
                </section>
                <section id="prerequisites" className="mt-3">
                    <div className="details-header">
                        Prerequisites Links
                    </div>
                    <hr className="my-1"/>
                    <ModuleDetailsRequisites 
                        prerequisite={moduleInformation?.prerequisite}
                        prerequisiteFor={moduleInformation?.prerequisiteFor}
                    />
                </section>
                <section id="timetable" className="py-5 my-5">
                    <div className="details-header">
                        Timetable
                    </div>
                    <hr className="my-1"/>
                </section>
                <section id="reviews" className=" py-5 my-5">
                    <div className="details-header">
                        Reviews
                    </div>
                    <hr className="my-1"/>
                </section>
            </div>
            <div>
                <ModuleDetailsNavTab />
            </div>
        </div>
    );
};

export default ModuleDetailsPage;