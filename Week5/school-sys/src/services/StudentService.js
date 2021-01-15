import axios from 'axios';
import { STUDENT_API } from './api';

class StudentService {
    createStudent(student) {
        return axios.post(STUDENT_API, student)
            .then(response => console.log(response))
            .catch(err => { throw err });
    }

    readStudents() {
        return axios.get(STUDENT_API)
            .then(response => response.data)
            .catch(err => { throw err });
    }

    updateStudent(student) {
        return axios.put(STUDENT_API, student)
            .then(response => console.log(response))
            .catch(err => { throw err });
    }

    deleteStudent(id) {
        return axios.delete(`${STUDENT_API}/${id}`)
            .catch(err => { throw err });
    }
}

export default new StudentService();