import axios from 'axios';
import { STUDENT_API } from './api';

class StudentService {
    readStudent() {
        return axios.get(STUDENT_API)
            .then(response => response.data)
            .catch(err => { throw err });
    }
    deleteStudent(id) {
        return axios.delete(`${STUDENT_API}/${id}`)
            .catch(err => { throw err });
    }
}

export default new StudentService();