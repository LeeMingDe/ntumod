export interface Workload {
    tut: number,
    lect: number,
    lab: number
}

export interface Module {
    moduleCode: String,
    title: string,
    course: string,
    moduleCredit: string,
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
}