import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-update-restuarant',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
 // import { ActivatedRoute } from '@angular/router';
templateUrl: './update-restuarant.component.html',
  styleUrl: './update-restuarant.component.css'
})
export class UpdateRestuarantComponent implements OnInit{


  restId:any;
  restDetails: any={}
  constructor ( private activatedRoute:ActivatedRoute, private apiService:ApiService, private router:Router){ }


  ngOnInit(): void {
    //1. get restuarant ID to be updated
    this.activatedRoute.params.subscribe((result:any)=>{
      this.restId= result['id']
     //console.log(this.restId);
     
    })

    // 2. fetch details of restuarant Id
    this.apiService.viewrestuarant(this.restId).subscribe((result)=>{
      this.restDetails = result
      console.log(this.restDetails);
      
    })

  }

  //updateRestuarant

  updateRestuarant(form:any){
    console.log(form.value);
    let updateRest = {
      id: form.value.id,
      name: form.value.rName,
      neighbourhood: form.value.neighbourhood,
      photograph: form.value.Photograph,
      address: form.value.address,
      latlng: {
        lat: form.value.lat,
        lng: form.value.lng
      },
      cuisine_type: form.value.cuisine_type,
      operating_hours:{
        Monday: form.value.Monday,
        Tuesday: form.value.Tuesday,
        Wednesday: form.value.Wednesday,
        Thursday: form.value.Thursday,
        Friday: form.value.Friday,
        Saturday: form.value.Saturday,
        Sunday: form.value.Sunday
      },
      reviews:
      [
        {
        name: form.value.rvName,
        date: form.value.date,
        rating: form.value.rating,
        comments: form.value.comments
      }
    ]
    }
    this.apiService.updateRestuarant(this.restId,updateRest)
    .subscribe(()=>{
      alert('Restuarant details are updated successfully')
      this.router.navigateByUrl('')
    })


    
  }

}
