import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit{
  itensCarrinho: IProdutoCarrinho[]=[];
  total = 0;
 constructor(
  public CarrinhoService:CarrinhoService,
  private router : Router
 ){}
 ngOnInit(): void {
  this.itensCarrinho = this.CarrinhoService.obterCarrinho();
  this.calculaTotal();
 }
 calculaTotal(){
  this.total = this.itensCarrinho.reduce((prev,curr) =>prev + (curr.preco * curr.quantidade),0)
 }
 removeProdutoCarrinho(produtoId :number ){
  this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId)
  this.CarrinhoService.removerProdutoCarrinho(produtoId); 
  this.calculaTotal();
}
comprar(){
  alert('Parabens você finalizou a sua compra !');
  this.CarrinhoService.limparCarrinho();
  this.router.navigate(["produtos"]);
}
}
