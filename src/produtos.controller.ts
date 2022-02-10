import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from './produto.model'

@Controller('produtos')
export class ProdutosController {

    produtos:Produto[] = [
        new Produto('LIV01','Livro de TDD', 29.90),
        new Produto('LIV02','Iniciando com flutter', 30.90),
        new Produto('LIV03','Inteligencia artificial', 5.50)
    ]

    @Get()
    obterTodos(): Produto[] {
        return this.produtos;
    }

    @Get(':id')
    obterUmProduto(@Param() params) : Produto {
        return this.produtos[params.id];
    }

    @Post()
    criar(@Body() produto:Produto) {
        produto.id = 4;
        this.produtos.push(produto)
    }

    @Put()
    alterar(@Body() produto:Produto):Produto{
        return produto;
    }

    @Delete(':id')
    apagar(@Param() params){
        this.produtos.pop();
    }
}