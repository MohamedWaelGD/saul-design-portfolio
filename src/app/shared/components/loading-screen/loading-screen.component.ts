import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {

  isLoaded: boolean = false;
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('load', ()=>{
      this.isLoaded = true;
    })
  }

}
