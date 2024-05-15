import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-view-restuarant',
  standalone: true,
  imports: [NgFor,RouterLink,NgIf],
 // import { ApiService } from './../../services/api.service';
templateUrl: './view-restuarant.component.html',
  styleUrl: './view-restuarant.component.css'
})
export class ViewRestuarantComponent implements OnInit{
  restId:Number= 0  

  restDetails: any ={}


  constructor(private activateRoute:ActivatedRoute, private apiService:ApiService){}

  ngOnInit(): void {
    
    // to get parameter from URL

    this.activateRoute.params.subscribe((result)=>{
      this.restId = result['id']
      console.log(this.restId);
      
    })
            //call api to get single restuarant detail

            this.apiService.viewrestuarant(this.restId).subscribe((result)=>{
              this.restDetails = result
              console.log(this.restDetails);
              
            })
  }

}
