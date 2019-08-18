import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pricipal',
  templateUrl: './pricipal.component.html',
  styleUrls: ['./pricipal.component.css']
})
export class PricipalComponent implements OnInit {
  formPelicula : FormGroup
  formulario = false
  id = 0
  peliculas:any = []
  put = false
  peliculasPasar:any = []

  constructor(
    private formBuilder : FormBuilder,
    private router : Router
  ) { }

  nuevaPelicula(){
    this.formulario = true
  }

  editar(id){
    this.id = id
    this.formulario = true
    this.put = true
    let pelicula = this.peliculas.find(x => x.id == id)
    this.formPelicula.get('nombre').setValue(pelicula.nombre)
    this.formPelicula.get('calificacion').setValue(pelicula.calificacion)
    this.formPelicula.get('link').setValue(pelicula.link)
  }

  ver(id){
    let pelicula = JSON.stringify(this.peliculas.find(x => x.id == id))
    this.router.navigate(['/pelicula'], { queryParams: { query: pelicula }, queryParamsHandling: 'merge' })
  }

  modificar(){
    let pelicula ={
      id : this.id,
      nombre : this.formPelicula.get('nombre').value,
      calificacion : this.formPelicula.get('calificacion').value,
      link : this.formPelicula.get('link').value
    }
    let iteracion = 0
    let i = 0
    this.peliculas.forEach(element => {
      
      if(element.id == this.id){
        iteracion = i
      }
      i ++
    });

    this.peliculas[iteracion] = pelicula
    this.formPelicula.reset()
    this.formulario = false
    this.put = false
  }

  eliminar(id){
    this.peliculas.splice(id-1,1)
  }

  aceptar(){
    this.id ++;
    let pelicula = {
      id : this.id,
      nombre : this.formPelicula.get('nombre').value,
      calificacion : this.formPelicula.get('calificacion').value,
      link : this.formPelicula.get('link').value
    }
    this.peliculas.push(pelicula)
    this.formPelicula.reset()
    this.formulario = false
  }

  ngOnInit() {
    this.formPelicula = this.formBuilder.group({
      nombre  : "",
      calificacion : "",
      link : ""
    })
  }

}
