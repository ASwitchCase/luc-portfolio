import { Component, OnInit }  
    from '@angular/core'; 
import { Router, NavigationEnd }  
    from '@angular/router'; 
    
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { } 
  
  ngOnInit() { 
      this.router.events.subscribe((event) => { 
          if (!(event instanceof NavigationEnd)) { 
              return; 
          } 
          window.scrollTo(0, 0) 
      }); 
  } 

  scroll(el: HTMLElement) { 
      el.scrollIntoView(); 
      console.log("Scrolling to " + el.getAttribute("name")) 
  } 
}
