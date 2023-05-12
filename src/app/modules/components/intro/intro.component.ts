import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  ngOnInit(): void {
    const typed = new Typed('#designer', {
      strings: ['DESIGNER', 'Web Dev.', 'Game Dev.'],
      typeSpeed: 60,
      loop: true,
      backSpeed: 30
    })
  }

}
