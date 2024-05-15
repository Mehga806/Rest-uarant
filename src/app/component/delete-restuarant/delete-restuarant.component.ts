import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-delete-restuarant',
  standalone: true,
  imports: [],
  templateUrl: './delete-restuarant.component.html',
  styleUrl: './delete-restuarant.component.css'
})
export class DeleteRestuarantComponent implements OnInit {

  restId:any
  id:any

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService, private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((result)=>{
      console.log(result['id']);
      
      this.restId= result['id'];
      
    })
    
    this.api.deleteRestuarant(this.restId)
    .subscribe(()=>{
      alert("Restaurant Deleted Successfully...!!!")
      this.router.navigateByUrl('')
    })


  }

}
