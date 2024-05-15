import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-add-restuarant',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './add-restuarant.component.html',
  styleUrl: './add-restuarant.component.css'
})
export class AddRestuarantComponent  implements OnInit{

  id:any;
  neighbourhood:any;
  Photograph:any;
  Monday:any;
  Tuesday:any;
  Wednesday:any;
  Thursday:any;
  Friday:any;
  Saturday:any;
  Sunday:any;
  rName:any;
  address:any;
  cuisine_type:any;
  rvName:any;
  date:any;
  rating:any;
  comments:any;
  lat:any;
  lng:any;



   constructor(private api:ApiService, private router: Router){}


  ngOnInit(): void {
    
  }

  addProduct(){

    let newRestuarant = {
      id: this.id,
      name: this.rName,
      neighbourhood: this.neighbourhood,
      photograph: this.Photograph,
      address: this.address,
      latlng: {
        lat: this.lat,
        lng: this.lng
      },
      cuisine_type: this.cuisine_type,
      operating_hours:{
        Monday: this.Monday,
        Tuesday: this.Tuesday,
        Wednesday: this.Wednesday,
        Thursday: this.Thursday,
        Friday: this.Friday,
        Saturday: this.Saturday,
        Sunday: this.Sunday
      },
      reviews:
      [
        {
        name: this.rvName,
        date: this.date,
        rating: this.rating,
        comments: this.comments
      }
    ]

    }
    console.log(newRestuarant);
    this.api.addRestuarant(newRestuarant).subscribe(()=>{
      alert('Restuarant details successfully added')
      this.router.navigateByUrl('')
    })
   
    
    
  }

  

}

