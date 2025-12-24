import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {

    private students=[
        {id:1,name:'ramya',age:23},
        {id:2,name:'neha',age:20},
        {id:3,name:'vidya',age:22},
        {id:4,name:'komal',age:23},
        {id:5,name:'bhanu',age:21}
    ]

    getAllStudents(){
        return this.students;
    }

    getStudentById(id:number){
        const std=this.students.find(s=>s.id===id);
        if(!std) throw new NotFoundException('Student Not Found!!');
        return std;
    }
    //post 

    createStudent(data:{name:string,age:number}){
        if(!data) throw new BadRequestException('Please provide student data');
        const newStudent={
            id:Date.now(),
            ...data
        }
        this.students.push(newStudent);
        return newStudent;
    }

    //put
    updateStudent(id:number,data:{name:string,age:number}){
        if(!data) throw new BadRequestException('Please provide student data');
        const index=this.students.findIndex(s=>s.id===id);
        if(index==-1) throw new NotFoundException('Student Not Found');
        this.students[index]={id,...data};
        return this.students[index];
    }

    //patch

    patchStudent(id:number,data:Partial<{name:string,age:number}>){
        if(!data) throw new BadRequestException('Please provide student data');
        const student=this.getStudentById(id);
        Object.assign(student,data);
        return student; 

    }

    //Delete

    deleteStudent(id:number){
        const index=this.students.findIndex(s=>s.id===id);
        if(index==-1) throw new NotFoundException('Student Not Found');
        const deleted=this.students.splice(index,1);
        return {msg:'Student Deleted SuccessFully',student:deleted[0]}
    }



}
