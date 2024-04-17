import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule, RouterLink, HttpClientModule],
  providers: [PensamentoService],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit {

  constructor(private service: PensamentoService,
    private router: Router) { }

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => this.router.navigate(['/listarpensamento']));
  }

  cancelar() {
    this.router.navigate(['/listarpensamento']);
  }
}
