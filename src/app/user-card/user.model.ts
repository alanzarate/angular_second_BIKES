export class User{
    name: string;
    designation: string;
    address: string;
    image: string;
    phone: string[];

    constructor(name:string, designation: string, address:string, image:string, phone:string[]){
        this.name = name;
        this.designation = designation;
        this.address = address;
        this.image = image;
        this.phone = phone;
    }

}