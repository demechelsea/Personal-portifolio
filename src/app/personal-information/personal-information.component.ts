import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  myData: String[][] = [
    ["Name", " Dame Tilahun"],
    ["DOB", " 04/01/1998"],
    ["Work exp", "4 years"],
    ["Education", "Bsc in CSE"],
    ["Interests", "Playing chess"],
  ];

  aboutMe:string[] = [
  'Coding on Angular 12+ and dreaming on Angular 12+.',
  'Helping companies to build web applications serving 10,000,000+ users with Angular and Django.Developed an interest in Python, Angular 12+, Spring Boot, HTML5, CSS3, and JavaScript.Resilient to challenges, willing to go above and beyond to find solutions.',
  'Computer Science and Engineering graduate with a CGPA of (3.72/4.0) from Adama Science and Technology University.'];
  constructor(){}

  ngOnInit():void{}
}
