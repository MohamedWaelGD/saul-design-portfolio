import { Component, OnInit } from '@angular/core';

declare function ScrollReveal(obj: any): any;
declare function ScrollReveal(): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'saul-design-portfolio';

  ngOnInit(): void {
    ScrollReveal({
      reset: true,
      distance: '120px',
      duration: 2000,
      delay: 100
    })
    window.addEventListener('load', (e) => {
      this.animateScrolling();
      this.scrollingActiveLinks();
    })
    
  }


  private animateScrolling() {
    ScrollReveal().reveal('.animate-left', { origin: 'left' });
    ScrollReveal().reveal('.animate-right', { origin: 'right' });
    ScrollReveal().reveal('.animate-top', { origin: 'top' });
    ScrollReveal().reveal('.animate-bottom', { origin: 'bottom' });
  }

  private scrollingActiveLinks() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-item a');

    window.addEventListener('scroll', () => {
      let scrollPosition = window.scrollY;

      sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollPosition >= offset && scrollPosition < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  }
}
