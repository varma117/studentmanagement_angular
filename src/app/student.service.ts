import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

const Base_URL =  "http://localhost:8089/savestudent";
const Geturl ="http://localhost:8089/getall";
const Delurl ="http://localhost:8089/deletestudent/{13}";


@Injectable({
    providedIn: 'root'
  })

  export class StudentService{
    getStudent(){
      return this.http.get(Geturl);
    }
      saveStudent(student:{
        firstName:string;
        lastName:string;
        className:string;
        subject:string;
        
      }){
          return this.http.post(Base_URL,student);
      }
      constructor(public http: HttpClient){

    }

      

  }