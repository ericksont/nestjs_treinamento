import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable()
export class ProdutosService {

    produtos:Produto[] = [
        new Produto('LIV01','Livro de TDD', 29.90),
        new Produto('LIV02','Iniciando com flutter', 30.90),
        new Produto('LIV03','Inteligencia artificial', 5.50)
    ]

    obterTodos():Produto[]{
        return this.produtos
    }

    obterUm(id:number):Produto {
        return this.produtos[0]
    }

    criar(produto:Produto){
        this.produtos.push(produto)
    }

    alterar(produto:Produto):Produto{
        return produto
    }

    apagar(id:number){
        this.produtos.pop();
    }

}