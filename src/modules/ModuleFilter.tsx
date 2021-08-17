import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Module } from '../interfaces/modules';

import '../styles/modules/module-filter.scss';

interface Props {
    data: Array<Module>
}

const semesterOffered = ["Semester 1", "Semester 2", "Special Term I", "Special Term II"];
const examsAndGrading = ["No Exams", "Pass/Fail"];
const academicUnits = ["1 to 2 AUs", "3 AUs", "4 AUs", "5 AUs and above"];
const moduleDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday/Sunday"];
const otherOptions = ["Lab-based module", "Year-long module", "FYP", "Online module"];

const defaultCheckboxState = Array(20).fill(false);

const ModuleFilter: React.FC<Props> = props => {
    const [filteredData, setFilteredData] = useState<Array<Module>>([]);
    const [checkboxState, setCheckBoxState] = useState<Array<boolean>>(defaultCheckboxState);

    useEffect(() => {
        setFilteredData(props.data);
    }, [setFilteredData, props.data])

    const checkboxClickHandler = checked => {
        checked = !checked;
    };

    const renderSemesterOffered = semesterOffered.map((items, idx) => {
        const optionPosition = 4 + idx;
        return (
            <div key={idx}>
                <input type="checkbox" checked={checkboxState[idx]}/>
                <span className="filter-options-description" onClick={() => checkboxClickHandler(idx)}>{items}</span>
            </div>
        );
    });

    const renderExamsAndGrading = examsAndGrading.map((items, idx) => {
        return (
            <div key={idx}>
                <input type="checkbox"/>
                <span className="filter-options-description">{items}</span>
            </div>
        );
    });

    const renderAcademicUnits = academicUnits.map((items, idx) => {
        return (
            <div key={idx}>
                <input type="checkbox"/>
                <span className="filter-options-description">{items}</span>
            </div>
        );
    });

    const renderModuleDays = moduleDays.map((items, idx) => {
        return (
            <div key={idx}>
                <input type="checkbox"/>
                <span className="filter-options-description">{items}</span>
            </div>
        );
    });
    
    const renderOtherOptions = otherOptions.map((items, idx) => {
        return (
            <div key={idx}>
                <input type="checkbox"/>
                <span className="filter-options-description">{items}</span>
            </div>
        );
    });

    return (
        <div className="module-filter_container">
            <div className="title_container">
                <div className="title">
                    Filter results
                </div>
                <div className="clear-selection">
                    Clear
                </div>
            </div>
            <div className="filter-options_container px-2">
                <div className="mb-1">
                    <div className="filter-options_header">
                        Offered in
                    </div>
                    {renderSemesterOffered}
                </div>
                <div className="mb-1">
                    <div className="filter-options_header">
                        Exams & Grading
                    </div>
                    {renderExamsAndGrading}
                </div>
                <div className="mb-1">
                    <div className="filter-options_header">
                        Academic Units
                    </div>
                    {renderAcademicUnits}
                </div>
                <div className="mb-1">
                    <div className="filter-options_header">
                        Module Schedule
                    </div>
                    {renderModuleDays}
                </div>
                <div className="mb-1">
                    <div className="filter-options_header">
                        Others
                    </div>
                    {renderOtherOptions}
                </div>
            </div>
        </div>
    )
};

export default ModuleFilter;