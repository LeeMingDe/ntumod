export interface Workload {
    tut: number,
    lect: number,
    lab: number
}

export interface Module {
    moduleCode: String,
    title: string,
    course?: string,
    faculty?: string,
    academicUnits?: number,
    category?: Array<string>,
    description?: string,

    // Requisites
    prerequisite?: string,
    corequisite?: string,
    preclusion?: string,
    prerequisiteFor?: string,

    availableFor?: string,
    semesters?: Array<String>,
    exam?: string,
    workload?: Workload

    // Additional Information
    isLabBased?: boolean,
    isYearLong?: boolean,
    isFinalYearProject?: boolean,
    isPassFail?: boolean,
    isOnline?: boolean
}