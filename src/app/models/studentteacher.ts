import { NumberNull } from "./customtypes";

interface studentteacher{
    id: number;
    standard: number;
    teacherID: NumberNull;
    studentID: NumberNull;
    createdAt: Date;
    updatedAt: Date;
}

export class StudentTeacher{
    static StudentTeachers: studentteacher[] = [];

    isStudentAccepted(studentID: number): boolean{
        let studentTeacher = StudentTeacher.StudentTeachers.find(st => st.studentID === studentID);
        if(studentTeacher){
            return true;
        }
        return false;
    }

     isTeacherAssigned(teacherID: number): boolean{
        let studentTeacher = StudentTeacher.StudentTeachers.find(st => st.teacherID === teacherID);
        if(studentTeacher){
            return true;
        }
        return false;
    }

     getTeacherByStandard(standard: number): number{
        return StudentTeacher.StudentTeachers.find(st => st.standard === standard)?.teacherID!;
    }

     acceptStudent(studentID: number,standard:number): boolean{
        if(!this.isStudentAccepted(studentID) && this.isTeacherAssigned(standard)){
            let studentTeacher = {
                id: StudentTeacher.StudentTeachers.length + 1,
                standard: standard,
                teacherID: this.getTeacherByStandard(standard),
                studentID: studentID,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            StudentTeacher.StudentTeachers.push(studentTeacher);
            return true;
        }
        return false;
    }

     assignTeacher(teacherID: number,standard:number): boolean{
        if(!this.isTeacherAssigned(teacherID) ){
            let studentTeacher = {
                id: StudentTeacher.StudentTeachers.length + 1,
                standard: standard,
                teacherID: teacherID,
                studentID: null,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            StudentTeacher.StudentTeachers.push(studentTeacher);
            return true;
        }
        return false;
    }
}