import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import Student from 'src/app/entity/Student'

@Component({
  selector: 'app-savestudent',
  templateUrl: './savestudent.component.html',
  styleUrls: ['./savestudent.component.css']
})
export class SavestudentComponent implements OnInit {
student: Student = new Student();
students: Student[] = [];

save(){
  const observable = this.studentService.saveStudent(this.studentDetails)
  observable.subscribe(
    (response: any)=>{
      console.log(response);
     
    },
    function(error){
      console.log(error);
      alert("something went wrong please check ")
    }
  ) 
  
}
getStudents(){
  const observable = this.studentService.getStudent()
  observable.subscribe(
    (response: any)=>{
      console.log(response);
      this.students = response as Student[];
    },
    function(error){
      console.log(error);
      alert("something went wrong please check ")
    }
  ) 
  
}
studentDetails = {
  firstName:"",
  lastName:"",
  className:"",
  subject:"",
 
}

  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
    const promise = this.studentService.getStudent()
    promise.subscribe((response) => {
      console.log(response);
      this.students = response as Student[];
      
    })

  }

}
