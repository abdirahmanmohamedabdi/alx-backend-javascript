export default function createReportObject(employeesList) {
  return {
    allemployees: { ...employeesList },
    getNumberOfDepartments(list) {
      return Object.keys(list).length;
    },
  };
}
