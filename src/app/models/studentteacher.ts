import { NumberNull, StudentTeacherNull } from "./customtypes";

export interface studentteacher{
    id: number;
    standard: number;
    teacherID: NumberNull;
    studentID: NumberNull;
    createdAt: Date;
    updatedAt: Date;
}

export class StudentTeacher{
    static StudentTeachers: studentteacher[] = [];

    getStudentTeacherById(id: number): StudentTeacherNull {
        let studentteacher = StudentTeacher.StudentTeachers.find(
            n => n.id == id
        );
        return studentteacher == undefined ? null : studentteacher;
    }

    getStudentTeachers(): StudentTeacherNull[] {
        return StudentTeacher.StudentTeachers;
    }

    addStudentTeacher(studentteacher: studentteacher): void {
        StudentTeacher.StudentTeachers.push(studentteacher);
    }

    updateStudentTeacher(studentteacher: studentteacher): void {
        let index = StudentTeacher.StudentTeachers.findIndex(
            n => n.id == studentteacher.id
        );
        StudentTeacher.StudentTeachers[index].teacherID = studentteacher.teacherID;
        StudentTeacher.StudentTeachers[index].studentID = studentteacher.studentID;
        StudentTeacher.StudentTeachers[index].standard = studentteacher.standard;
        StudentTeacher.StudentTeachers[index].updatedAt = new Date();
    }
}