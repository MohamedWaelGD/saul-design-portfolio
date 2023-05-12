import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  isShowFixedNavbar: boolean = false;

  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      let scrollPosition = window.scrollY;
      this.isShowFixedNavbar = scrollPosition >= 100;
    })
  }

}
