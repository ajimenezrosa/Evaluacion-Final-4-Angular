import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CompraService } from '../compra.service'

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  productos : Array<any>;
  total: number = 0;

  constructor(private compraService: CompraService) {

    this.productos = this.compraService.carrito;
  }

  ngOnInit() {
    this.calculateTotals()
  }

  calculateTotals() {
    for(let data of this.productos) {
      this.total += data.cantidad * data.valor;
    }

  }

}
