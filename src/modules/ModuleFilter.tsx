import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Module } from '../interfaces/modules';

import '../styles/modules/module-filter.scss';

interface Props {
    data: Array<Module>
}

const semesterOffered = ["Semester 1", "Semester 2", "Special Term I", "Special Term II"]

const ModuleFilter: React.FC<Props> = props => {
    const [filteredData, setFilteredData] = useState<Array<Module>>([]);

    useEffect(() => {
        setFilteredData(props.data);
    }, [setFilteredData, props.data])

    const renderSemesterOffered = semesterOffered.map((items, idx) => {
        return (
            <div>
                <input type="checkbox"/>{items}
            </div>
        );
    })

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
            <div className="filter-options_container">
                <div className="semester-offered">
                    <b>Offered in</b>
                    {renderSemesterOffered}
                </div>
            </div>
        </div>
    )
};

export default ModuleFilter;