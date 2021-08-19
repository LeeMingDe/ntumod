import { Module } from "../interfaces/modules";
//Remove when database is integrated.
export const semesterFilterPredicate = [
    (module: Module) => module.semesters.includes("Semester 1"),
    (module: Module) => module.semesters.includes("Semester 2"),
    (module: Module) => module.semesters.includes("Special Term 1"),
    (module: Module) => module.semesters.includes("Special Term 2")
];

export const examsFilterPredicate = [
    (module: Module) => module.exam === "No Exam",
    (module: Module) => module.isPassFail !== undefined
];

export const academicUnitsFilterPredicate = [
    (module: Module) => module.academicUnits <= 2,
    (module: Module) => module.academicUnits === 3,
    (module: Module) => module.academicUnits === 4,
    (module: Module) => module.academicUnits >= 5,
];

export const moduleDaysFilterPredicate = [
    (module: Module) => module.academicUnits <= 2,
    (module: Module) => module.academicUnits === 3,
    (module: Module) => module.academicUnits === 4,
    (module: Module) => module.academicUnits >= 5,
    (module: Module) => module.academicUnits >= 5,
    (module: Module) => module.academicUnits >= 5,
];

export const othersFilterPredicate = [
    (module: Module) => module.isLabBased !== undefined,
    (module: Module) => module.isYearLong !== undefined,
    (module: Module) => module.isFinalYearProject !== undefined,
    (module: Module) => module.isOnline !== undefined,
];