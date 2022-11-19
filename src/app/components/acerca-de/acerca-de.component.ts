import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  
  persona: persona = null;
  img: any = null;
  
  constructor(public personaService: PersonaService, private tokenService: TokenService, 
    private imageService: ImageService) { }

  isLogged = false;

  ngOnInit(): void {
    console.log(this.imageService.url);
    
    this.imageService.getImage("perfil_1").subscribe(data => this.img = data);
    console.log(this.img);
    
   this.cargarPersona();
   if (this.tokenService.getToken()){
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(
      data => {
        this.persona = data;
      }
    )
  }

}
