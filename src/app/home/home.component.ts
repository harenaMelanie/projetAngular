import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 
   home!:string;
   about!:string;
   livre!:string;
   blog!:string;
   contact!:string;

  ngOnInit(): void {
    this.home='Home';
    this.about='About';
    this.livre='Livres';
    this.blog='Blog';
    this.contact='Contact';
  }

}
