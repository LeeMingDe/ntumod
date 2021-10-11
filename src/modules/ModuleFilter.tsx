import React, { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import '../styles/modules/module-filter.scss';

interface Props {
    setParams: React.Dispatch<React.SetStateAction<URLSearchParams>>
}

const semesterOffered = ["Semester 1", "Semester 2", "Special Term I", "Special Term II"];
const examsAndGrading = ["No Exams", "Pass/Fail"];
const academicUnits = ["0 to 1 Aus", "2 AUs", "3 AUs", "4 AUs", "5 AUs and above"];
const moduleDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday/Sunday"];
const otherOptions = ["Lab-based module", "Online module"];
// const filterDescriptions = semesterOffered.concat(examsAndGrading, academicUnits, moduleDays, otherOptions);

const semesterOfferedDefaultCheckbox = Array(semesterOffered.length).fill(false);
const examsAndGradingDefaultCheckbox = Array(examsAndGrading.length).fill(false);
const academicUnitsDefaultCheckbox = Array(academicUnits.length).fill(false);
const moduleDaysDefaultCheckbox = Array(moduleDays.length).fill(false);
const otherOptionsDefaultCheckbox = Array(otherOptions.length).fill(false);

const ModuleFilter: React.FC<Props> = props => {
    const { setParams } = props

    const [semesterOfferedCheckbox, setSemesterOfferedCheckbox] = useState<Array<boolean>>(semesterOfferedDefaultCheckbox);
    const [examsAndGradingCheckbox, setExamsAndGradingCheckbox] = useState<Array<boolean>>(examsAndGradingDefaultCheckbox);
    const [academicUnitsCheckbox, setAcademicUnitsCheckbox] = useState<Array<boolean>>(academicUnitsDefaultCheckbox);
    const [moduleDaysCheckbox, setModuleDaysCheckbox] = useState<Array<boolean>>(moduleDaysDefaultCheckbox);
    const [otherOptionsCheckbox, setOtherOptionsCheckbox] = useState<Array<boolean>>(otherOptionsDefaultCheckbox);
    
    useEffect(()=> {
        let params = new URLSearchParams();
        let counter = 0;
        for (let i = 0; i < semesterOfferedCheckbox.length; i++) {
            if (semesterOfferedCheckbox[i]) {
                params.append(`sem[${counter}]`, `${i}`);
            }
        }
        if (examsAndGradingCheckbox[0]) {
            params.append("exam", "true");        
        }
        if (examsAndGradingCheckbox[1]) {
            params.append("isPassFail", "true");        
        }
        counter = 0;
        for (let i = 0; i < academicUnitsCheckbox.length; i++) {
            if (academicUnitsCheckbox[i]) {
                params.append(`au[${counter}]`, `${i}`);
            }
        }
        counter = 0;
        for (let i = 0; i < moduleDaysCheckbox.length; i++) {
            if (moduleDaysCheckbox[i]) {
                params.append(`schedule[${counter}]`, `${i}`);
            }
        }
        if (otherOptionsCheckbox[0]) {
            params.append("isLabBased", "true");
        }
        if (otherOptionsCheckbox[1]) {
            params.append("isOnline", "true");
        }
        setParams(params)
    }, [setParams, semesterOfferedCheckbox, examsAndGradingCheckbox, academicUnitsCheckbox, moduleDaysCheckbox, otherOptionsCheckbox]);

    const clearFilterOptionsHandler = () => {
        setSemesterOfferedCheckbox(Array(semesterOffered.length).fill(false))
        setExamsAndGradingCheckbox(Array(examsAndGrading.length).fill(false))
        setAcademicUnitsCheckbox(Array(academicUnits.length).fill(false))
        setModuleDaysCheckbox(Array(moduleDays.length).fill(false))
        setOtherOptionsCheckbox(Array(otherOptions.length).fill(false))
    }

    const checkboxChangeHandler = (idx, setCheckboxState) => {
        setCheckboxState(prevState => {
            prevState= prevState.slice()
            prevState[idx] = !prevState[idx]
            return prevState
        })
        // console.log(semesterOfferedCheckbox)

        // console.log(academicUnitsCheckbox)
        // console.log(moduleDaysCheckbox)
        // console.log(otherOptionsCheckbox)
    };

    const renderSemesterOffered = semesterOffered.map((items, idx) => {
        const filterOption = <div key={idx}>
            <label className="filter-options-wrapper">
                <input
                    type="checkbox"
                    onChange={() => checkboxChangeHandler(idx, setSemesterOfferedCheckbox)}
                /> 
                <span className="filter-options-description">{items}</span>
            </label>
        </div>
        return filterOption;
    });
    const renderExamsAndGrading = examsAndGrading.map((items, idx) => {
        const filterOption = <div key={idx}>
            <label className="filter-options-wrapper">
                <input
                    type="checkbox"
                    onChange={() => checkboxChangeHandler(idx, setExamsAndGradingCheckbox)}
                /> 
                <span className="filter-options-description">{items}</span>
            </label>
        </div>
        return filterOption;
    });
    const renderAcademicUnits = academicUnits.map((items, idx) => {
        const filterOption = <div key={idx}>
            <label className="filter-options-wrapper">
                <input
                    type="checkbox"
                    onChange={() => checkboxChangeHandler(idx, setAcademicUnitsCheckbox)}
                /> 
                <span className="filter-options-description">{items}</span>
            </label>
        </div>
        return filterOption;
    });
    const renderModuleDays = moduleDays.map((items, idx) => {
        const filterOption = <div key={idx}>
            <label className="filter-options-wrapper">
                <input
                    type="checkbox"
                    onChange={() => checkboxChangeHandler(idx, setModuleDaysCheckbox)}
                /> 
                <span className="filter-options-description">{items}</span>
            </label>
        </div>
        return filterOption;
    });
    const renderOtherOptions = otherOptions.map((items, idx) => {
        const filterOption = <div key={idx}>
            <label className="filter-options-wrapper">
                <input
                    type="checkbox"
                    onChange={() => checkboxChangeHandler(idx, setOtherOptionsCheckbox)}
                /> 
                <span className="filter-options-description">{items}</span>
            </label>
        </div>
        return filterOption;
    });
    
    // const renderSemesterOffered = renderFilterDescription.slice(0, firstPartLength);
    // const renderExamsAndGrading = renderFilterDescription.slice(firstPartLength, secondPartLength);
    // const renderAcademicUnits = renderFilterDescription.slice(secondPartLength, thirdPartLength);
    // const renderModuleDays = renderFilterDescription.slice(thirdPartLength, fourthPartLength);
    // const renderOtherOptions = renderFilterDescription.slice(fourthPartLength, fifthPartLength);

    return (
        <div className="module-filter-container">
            <div className="title-container">
                <div className="title">
                    Filter results
                </div>
                <div className="clear-selection" onClick={clearFilterOptionsHandler}>
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