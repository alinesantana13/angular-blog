import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';
import { dataInterface } from '../../interface/dataInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  listData: dataInterface[] = dataFake;

  constructor(){}


  ngOnInit(): void {
  }
}
