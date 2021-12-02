import React from "react";

import '../styles/modules/ModuleTimetableCell.scss';

interface Props {
    isClickable: boolean,
    index: string,
    details: string,
    duration: number
}

const ModuleTimeTableCell:React.FC<Props> = props => {
    return (
        <div className={`cell-container width-${props.duration}`}>
            <div>
                {props.index}
            </div>
            <div>
                {props.details}
            </div>
        </div>
    )
};

export default ModuleTimeTableCell;