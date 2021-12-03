
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo:'/main', pathMatch:'full'}, 
  { path: 'categorias', loadChildren: () => import('./dataBase/categorias/categorias.module').then(m => m.CategoriasModule) },
  { path: 'clasificacion', loadChildren: () => import('./dataBase/clasificacion/clasificacion.module').then(m => m.ClasificacionModule) }, 
  { path: 'establecimientos', loadChildren: () => import('./dataBase/establecimientos/establecimientos.module').then(m => m.EstablecimientosModule) }, 
  { path: 'insumos', loadChildren: () => import('./dataBase/insumos/insumos.module').then(m => m.InsumosModule) }, 
  { path: 'marcas', loadChildren: () => import('./dataBase/marcas/marcas.module').then(m => m.MarcasModule) }, 
  { path: 'productos', loadChildren: () => import('./dataBase/productos/productos.module').then(m => m.ProductosModule) }, 
  { path: 'proveedores', loadChildren: () => import('./dataBase/proveedores/proveedores.module').then(m => m.ProveedoresModule) }, 
  { path: 'sellos', loadChildren: () => import('./dataBase/sellos/sellos.module').then(m => m.SellosModule) } ,
  { path: 'editar-categorias/:id', loadChildren: () => import('./funciones/editar-categorias/editar-categorias.module').then(m => m.EditarCategoriasModule) },
  { path: 'editar-clasificacion/:id', loadChildren: () => import('./funciones/editar-clasificacion/editar-clasificacion.module').then(m => m.EditarClasificacionModule) },
  { path: 'editar-establecimientos/:id', loadChildren: () => import('./funciones/editar-establecimientos/editar-establecimientos.module').then(m => m.EditarEstablecimientosModule) },
  { path: 'editar-insumos/:id', loadChildren: () => import('./funciones/editar-insumos/editar-insumos.module').then(m => m.EditarInsumosModule) },
  { path: 'editar-marcas/:id', loadChildren: () => import('./funciones/editar-marcas/editar-marcas.module').then(m => m.EditarMarcasModule) },
  { path: 'editar-productos/:id', loadChildren: () => import('./funciones/editar-productos/editar-productos.module').then(m => m.EditarProductosModule) },
  { path: 'editar-proveedores/:id', loadChildren: () => import('./funciones/editar-proveedores/editar-proveedores.module').then(m => m.EditarProveedoresModule) },
  { path: 'editar-sellos/:id', loadChildren: () => import('./funciones/editar-sellos/editar-sellos.module').then(m => m.EditarSellosModule) },
  { path: 'web-admins', loadChildren: () => import('./Login/web-admins/web-admins.module').then(m => m.WebAdminsModule) },
  { path: 'dbManagment', loadChildren: () => import('./dataBase/db-managment/db-managment.module').then(m => m.DbManagmentModule)},
  { path: 'main', loadChildren: () => import('./UserInterface/main/main.module').then(m => m.MainModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
