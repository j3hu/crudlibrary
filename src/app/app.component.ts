import { Component, OnInit } from '@angular/core';
import { Libro} from './libro/Libro';
import { LibroService } from './libro/LibroService.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crudlibrary';
  libros: Libro[] | undefined;

  constructor(private router: Router, private bookService: LibroService) {
  }

  getLibros() {
    this.bookService.getLibros().subscribe(data => {
      this.libros = data;
    });
  }

  addLibro(): void {
    this.router.navigate(['add-book'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  };

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getLibros();
    });
  }
}
