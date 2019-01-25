import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-company',
  templateUrl: './choose-company.component.html',
  styleUrls: ['./choose-company.component.css']
})
export class ChooseCompanyComponent implements OnInit {

  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  addNextPage(){
    console.log("Przeskok do nastepnej strony!!!"); 
    this.router.navigate(['/profile']);
  }

}
