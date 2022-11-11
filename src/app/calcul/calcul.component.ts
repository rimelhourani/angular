import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
nbr1!:number
nbr2!:number
result:number=0

  constructor() { }

  ngOnInit(): void {
  }
sommes(){
this.result=this.nbr1+this.nbr2
}
soustractions(){
  this.result=this.nbr1-this.nbr2
  }

  divisions(){
    this.result=this.nbr1/this.nbr2
    }
    multiplications()
     {
    this.result=this.nbr1*this.nbr2
     }

}
