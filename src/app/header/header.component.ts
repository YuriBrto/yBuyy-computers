import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(
  public CarrinhoService: CarrinhoService,
  private router : Router
){}
produtos(){
  this.router.navigate(["produtos"])
}
carrinho(){
  this.router.navigate(["carrinho"])
}
contato(){
  this.router.navigate(["contato"])
}

}
