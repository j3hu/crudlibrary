import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LibroService} from "../LibroService.service";
@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private bookService: LibroService) { }

  addForm!: FormGroup;

  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
      id: [],
      isbn: ['', Validators.required],
      titulo: ['', Validators.required],
      id_autor: ['', Validators.required],
      precio: ['', Validators.required]
    });

}

onSubmit() {
  this.bookService.addLibro(this.addForm.value)
    .subscribe(data => {
      this.router.navigate(['list-books']);
    });
}
}
