import { Component, Input } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() producto: any;

  constructor(private carritoService: CarritoService) {}
  
  agregarAlCarrito(){
    this.carritoService.agregarProducto(this.producto);
  }
}
