import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {Setor} from "../../shared/models";
import {ApiService} from "../../shared/api.service";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-setores',
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.scss']
})
export class SetoresComponent {

  setores: Setor[] = []
  form: FormGroup;

  
  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<SetoresDialogComponent>,
  ) {
  }

  async ngOnInit() {
    await this.busca("")
  }

  async busca(q: string) {
    this.setores = await this.api.getSetores(q);
  }

}
