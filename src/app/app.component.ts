import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { AddRestuarantComponent } from "./component/add-restuarant/add-restuarant.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, HttpClientModule, FormsModule]
})
export class AppComponent {
  title = 'restuarant-listing-app';
}
