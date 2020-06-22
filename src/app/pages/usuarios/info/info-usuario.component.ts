import { SessionInfoService } from './../../../services/session-info.service';
import { Component, OnInit } from '@angular/core';
import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.scss'],
})
export class InfoUsuarioComponent implements OnInit {
  readonly userDymanicViewFields: PoDynamicViewField[] = [
    { property: 'sub', label: 'ID' },
    { property: 'given_name', label: 'Primeiro Nome' },
    { property: 'family_name', label: 'Sobrenome' },
    { property: 'name', label: 'Nome Completo' },
    { property: 'email', label: 'E-mail' },
  ];

  constructor(public sessionInfo: SessionInfoService) {}

  ngOnInit(): void {
  }
}
