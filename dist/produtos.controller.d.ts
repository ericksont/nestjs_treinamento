import { Produto } from './produto.model';
import { ProdutosService } from "./produtos.service";
export declare class ProdutosController {
    private service;
    constructor(service: ProdutosService);
    obterTodos(): Produto[];
    obterUmProduto(params: any): Produto;
    criar(produto: Produto): void;
    alterar(produto: Produto): Produto;
    apagar(params: any): void;
}
