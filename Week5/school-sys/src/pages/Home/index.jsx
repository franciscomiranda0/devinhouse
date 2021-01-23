import React from 'react';
import { Entry } from '../../components/Entry';
import { List } from '../../components/List';
import StudentService from '../../services/StudentService';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentListData: [],
            student: EMPTY_STUDENT
        }
        this.editStateStudent = this.editStateStudent.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.setStudentProperties = this.setStudentProperties.bind(this);
    }

    componentDidMount() {
        this.loadStudentListData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.student === prevState.student) return;
    }

    editStateStudent(entry) {
        entry != undefined ?
            this.setState({ student: entry }) :
            this.setState({ student: EMPTY_STUDENT });
    }

    handleCreate() {
        StudentService
            .createStudent(this.state.student)
            .then(() => {
                this.loadStudentListData()
            })
            .catch(err => console.error(err));
    }

    handleDelete(entry) {
        StudentService
            .deleteStudent(entry.id)
            .then(() => this.loadStudentListData())
            .catch(err => console.error(err));
    }

    handleSave() {
        this.state.student.id > 0 ? this.handleUpdate() : this.handleCreate();
    }

    handleUpdate() {
        StudentService
            .updateStudent(this.state.student)
            .then(() => this.loadStudentListData())
            .catch(err => console.error(err));
    }

    loadStudentListData() {
        StudentService
            .readStudents()
            .then(response => {
                console.log(response);
                this.setState({ studentListData: response });
            })
            .catch(err => console.error(err));
    }

    setStudentProperties(property, value) {
        this.setState({ student: { ...this.state.student, [property]: value } })
    }

    render() {
        return (
            <div
                className={'home__root'}>
                <header
                    className={'home__header'}>
                    <h1>AmorinhaSys</h1>
                </header>
                <Entry
                    clear={this.editStateStudent}
                    student={this.state.student}
                    save={this.handleSave}
                    setStudentProperty={this.setStudentProperties} />
                <List
                    data={this.state.studentListData}
                    edit={this.editStateStudent}
                    erase={this.handleDelete} />
            </div>
        )
    }
}

const EMPTY_STUDENT = {
    name: '',
    birthDate: '',
    grade: '',
    guardianName: '',
    guardianPhone: '',
    emergencyName: '',
    emergencyPhone: '',
    foodRestriction: '',
    foodRestrictionDescription: '',
    allowMedia: '',
    pickupAuthorizedPersonel: '',
    additionalNote: ''
}
