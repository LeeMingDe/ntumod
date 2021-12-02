import React from "react";

import '../styles/modules/module-details-timetable.scss'

import ModuleTimetableRow from "./ModuleTimetableRow";
import ModuleTimetableTiming from "./ModuleTimetableTiming";

interface Props {
    timetable: object
    hasSaturday?: boolean
    isExtendedTiming?: boolean
}

const ModuleDetailsTimetable: React.FC<Props> = props => {
    return (
        <div>
            <ModuleTimetableTiming isExtendedTiming={props.isExtendedTiming}/>
            <div className="timetable">
                <ModuleTimetableRow
                    timetable={props.timetable}
                    hasSaturday={props.hasSaturday}
                    isExtendedTiming={props.isExtendedTiming}
                />
            </div>
        </div>
    )
};

export default ModuleDetailsTimetable;