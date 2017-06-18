import { Component, OnInit } from '@angular/core'; //Import Component and ngOnInit dependenicies
import { AppServices } from './app.services'; // Import AppService 



@Component({
  selector: 'my-app',
  template: `<div class="container container-fluid">

             <h4>On click of the button, a modal component opens with data fetched by AppServices</h4><br><br>
                <div *ngFor="let x of cartoons"><!-- Iterate through the array of cartoons   -->
                    <button class = "btn btn-block btn-primary"  data-toggle="modal" data-target="#myModal" (click)="updateCartoon(x.name,x.address)">{{x.name}}</button><!-- On click open the modal and also update the currently selected cartoon   -->
                    <child [childId]="name" [childAddress]="address"></child><!-- Pass the parent parameters to the child component  -->
                </div>
                
             </div>`,
  
})



export class AppComponent implements OnInit { // Export a class AppComponent 
        cartoons=[{}] ; //Declare an array of objects
        constructor(private _appServives : AppServices){} //Declare a private variable of the type AppServices
        name:string;//Declare variable
        address:string;//Declare variable
        ngOnInit(){
            this.cartoons = this._appServives.getData() //Run OnInit which assigns the variable to the data fetched by the getData function of the AppServices
        
        }
        updateCartoon(name,address){//Function to update currently selected cartoon
            this.name=name;
            this.address=address;

        }

        
    }


