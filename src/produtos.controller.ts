import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from './produto.model'
import { ProdutosService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {

    constructor(private service: ProdutosService){
        
    }

    @Get()
    async obterTodos(): Promise<Produto[]> {
        return this.service.obterTodos();
    }

    @Get(':id')
    async obterUmProduto(@Param() params) : Promise<Produto> {
        return this.service.obterUm(params.id)
    }

    @Post()
    criar(@Body() produto:Produto) {
        this.service.criar(produto);
    }

    @Put()
    async alterar(@Body() produto:Produto):Promise<[number, Produto[]]>{
        return this.service.alterar(produto)
    }

    @Delete(':id')
    async apagar(@Param() params){
        this.service.apagar(params.id)
    }
}