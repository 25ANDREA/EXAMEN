import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/componente';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Observable<Componente[]> | undefined;

  ngOnInit(){
    this.componentes = this.dataservice.getMenuOpts();
  }
  constructor(private dataservice: DataService) {

  }
  initializeApp(){
    this.componentes = this.dataservice.getMenuOpts();
  }
}
