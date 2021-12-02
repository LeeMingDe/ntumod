import React from "react";

import '../styles/modules/module-timetable-timing.scss';

interface Props {
    isExtendedTiming?: boolean
}

const ModuleTimetableTiming: React.FC<Props> = props => {
    return (
        <div className="timings-container">
            <time>0830</time>
            <time>0930</time>
            <time>1030</time>
            <time>1130</time>
            <time>1230</time>
            <time>1330</time>
            <time>1430</time>
            <time>1530</time>
            <time>1630</time>
            <time>1730</time>
            <time>1830</time>
            {props.isExtendedTiming 
            ? <div>
                <time>1930</time>
                <time>2030</time>
                <time>2130</time>
                <time>2230</time>
                <time>2330</time> 
            </div>
            : null}
        </div>
    );
};

export default ModuleTimetableTiming;