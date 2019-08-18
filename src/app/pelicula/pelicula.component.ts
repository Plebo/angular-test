import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  data : any
  constructor(
    private route: ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit() {
    this.route.queryParams
    .pipe(filter(params => params.query))
    .subscribe(params => { // Parametros de la busqueda
      this.data = JSON.parse(params.query); // Obtención de datos y transformación a JSON
    });
    
  }

  regresar(){
    this.router.navigate(['/principal'])
  }

}
