export class Card{
    title: string;
    description: string;
    releaseDate: string;
    oldPrice: number;
    currentPrice: number;
    brand: string;
    image: string;

    constructor( title: string,
        description: string,
        releaseDate: string,
        oldPrice: number,
        currentPrice: number,
        brand: string,
        image: string){
        
            this.title = title;
            this.description = description;
            this.releaseDate = releaseDate;
            this.oldPrice =oldPrice;
            this.currentPrice = currentPrice;
            this.brand = brand;
            this.image = image;

    }
    


}