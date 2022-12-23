import { Component } from '@angular/core';

@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrls: ['./lenguajes.component.css']
})
export class LenguajesComponent {

  //lenguajes!:String[];

  lenguajes = ["JavaScript"];

  addLenguajes(lenguaje:String){
    //alert(lenguaje);
    this.lenguajes.push(String(lenguaje));
  }

}
