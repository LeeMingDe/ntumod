import React, { useCallback, useEffect, useState } from "react";

import '../styles/modules/module-timetable-row.scss';
import { getStartIndex, getSlotDuration } from "../utils/Utils";
import ModuleTimeTableCell from "./ModuleTimetableCell";

interface Props {
    timetable: object
    hasSaturday?: boolean
    isExtendedTiming?: boolean
}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const ModuleTimetableRow: React.FC<Props> = props => {
    const [daysArray, setDaysArray] = useState([...Array(6)].map(e => Array(0)))
    const forceUpdate: () => void = useCallback(useState()[1].bind(null, {}) , [])

    const populateDaysArray = useCallback((dayDetails, key, idx) => {
        setDaysArray(prevState => {
            const timings = dayDetails.details.split(';').filter(e => e)
            for (let j = 0; j < timings.length; j++) {
                prevState[idx].push({
                    ...dayDetails,
                    details: timings[j],
                    index: key
                })
            }
            return prevState
        })
    }, [])

    const slotIntoDifferentDays = useCallback((dayDetails, key) => {
        switch (dayDetails.day) {
            case ("MON"):
                populateDaysArray(dayDetails, key, 0);
                break;
            case ("TUE"):
                populateDaysArray(dayDetails, key, 1);
                break;
            case ("WED"):
                populateDaysArray(dayDetails, key, 2);
                break;
            case ("THU"):
                populateDaysArray(dayDetails, key, 3);
                break;
            case ("FRI"):
                populateDaysArray(dayDetails, key, 4);
                break;
            case ("SAT"):
                populateDaysArray(dayDetails, key, 5);
                break;
            default:
        }
    }, [populateDaysArray])
    
    const renderDayTimetable = useCallback((index) => {
        let displayTimeslot = [...Array(11)].map(e => Array(0));
        if (props.isExtendedTiming) {
            displayTimeslot = [...Array(15)].map(e => Array(0));
        }
        for (let x = 0; x < daysArray[index].length; x++) {
            const startIndex = getStartIndex(daysArray[index][x].details);
            displayTimeslot[startIndex + 1].push(daysArray[index][x])
        }
        const dayDisplay = displayTimeslot.map((timeslots, indx)=> {
            if (indx === 0) {
                return <div className="timetable-row-header" key={indx}>
                    {days[index]}
                </div>
            }
            if (timeslots.length === 0) {
                return <div key={indx} className="timetable-col"/>
            }
            return timeslots.map((timeslotInfo, idx) =>
                <ModuleTimeTableCell
                    key={idx}
                    isClickable={false}
                    index={timeslotInfo.index}
                    details={timeslotInfo.details}
                    duration={getSlotDuration(timeslotInfo.details)}
                />)
        })
        return dayDisplay;
    }, [daysArray, props.isExtendedTiming])

    useEffect(() => {
        for (const key in props.timetable) {
            for (let i = 0; i < props.timetable[key].length; i++) {
                const dayDetails = props.timetable[key][i];
                slotIntoDifferentDays(dayDetails, key);
            }
        }
        forceUpdate()
    }, [forceUpdate, props.timetable, slotIntoDifferentDays])

    return (
        <React.Fragment>
            <div className="timetable-row-container">
                {renderDayTimetable(0)}
            </div>
            <div className="timetable-row-container">
                {renderDayTimetable(1)}
            </div>
            <div className="timetable-row-container">
                {renderDayTimetable(2)}
            </div>
            <div className="timetable-row-container">
                {renderDayTimetable(3)}
            </div>
            <div className="timetable-row-container">
                {renderDayTimetable(4)}
            </div>
        </React.Fragment>
    )
};

export default ModuleTimetableRow;