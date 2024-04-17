import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [FormsModule, RouterLink, HttpClientModule],
  providers: [PensamentoService],

  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent implements OnInit {

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  editar() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarpensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarpensamento'])
  }

}
