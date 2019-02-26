import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      titulo: 'Primer Año',
      url: 'menu/primero'
    },
    {
      titulo: 'Segundo Año',
      url: 'menu/segundo'
    },
    {
      titulo: 'Tercer Año',
      url: 'menu/tercero'
    },
    {
      titulo: 'Cuarto Año',
      url: 'menu/cuarto'
    },
    {
      titulo: 'Quinto Año Sección "A"',
      url: 'menu/quinto-a'
    },
    {
      titulo: 'Quinto Año Sección "B"',
      url: 'menu/quinto-b'
    }
  ];

  selectedPath = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  openPage(page) {
    this.router.navigateByUrl(page.url);
  }
}
