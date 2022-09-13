import { tap, switchMap} from 'rxjs/operators';
import { merge, Subscription } from 'rxjs';
import { AcoesService } from './acoes.service';
import { Acoes } from './modelo/acoes';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();
  todaAcoes$ = this.acoesService.getAcoes().pipe(
    tap(() => {
      console.log('Fluxo Inicial')
    })
  )
  filtroPeloInput$ = this.acoesInput.valueChanges.pipe(
    tap(() => {
      console.log('Fluxo do Filtro')
    }),
  switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado))
  );
  acoes$ = merge(this.todaAcoes$, this.filtroPeloInput$);

  constructor(private acoesService: AcoesService) {}
}
