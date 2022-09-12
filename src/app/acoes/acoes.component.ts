import { AcoesService } from './acoes.service';
import { Acoes } from './modelo/acoes';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();
  acoes: Acoes;

  constructor(private acoesService: AcoesService) {}

  ngOnInit() {
    this.acoesService.getAcoes().subscribe((retornoApi) => {
      this.acoes = retornoApi.payload;
    });
  }
}
