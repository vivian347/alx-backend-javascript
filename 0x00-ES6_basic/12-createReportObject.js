export default function createReportObject(employeesList) {
    let allEmployees;
    return {
        allEmployees: {
            ...employeesList
        },
        getNumberOfDepartments() {
            return Object.keys(employeesList).length;
        }
    };
}
