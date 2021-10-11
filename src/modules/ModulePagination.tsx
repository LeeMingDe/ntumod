import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Module } from '../interfaces/modules';
import ModuleInformationCard from './ModuleInformationCard';

import '../styles/modules/module-pagination.scss';
import chevron from '../icons/chevron.svg';
import doubleChevron from '../icons/doublechevron.svg'
import ModuleFilter from './ModuleFilter';

const ModulePagination = () => {
    const [params, setParams] = useState<URLSearchParams>(new URLSearchParams());
    const [data, setData] = useState<Array<Module>>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number | null>(null);
    const [currentItems, setCurrentItems] = useState<Array<Module>>([]);
    
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);

    const history = useHistory();

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/api/v1/modules`;
        let paramsString = "";
        if (params.toString) {
            paramsString = "?" + params;
        }
        const fetchData = async () => {
            await axios.get(url + paramsString)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                alert(err.response.data.message)
            });
        }
        fetchData()
        history.push(paramsString)
    }, [params, history])

    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
        setItemsPerPage(5);
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
                            moduleName={moduleInformation.moduleName}
                            programme={moduleInformation.programme}
                            faculty={moduleInformation.faculty}
                            au={moduleInformation.au}
                            category={moduleInformation.category}
                            description={moduleInformation.description}
                            prerequisite={moduleInformation.prerequisite}
                            preclusion={moduleInformation.preclusion}
                            notAvailableFor={moduleInformation.notAvailableFor}
                            // semesters={moduleInformation.semesters}
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
                <ModuleFilter setParams={setParams}/>
            </div>

        </React.Fragment>
    );
}

export default ModulePagination;