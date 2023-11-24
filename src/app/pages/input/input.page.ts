import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  ngOnInit(): void {
  }

  nombre: string ="ANDREA MACIAS";
  email: String = '';
  telefono: String ='';
  fechaNacimiento: String ='';

  calcularEdad(){
    const fechaNacimiento = new Date();
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    
    console.log('submit');
    console.log('this.usuario');
    console.log('Nombres:', this.nombre);
    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);
    console.log('Fecha de Nacimiento:', this.fechaNacimiento);
    console.log('Edad:', edad);
  }  
  constructor() { }
}
