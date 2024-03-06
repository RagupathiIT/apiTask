import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-bootstrap-model',
  templateUrl: './user-bootstrap-model.component.html',
  styleUrl: './user-bootstrap-model.component.scss'
})
export class UserBootstrapModelComponent {
  username!:string;
  email!:string;
  birthDate!:string;
  constructor(public bsModalRef: BsModalRef){}
}
