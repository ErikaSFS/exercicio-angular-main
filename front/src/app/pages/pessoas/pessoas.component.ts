import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Pessoa} from "../../shared/models";
import {ApiService} from "../../shared/api.service";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent {

  pessoas: Pessoa[nome] = [];

  constructor(
    private router: Router,
    private api: ApiService,
    public data: PessoasComponent
  ) {
    if(data.pessoas) {
      this.pessoas.setValue({
        nome: data.pessoas.nome
      });
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    const person = this.pessoas.value as Pessoa;
    if (this.data.action === 'create') {
      // salvar nova pessoa
    } else {
      // atualizar pessoa existente
    }
    this.dialogRef.close();
  }


  async ngOnInit() {
    await this.busca("")
  }

  async busca(q: string) {
    this.pessoas = await this.api.getPessoas(q)
  }
}
