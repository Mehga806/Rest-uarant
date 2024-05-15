import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  this: any;
 // Variables

 search = new BehaviorSubject("")


 // dependency injection
  constructor(private api:HttpClient ) { }

  // Userdefind


  //1. get all restuarant list function

  getAllRestuarantsList(){
    // call api: http://localhost:3000/restaurants - Get Method ( because need to Read )
    //Http request : GET - httpClient - HttpClientModule

   return this.api.get('http://localhost:3000/restaurants')
  }


  // 2. get a single restuarant detail

  viewrestuarant(restId:any){

    //using rest id call api : (http://localhost:3000/restaurants/restID)
    //Http request : GET method

   return this.api.get('http://localhost:3000/restaurants/'+restId)

  }

//3. to add new Restuarant details

   addRestuarant(newRestuarant:any){
        return this.api.post('http://localhost:3000/restaurants/',newRestuarant)
   }

// 4. to update particular restuarant

   updateRestuarant(restId:any,updatedRestBody:any){
      return this.api.put('http://localhost:3000/restaurants/'+restId,updatedRestBody)
   }

// 5. to delete particular restuarant

deleteRestuarant(restId:any){
  return this.api.delete('http://localhost:3000/restaurants/'+restId)
}

}
