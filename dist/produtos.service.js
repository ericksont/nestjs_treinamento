"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
const produto_model_1 = require("./produto.model");
let ProdutosService = class ProdutosService {
    constructor() {
        this.produtos = [
            new produto_model_1.Produto('LIV01', 'Livro de TDD', 29.90),
            new produto_model_1.Produto('LIV02', 'Iniciando com flutter', 30.90),
            new produto_model_1.Produto('LIV03', 'Inteligencia artificial', 5.50)
        ];
    }
    obterTodos() {
        return this.produtos;
    }
    obterUm(id) {
        return this.produtos[0];
    }
    criar(produto) {
        this.produtos.push(produto);
    }
    alterar(produto) {
        return produto;
    }
    apagar(id) {
        this.produtos.pop();
    }
};
ProdutosService = __decorate([
    (0, common_1.Injectable)()
], ProdutosService);
exports.ProdutosService = ProdutosService;
//# sourceMappingURL=produtos.service.js.map