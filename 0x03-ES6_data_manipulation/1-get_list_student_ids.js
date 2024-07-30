const getListStudentIds = (listStudents) => {
  let listStudentsIds = [];
  if (!(listStudents instanceof Array)) {
    return listStudentsIds;
  }

  listStudentsIds = listStudents.map((student) => student.id);
  return listStudentsIds;
};

export default getListStudentIds;
