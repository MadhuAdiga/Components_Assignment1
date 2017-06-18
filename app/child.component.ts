import { Component, OnInit, Input } from '@angular/core'; //Import Component and ngOnInit dependenicies
import { AppServices } from './app.services'; // Import AppService 


@Component({
  selector: 'child',
  template: ` <!-- Modal -->
                <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">{{childId}}</h4><!-- Interpolate the child name -->
                    </div>
                    <div class="modal-body">
                        <p><b>Address: </b>{{childAddress}}</p><!--Interpolate the address value received from the parent -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                    </div>

                </div>
                </div>`,
  
})



export class ChildComponent implements OnInit { // Export a class AppComponent 
        cartoons = [{}]; //Declare an array of objects
        constructor(private _appServives : AppServices){} //Declare a private variable of the type AppServices
        @Input() childId:string;//Receive the name fom the parent
        @Input() childAddress:string;//Receive the address from the parent
        ngOnInit(){
            this.cartoons = this._appServives.getData() //Run OnInit which assigns the variable to the data fetched by the getData function of the AppServices
        }

       

        
    }


