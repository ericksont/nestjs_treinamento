import { Produto } from './produto.model';
export declare class ProdutosController {
    produtos: Produto[];
    obterTodos(): Produto[];
    obterUmProduto(params: any): Produto;
    criar(produto: Produto): void;
    alterar(produto: Produto): Produto;
    apagar(params: any): void;
}
