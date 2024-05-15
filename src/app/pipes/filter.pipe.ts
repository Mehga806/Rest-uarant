import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(restuarantsList: any[], filterString:String, propName:any): any[] {
    const result: any=[]
    if(!restuarantsList || filterString ==''|| propName==''){
      return restuarantsList
    }
    restuarantsList.forEach((restuarant:any)=>{
      //console.log(restuarant);
      
      if(restuarant[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(restuarant)
        console.log(result);
        
      }
    })
    return result
  }

}
