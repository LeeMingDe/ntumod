import React, { useCallback, useEffect, useState } from 'react';

import { Module } from '../interfaces/modules';
import ModuleInformationCard from './ModuleInformationCard';

import '../styles/modules/module-pagination.scss';
import chevron from '../icons/chevron.svg';
import doubleChevron from '../icons/doublechevron.svg'
import ModuleFilter from './ModuleFilter';

interface Props {
    
}

const DUMMY_DATA = [
    {
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
        preclusion: "asdas",
        availableFor: "CS Year 2, CS Year 3",
        semesters: ["Semester 1", "Semester 2", "Special Term 1", "Special Term 2"],
        isPassFail: true,
        exam: "27-Nov-2021 1:00PM 2 hrs",
        workload: {
            tut: 2,
            lect: 2,
            lab: 2
        }
    },
    {
        moduleCode: "CS6969",
        title: "Digital connections and physical needs",
        course: "com sci",
        faculty: "School of computing",
        academicUnits: 2,
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
        isPassFail: false,
        exam: "27-Nov-2021 1:00PM 2 hrs",
        workload: {
            tut: 2,
            lect: 2,
            lab: 2
        }
    },
    {
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
    }
]

const ModulePagination: React.FC<Props> = () => {
    const [data, setData] = useState<Array<Module>>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number | null>(null);
    const [currentItems, setCurrentItems] = useState<Array<Module>>([]);
    
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);

    useEffect(() => {
        setData(DUMMY_DATA);
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
        setItemsPerPage(1);
    }, [data, currentPage, itemsPerPage]);

    const pages = [];

    for (let i = 1; i <= Math.ceil(data.length/itemsPerPage); i++) {
        pages.push(i);
    }

    const pageClickHandler = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const firstPageClickHandler = () => {
        setCurrentPage(() =>  {
            setMaxPageNumberLimit(5);
            setMinPageNumberLimit(0);
            return 1;
        });
    };
    const lastPageClickHandler = () => {
        setCurrentPage(() =>  {
            setMaxPageNumberLimit(pages[pages.length - 1]);
            setMinPageNumberLimit(pages[pages.length - 1] - 5);
            return pages[pages.length - 1];
        });
    };

    const nextPageClickHandler = () => {
        setCurrentPage(prevPageNumber => {               
            if (prevPageNumber === pages[pages.length - 1]) {
                return prevPageNumber;
            }
            if (prevPageNumber + 1 > maxPageNumberLimit) {
                setMaxPageNumberLimit(maxPageNumberLimit + itemsPerPage);
                setMinPageNumberLimit(minPageNumberLimit + itemsPerPage);
            }
            return prevPageNumber + 1
        });
    };

    const prevPageClickHandler = () => {
        setCurrentPage(prevPageNumber => {
            if (prevPageNumber === pages[0]) {
                return prevPageNumber;
            }
            if (prevPageNumber - 1 <= minPageNumberLimit) {
                setMaxPageNumberLimit(maxPageNumberLimit - itemsPerPage);
                setMinPageNumberLimit(minPageNumberLimit - itemsPerPage);
            }
            return prevPageNumber - 1
        });
    };

    const renderPageNumbers = pages.map(number => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={pageClickHandler}
                    className={`page-number ${currentPage === number ? "active" : null}`}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    })

    const renderData = useCallback(() => {
        return (
            <ul>
                {currentItems.map((moduleInformation, index) => {
                    return (
                        <ModuleInformationCard
                            key={index}
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
                            detailedView = {false}
                        />
                    );
                })}
            </ul>
        )
    }, [currentItems]);

    return (
        <React.Fragment>
            <div className="pagination-content-wrapper">
                <div>
                    {renderData()}
                    <ul className="pagination-bar">
                        <li>
                            <button
                                onClick={firstPageClickHandler}
                                className={currentPage === pages[0] ? "no-display" : null}
                            >
                            <img src={doubleChevron} alt="double left chevron" className="left-chevron double-chevron"/>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={prevPageClickHandler}
                                className={currentPage === pages[0] ? "no-display" : null}
                            >
                            <img src={chevron} alt="left chevron" className="left-chevron single-chevron mx-2"/>
                            </button>
                        </li>
                        {renderPageNumbers}
                        <li>
                            <button
                                onClick={nextPageClickHandler}
                                className={currentPage === pages[pages.length - 1] ? "no-display" : null}
                            >
                            <img src={chevron} alt="right chevron" className="single-chevron mx-2"/>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={lastPageClickHandler}
                                className={currentPage === pages[pages.length - 1] ? "no-display" : null}
                            >
                            <img src={doubleChevron} alt="double right chevron" className="double-chevron"/>
                            </button>
                        </li>
                    </ul>
                </div>
                <ModuleFilter data={data} setData={setData}/>
            </div>

        </React.Fragment>
    );
}

export default ModulePagination;