import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';
import { bootstrap } from 'bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(config: NgbCarouselConfig) {

    config.interval = 10000
   }

  ngOnInit(): void {
    // Writing effect
    const target = document.querySelector('.comingsoon');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'black'
    })

    writer
      .type('Página web en construcción.')
      .rest(500)
      .start()

  }

  ngAfterViewInit() {
  }

}
