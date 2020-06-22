import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly data = [
    {id: 1, name: 'Usuário 1', cidade: 'São José dos Pinhais'},
    {id: 2, name: 'Usuário 2', cidade: 'Criciúma'},
    {id: 3, name: 'usuário 3', cidade: 'Curitiba'},
    {id: 4, name: 'usuário 4', cidade: 'Curitiba'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
