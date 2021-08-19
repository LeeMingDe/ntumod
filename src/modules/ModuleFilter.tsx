import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Module } from '../interfaces/modules';

import '../styles/modules/module-filter.scss';
import { academicUnitsFilterPredicate, examsFilterPredicate, moduleDaysFilterPredicate, othersFilterPredicate, semesterFilterPredicate } from '../util/ModuleFilterPredicate';

interface Props {
    data: Array<Module>,
    setData: React.Dispatch<React.SetStateAction<Module[]>>
}

const semesterOffered = ["Semester 1", "Semester 2", "Special Term I", "Special Term II"];
const examsAndGrading = ["No Exams", "Pass/Fail"];
const academicUnits = ["1 to 2 AUs", "3 AUs", "4 AUs", "5 AUs and above"];
const moduleDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday/Sunday"];
const otherOptions = ["Lab-based module", "Year-long module", "FYP", "Online module"];
const filterDescriptions = semesterOffered.concat(examsAndGrading, academicUnits, moduleDays, otherOptions);

const defaultCheckboxState = Array(20).fill(false);

const filterPredicates = semesterFilterPredicate.concat(examsFilterPredicate, academicUnitsFilterPredicate,
    moduleDaysFilterPredicate, othersFilterPredicate);

const ModuleFilter: React.FC<Props> = props => {
    const [originalData, setOriginalData] = useState<Array<Module>>([])
    const [filteredData, setFilteredData] = useState<Array<Module>>([]);
    const [checkboxState, setCheckboxState] = useState<Array<boolean>>(defaultCheckboxState);

    useEffect(() => {
        setFilteredData(props.data);
        setOriginalData(props.data);
    }, [props.data])

    const checkboxClickHandler = (event, idx) => {
        setCheckboxState(prevState => {
            prevState[idx] = event.target.checked;
            if (event.target.checked) {
                setFilteredData(prevState => prevState.filter(filterPredicates[idx]));
            } else {
                setFilteredData(prevState => {
                    prevState = originalData;
                    for (let i = 0; i < checkboxState.length; i++) {
                        if (checkboxState[i]) {
                            prevState.filter(filterPredicates[i]);
                        }
                    }
                    return prevState
                })
            }
            return prevState;
        })
        props.setData(filteredData)
    };

    const renderFilterDescription = filterDescriptions.map((items, idx) => {
        const filterOption = <div key={idx}>
            <label className="filter-options-wrapper">
                <input
                    type="checkbox"
                    onClick={(e) => checkboxClickHandler(e, idx)}  
                />
                <span className="filter-options-description">{items}</span>
            </label>
        </div>
        return filterOption;
    });

    const renderSemesterOffered = renderFilterDescription.slice(0,4);
    const renderExamsAndGrading = renderFilterDescription.slice(4,6);
    const renderAcademicUnits = renderFilterDescription.slice(6,10);
    const renderModuleDays = renderFilterDescription.slice(10,16);
    const renderOtherOptions = renderFilterDescription.slice(16,20);

    return (
        <div className="module-filter-container">
            <div className="title-container">
                <div className="title">
                    Filter results
                </div>
                <div className="clear-selection">
                    Clear
                </div>
            </div>
            <div className="filter-options-container px-2">
                <div className="mb-1">
                    <div className="filter-options-header">
                        Offered in
                    </div>
                    {renderSemesterOffered}
                </div>
                <div className="mb-1">
                    <div className="filter-options-header">
                        Exams & Grading
                    </div>
                    {renderExamsAndGrading}
                </div>
                <div className="mb-1">
                    <div className="filter-options-header">
                        Academic Units
                    </div>
                    {renderAcademicUnits}
                </div>
                <div className="mb-1">
                    <div className="filter-options-header">
                        Module Schedule
                    </div>
                    {renderModuleDays}
                </div>
                <div className="mb-1">
                    <div className="filter-options-header">
                        Faculty
                    </div>
                    <select defaultValue="default" className="dropdown-select">
                        <option value="default" disabled hidden>
                            Search/select faculty(s)
                        </option>
                        <option>
                            option 1
                        </option>
                    </select>
                </div>
                <div className="mb-1">
                    <div className="filter-options-header">
                        Programme
                    </div>
                    <select defaultValue="default" className="dropdown-select">
                        <option value="default" disabled hidden>
                            Search/select programme(s)
                        </option>
                        <option>
                            option 1
                        </option>
                    </select>
                </div>
                <div className="mb-1">
                    <div className="filter-options-header">
                        Others
                    </div>
                    {renderOtherOptions}
                </div>
            </div>
        </div>
    )
};

export default ModuleFilter;