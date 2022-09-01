import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  testName:string;
  constructor() { }

  ngOnInit(): void {
    this.testName=sessionStorage.getItem("testName");
    console.log(this.testName);
  }



}
