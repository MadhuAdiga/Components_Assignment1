import { Injectable } from '@angular/core'; //Import injectable from angular

@Injectable()//Use the decorator for the service
export class AppServices{ //Export a class AppServices
    getData(){ //Define a function getData which returns the array of objects
        return [ //Return the array
            {"name":"Angelina Pickles", "address":"4221 Marie Street, Towson, MD 21204"},
            {"name":"Donald Duck", "address":"3594 Brookside Drive, Birmingham, AL 35203"},
            {"name":"Lola Bunny", "address":"1907 Sardis Sta, Fort Worth, TX 76147"},
            {"name":"Uncle Scrooge", "address":"4210 Anmoore Road, New York, NY 10011"}
    ]
    }
}
