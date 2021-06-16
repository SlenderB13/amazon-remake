import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from './../categoria.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router, private route: ActivatedRoute) { }

  

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.nome = resposta.nome;
      this.categoria.descricao = resposta.descricao;
    });
  }
  
  update(): void {
    this.service.update(this.categoria).subscribe((resposta) => {
      this.service.mensagem('Categoria Atualizada!');
      this.router.navigate(['categorias']);
    }, err => {
      this.service.mensagem('Preencha todos os campos!');
    })
  }

  cancel(): void {
    this.router.navigate(['categorias']);
  }

}
