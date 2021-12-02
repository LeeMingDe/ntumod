const timings = {
    "0830": 0,
    "0930": 1,
    "1030": 2,
    "1130": 3,
    "1230": 4,
    "1330": 5,
    "1430": 6,
    "1530": 7,
    "1630": 8,
    "1730": 9,
    "1830": 10,
    "1930": 11,
    "2030": 12,
    "2130": 13,
    "2230": 14,
}

const getSlotTiming = (slotDetails: string) => {
    const detailsArr = slotDetails.split(" ");
    for (let i = 0; i < detailsArr.length; i++) {
        if (detailsArr[i].includes("to")) {
            const timing = detailsArr[i].split("to")
            const paddedTime = ((parseInt(timing[1].slice(0, -1)) + 1) * 10).toString();
            timing[1] = paddedTime
            return timing;
        }
    }
};

const getIndex = (timingDetails: string) => {
    return timings[timingDetails]
}

export const getStartIndex = (slotDetails: string) => {
    return getIndex(getSlotTiming(slotDetails)[0]);
}

export const getSlotDuration = (slotDetails: string) => {
    return getIndex(getSlotTiming(slotDetails)[1]) - getIndex(getSlotTiming(slotDetails)[0])
}