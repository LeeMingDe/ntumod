import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Module } from '../interfaces/modules';
import ModuleInformationCard from './ModuleInformationCard';

import '../styles/modules/module-details-page.scss';
import ModuleDetailsNavTab from './ModuleDetailsNavTab';

const dummy_data = {
    moduleCode: "CS6969",
    title: "Digital connections and physical needs",
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
    prerequisite: "CS6901",
    corequisite: "asdas",
    availableFor: "CS Year 2, CS Year 3",
    semesters: ["Sem 1", "Sem 2", "ST 1", "ST 2"],
    exam: "27-Nov-2021 1:00PM 2 hrs",
    workload: {
        tut: 2,
        lect: 2,
        lab: 2
    }
};

interface Props {

}

const ModuleDetailsPage: React.FC<Props> = () => {
    const [moduleInformation, setModuleInformation] = useState<Module>();
    const { modulecode, moduletitle} = useParams();

    useEffect(() => {
        setModuleInformation(dummy_data);
    }, [])
    
    return (
        <div className="module-details-container">
            <div>
                <section id="details">
                    {moduleInformation == null ? null :
                        <ModuleInformationCard
                            moduleCode={moduleInformation.moduleCode}
                            title={moduleInformation.title}
                            course={moduleInformation.course}
                            faculty={moduleInformation.faculty}
                            academicUnits={moduleInformation.academicUnits}
                            category={moduleInformation.category}
                            description={moduleInformation.description}
                            prerequisite={moduleInformation.prerequisite}
                            corequisite={moduleInformation.corequisite}
                            preclusion={moduleInformation.preclusion}
                            availableFor={moduleInformation.availableFor}
                            semesters={moduleInformation.semesters}
                            isPassFail={moduleInformation.isPassFail}
                            exam={moduleInformation.exam}
                            workload={moduleInformation.workload}
                            detailedView = {true}
                        />
                    }
                </section>
                <section id="prerequisites" className=" pt-5 pb-5">
                    asdasdasd
                </section>
                <section id="timetable" className=" pt-5 pb-5">
                    asdasdas
                </section>
                <section id="reviews" className=" pt-5 pb-5">
                    asdasdas
                </section>
            </div>
            <div>
                <ModuleDetailsNavTab />
            </div>
            
        </div>
    );
};

export default ModuleDetailsPage;