import { Component } from '@angular/core';

interface Post {
  id: number;
  titulo: string;
  conteudo: string;
  autor: string;
  data: Date;
}

@Component({
  imports: [],
  selector: 'app-exemplo01',
  styleUrl: './exemplo01.css',
  templateUrl: './exemplo01.html',
})
export class Exemplo01 {

  post: Post = {
    id: 1,
    titulo: "Meu primeiro post",
    conteudo: "Este é o meu conteúdo do post...",
    autor: "Gabriel",
    data: new Date()
  }

  posts: Post[] = [
    {
      id: 2,
      titulo: "Angular é incrivel",
      conteudo: "Hoje vamos aprender sobre diretivas e data binding.",
      autor: "Rafael",
      data: new Date("2026-09-23")
    },
    {
      id: 3,
      titulo: "Typescript ajuda demais",
      conteudo: "A tipagem forte evita muitos erros e dá mais segurança.",
      autor: "Daniel",
      data: new Date("2026-02-23")
    }
  ]

}
