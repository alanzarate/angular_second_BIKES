import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card.model';
import { User } from '../user-card/user.model';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
   
  cards : Card[] = [];
 
  constructor() {
     
    this.cards.push(new Card('YAMAHA 1','Bonita motocileta 1','Marzo, 2020',23000,22000,'YAMAHA','https://mlkch9cx3k8h.i.optimole.com/6jalo90-nB48gAxR/w:161/h:140/q:80/https://hondabolivia.com/motos/wp-content/uploads/2020/02/CB-125-TWISTER-1.jpg'));
    this.cards.push(new Card('SUZUKI 1','Bonita motocileta 2','Marzo, 2021',22000,20000,'YAMAHA','https://sur-trading.com/wp-content/uploads/2021/01/cb160f-slider-rev.png'));
    this.cards.push(new Card('HONDA 1','Bonita motocileta 3','Marzo, 2020',0,21000,'YAMAHA','https://media.revistagq.com/photos/61cdd0f759ab05088d9a51c7/master/w_1600%2Cc_limit/6BDB4FF4-A0E9-4CB4-9BAE-97206B7AD05E.jpeg'));
    this.cards.push(new Card('KAWASAKI 1','Bonita motocileta 4','Abril, 2020',24000,22000,'YAMAHA','https://i.ytimg.com/vi/o4IfP3BMEx0/maxresdefault.jpg'));
    this.cards.push(new Card('BMW 1','Bonita motocileta 5','Mayo, 2020',24000,23000,'YAMAHA','https://suzuki-motos.s3.amazonaws.com/assets/prod-publish/8726/gsx-r1000a.png'));
    this.cards.push(new Card('DUKATI 1','Bonita motocileta 6','Junio, 2020',24500,24000,'YAMAHA','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF-4WTIBOkspdmcILdaNxVoFRUlaqX7H8R0PQdJpMJ6gs2JJV8JtNy9-MwMighrXp8Ols&usqp=CAU'));
    this.cards.push(new Card('TRIUMPH 1','Bonita motocileta 7','Julio, 2020',0,25000,'YAMAHA','https://i.pinimg.com/originals/f3/1f/48/f31f48f312c99d4fcd35444ee1aafe49.jpg'));
    this.cards.push(new Card('INDIAN MOTORS 1','Bonita motocileta 8','Agosto, 2020',0,26000,'YAMAHA','https://i.pinimg.com/736x/9b/9c/5e/9b9c5e25d4c78c8451606507f9515ada.jpg'));
     

   }

  ngOnInit(): void {

  }

}
