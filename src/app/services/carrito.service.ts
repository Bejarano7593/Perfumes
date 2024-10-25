import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: any[] = [];

  agregarProducto(producto: any) {
    const item = this.carrito.find(p => p.nombre === producto.nombre);
    if (item) {
      item.cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
  }

  obtenerCarrito() {
    return this.carrito;
  }

  aumentarCantidad(producto: any) {
    const item = this.carrito.find(p => p.nombre === producto.nombre);
    if (item) {
      item.cantidad++;
    }
  }

  disminuirCantidad(producto: any) {
    const item = this.carrito.find(p => p.nombre === producto.nombre);
    if (item && item.cantidad > 1) {
      item.cantidad--;
    }
  }

  eliminarProducto(producto: any) {
    this.carrito = this.carrito.filter(p => p.nombre !== producto.nombre);
  }

  calcularTotal() {
    return this.carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  }

  vaciarCarrito() {
    this.carrito = [];
  }
}
