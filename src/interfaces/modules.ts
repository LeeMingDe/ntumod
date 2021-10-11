export interface Workload {
    tutorial: number,
    lecture: number,
    lab: number
}

export interface Module {
    moduleCode: String,
    moduleName: string,
    programme?: Array<String>,
    faculty?: string,
    au?: number,
    category?: Array<string>,
    description?: string,

    // Requisites
    prerequisite?: string,
    preclusion?: string,
    prerequisiteFor?: string,

    notAvailableFor?: string,
    notAvailableToProgramme?: string,
    // semesters?: Array<String>,
    exam?: string,
    workload?: Workload

    // Additional Information
    isLabBased?: boolean,
    isMinor?: boolean,
    // isYearLong?: boolean,
    // isFinalYearProject?: boolean,
    isPassFail?: boolean,
    isOnline?: boolean
}