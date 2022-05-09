import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.page.html',
  styleUrls: ['./presentation.page.scss'],
})
export class PresentationPage implements OnInit {

  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/siteweb'])
    }, 3000);
    
   }

  ngOnInit() {
  }
 
}
