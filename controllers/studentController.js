let students = [
    {
      "id": 1,
      "name": "John Doe",
      "age": 20,
      "grade": "A"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 22,
      "grade": "B"
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "age": 21,
      "grade": "A+"
    }
  ];  

const getAllStudents = (req, res) => {
    res.json(students);
}

const getStudentById = (req, res) => {
    const id = req.params.id;
    const student = students.find(student => student.id === parseInt(id));
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
}

const createStudent = (req, res) => {
    const student = req.body;
    students.push(student);
    res.status(201).json(student);
}

const updateStudent = (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    let student = students.find(student => student.id === parseInt(id));
    if (student) {
        Object.assign(student, updatedData);
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
}

const deleteStudent = (req, res) => {
    const id = req.params.id;
    students = students.filter(student => student.id !== parseInt(id));
    res.json({ message: 'Student deleted successfully' });
}

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};
