const getStudentsIdsSum = (students) => students.reduce((preVal, cur) => preVal + cur.id, 0);
export default getStudentsIdsSum;
