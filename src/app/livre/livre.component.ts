import { Component, OnInit } from '@angular/core';
import { Livre } from '../@core/model/livre';
import { Books } from './books';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.scss']
})
export class LivreComponent implements OnInit {
 Books : Livre[] = Books;
 myValue:string="";
  ngOnInit(): void {
  }
  removebook(booktoremove:Livre){
    booktoremove.isDeleted=false;
  }
  incrementNbLike(book:Livre){
    book.nbLike++;
  }
  showComment(book:Livre){
    book.clickComment=!book.clickComment;
  }
  takevalue(com:string){
    this.myValue=com;
  }
  sendComment(book:Livre){
    book.comment.push(this.myValue);
    this.myValue="";
  }


}



