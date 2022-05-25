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
  ngOnInit(): void {
  }
}


