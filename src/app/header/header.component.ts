import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

//property

search = "Restuarant to be searched"
   
constructor(private api: ApiService)  {}

ngOnInit(): void {
  
}

searchTerm(event:any){
  console.log(event.target.value);
  let searchKey = event.target.value
  this.api.search.next(searchKey)
  
}

}
