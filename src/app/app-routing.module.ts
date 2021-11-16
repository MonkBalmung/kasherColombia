import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'categorias', loadChildren: () => import('./dataBase/categorias/categorias.module').then(m => m.CategoriasModule) }, { path: 'clasificacion', loadChildren: () => import('./dataBase/clasificacion/clasificacion.module').then(m => m.ClasificacionModule) }, { path: 'establecimientos', loadChildren: () => import('./dataBase/establecimientos/establecimientos.module').then(m => m.EstablecimientosModule) }, { path: 'insumos', loadChildren: () => import('./dataBase/insumos/insumos.module').then(m => m.InsumosModule) }, { path: 'marcas', loadChildren: () => import('./dataBase/marcas/marcas.module').then(m => m.MarcasModule) }, { path: 'productos', loadChildren: () => import('./dataBase/productos/productos.module').then(m => m.ProductosModule) }, { path: 'proveedores', loadChildren: () => import('./dataBase/proveedores/proveedores.module').then(m => m.ProveedoresModule) }, { path: 'sellos', loadChildren: () => import('./dataBase/sellos/sellos.module').then(m => m.SellosModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
