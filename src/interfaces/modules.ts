export interface Workload {
    tut: number,
    lect: number,
    lab: number
}

export interface Module {
    moduleCode: String,
    title: string,
    course: string,
    academicUnits: number,
    category: Array<string>,
    description?: string,

    // Requsites
    prerequisite?: string,
    corequisite?: string,
    preclusion?: string,

    availableFor?: string,
    semesters: Array<String>,
    exam: string,
    workload?: Workload

    // Additional Information
    isLabBased?: boolean,
    isYearLong?: boolean,
    isFinalYearProject?: boolean,
    isPassFail?: boolean,
    isOnline?: boolean
}