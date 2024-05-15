import { Routes } from '@angular/router';
import { ResturantListComponent } from './component/resturant-list/resturant-list.component';
import { ViewRestuarantComponent } from './component/view-restuarant/view-restuarant.component';
import { AddRestuarantComponent } from './component/add-restuarant/add-restuarant.component';
import { UpdateRestuarantComponent } from './component/update-restuarant/update-restuarant.component';
import { DeleteRestuarantComponent } from './component/delete-restuarant/delete-restuarant.component';


export const routes: Routes = [
    {path:'',component: ResturantListComponent},
    {path:'view-restuarant/:id',component: ViewRestuarantComponent},
    {path:'add-restuarant',component: AddRestuarantComponent},
    {path:'update-restuarant/:id',component: UpdateRestuarantComponent},
    {path:'delete-restuarant/:id',component: DeleteRestuarantComponent}

];
