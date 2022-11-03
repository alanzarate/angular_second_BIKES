import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card.model';
 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: any;
  @Input('card') cardObj!: Card;
  constructor() { 
     
  }

  ngOnInit(): void {
    this.card = {
      title: this.cardObj.title,
      description: this.cardObj.description,
      releaseDate: this.cardObj.releaseDate,
      oldPrice: this.cardObj.oldPrice,
      currentPrice: this.cardObj.currentPrice,
      brand: this.cardObj.brand,
      image: this.cardObj.image
    }
  }

}
