export default function createIteratorObject(report) {
    let allEmployees = [];
    for (let item of Object.values(report.allEmployees)) {
        allEmployees = [
            ...allEmployees,
            ...item,
        ];
    }
    return allEmployees;
}