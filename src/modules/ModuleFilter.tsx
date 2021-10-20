import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import FacultyData from '../data/FacultyData';
import ProgrammeData from '../data/ProgrammeData';

import '../styles/modules/module-filter.scss';

const customStyles = {
    control: (provided) => ({
        ...provided,
        cursor: "text",
        border: "none",
        backgroundColor: "#EBECFE",
        borderRadius: "0",
        boxShadow: "none",
        borderBottom: "1px solid black",
        "&:hover": {
            color: "#373c45"
        }
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: "#000",
        cursor: "pointer",
        "&:hover": {
            color: "#525966"
        }
    }),
    clearIndicator: (provided) => ({
        ...provided,
        display: "none"
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display:"none"
    }),
    placeholder: (provided) => {
        return {
            ...provided,
            fontSize:"0.83rem",
        }
    },
    multiValue: (provided) => ({
        ...provided,
        backgroundColor: "#FFF",
      }),
    multiValueLabel: (provided) => ({
        ...provided,
        color: "#181C62",
        cursor: "default",
    }),
    multiValueRemove: (provided) => ({
        ...provided,
        cursor: "pointer",
        color: "#181C62",
        ':hover': {
            backgroundColor: "#181C62",
            color: 'white',
        }
    })
}

interface Props {
    setParams: React.Dispatch<React.SetStateAction<URLSearchParams>>
}

interface Options {
    value: String,
    label: String,
    faculty?: Array<String>
}

const semesterOffered = ["Semester 1", "Semester 2", "Special Term I", "Special Term II"];
const examsAndGrading = ["No Exams", "Pass/Fail"];
const academicUnits = ["0 to 1 Aus", "2 AUs", "3 AUs", "4 AUs", "5 AUs and above"];
const moduleDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday/Sunday"];
const otherOptions = ["Lab-based module", "Online module"];

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

    const [programmeOptions, setProgrammeOptions] = useState<Array<Options>>(ProgrammeData);
    const [facultiesSelected, setFacultiesSelected] = useState<Array<Options>>([]);
    const [programmesSelected, setProgrammesSelected] = useState<Array<Options>>([]);
    
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
                params.append(`schedule[${counter}]`, `${moduleDays[i].slice(0,3).toUpperCase()}`);
            }
        }
        counter = 0;
        for (let i = 0; i < facultiesSelected.length; i++) {
            params.append(`fac[${counter}]`, `${facultiesSelected[i].value}`);
        }
        counter = 0;
        for (let i = 0; i < programmesSelected.length; i++) {
            params.append(`prog[${counter}]`, `${programmesSelected[i].value}`);
        }
        if (otherOptionsCheckbox[0]) {
            params.append("isLabBased", "true");
        }
        if (otherOptionsCheckbox[1]) {
            params.append("isOnline", "true");
        }
        setParams(params)
    }, [setParams, semesterOfferedCheckbox, examsAndGradingCheckbox, academicUnitsCheckbox, moduleDaysCheckbox, facultiesSelected, programmesSelected, otherOptionsCheckbox]);

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

    const facultySelectChangeHandler = (options) => {
        setFacultiesSelected(options)
        if (options.length === 0) {
            setProgrammeOptions(ProgrammeData);
            return
        }
        setProgrammeOptions(ProgrammeData.filter(data => {
            for (let i = 0; i < options.length; i++) {
                if (data.faculty.includes(options[i].value)) {
                    return true;
                }
            }
            return false;
        }));
    }

    const programmeSelectChangeHandler = (options) => {
        setProgrammesSelected(options);
    }

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
                    <Select
                        placeholder="Search/select faculty(s)"
                        isMulti={true}
                        styles={customStyles}
                        options={FacultyData}
                        onChange={facultySelectChangeHandler}
                    />
                </div>
                <div className="mb-1">
                    <div className="filter-options-header">
                        Programme
                    </div>
                    <Select
                        placeholder="Search/select programmes"
                        isMulti={true}
                        styles={customStyles}
                        options={programmeOptions}
                        onChange={programmeSelectChangeHandler}
                    />
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