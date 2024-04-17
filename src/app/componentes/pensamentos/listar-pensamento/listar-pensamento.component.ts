import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { CommonModule } from '@angular/common';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css',
  imports: [RouterLink, PensamentoComponent, CommonModule, HttpClientModule],
  providers:[PensamentoService]
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}
