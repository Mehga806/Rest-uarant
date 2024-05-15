import { Component, OnInit,  } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgFor } from '@angular/common';
import { FilterPipe } from "../../pipes/filter.pipe";


@Component({
    selector: 'app-resturant-list',
    standalone: true,
    templateUrl: './resturant-list.component.html',
    styleUrl: './resturant-list.component.css',
    imports: [NgFor, FilterPipe]
})
export class ResturantListComponent implements OnInit {

  //properties

  // Rest= "All Restuarant List"
    
  restuarantsList:any = []
restuarant: any;

searchTerm=""

  constructor(private apiService:ApiService){ }

  
  ngOnInit(): void {
    this.apiService.getAllRestuarantsList()
    .subscribe((result)=>{
      this.restuarantsList = result
      console.log(this.restuarantsList);
      
    })

    //serach from term from api service

    this.apiService.search.subscribe((data:any)=>{
      console.log(data);
      this.searchTerm = data
      
    })

  }


}

  