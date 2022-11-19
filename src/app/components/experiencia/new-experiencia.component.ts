import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SexperienciaService } from 'src/app/service/sexperiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: SexperienciaService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate(): void {
    const experiencia = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(experiencia).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
