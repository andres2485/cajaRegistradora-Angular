import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arrComidas : Producto[]
  arrBebidas: Producto[]
  arrPostres : Producto[]

  productosSeleccionados : Producto[]
  
  constructor(){
  
    this.productosSeleccionados= [];

    this.arrComidas=[
      new Producto('cocido','https://i.blogs.es/31e3ce/cocido-madrileno/840_560.jpg',10.50),
      new Producto('Paella','https://www.nestleprofessional-latam.com/sites/g/files/gfb456/f/styles/recipe/public/media/paella.png?itok=BKe1wBM3',12.20),
      new Producto('Cachopo','https://img.bekiacocina.com/cocina/0000/797-c.jpg',15.75),
      new Producto('Pizza','https://t1.rg.ltmcdn.com/es/images/1/9/3/pizza_casera_31391_600_square.jpg',7.80),
      new Producto('Pasta','https://d1uz88p17r663j.cloudfront.net/original/52007da8aee0c1d4cdb98e2e5c9b03cd_Maggi_-_Easy_Creamy_Chicken_Pasta.jpg',6.90),
      new Producto('Burguer','https://www.hazteveg.com/img/recipes/full/202005/R27-74637.jpg',5.75),
      new Producto('Papas','https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/elgranchef/C/Como-hacer-papas-fritas-crujientes-000.jpg',5.90),
      new Producto('Tacos','https://d1uz88p17r663j.cloudfront.net/original/32bfcaf831e22d6d7ec102ceda99044d_Maggi_-_Chicken_Tacos.jpg',5.75),
      
    ],
    this.arrBebidas=[
      new Producto("Coca-cola",'https://coca-colafemsa.com/wp-content/uploads/2019/11/2.png',1.75),
      new Producto("Fanta",'https://cdn.shopify.com/s/files/1/0279/4645/1011/products/Fanta-normal-1500cc_600x.png?v=1599483953',1.65),
      new Producto("Cerveza",'https://molinaforbrewers.com/img/imagesblog/drink-2351888_960_720_2.png',1.25),
      new Producto("Agua",'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/temas/agua.jpg',1.50),
    ],

    this.arrPostres=[
      new Producto("Helado",'https://www.ken-foods.com/wp-content/uploads/2018/07/el-origen-del-helado-e1530726550260.jpg',1.75),
      new Producto("Torta",'https://cl-mycooktouch.group-taurus.com/image/recipe/545x395/torta-milhojas-crema-pastelera-manjar.',1.65),
      new Producto("Cafe Helado",'https://recetasdebatidos.com/wp-content/uploads/2020/12/cafe-helado-con-leche-V.jpg',1.25),
      new Producto("Queque",'https://t2.rg.ltmcdn.com/es/images/0/9/1/queque_facil_15190_orig.jpg',1.50),
    ]
  }

  onProductoSeleccionado($event:any){
    // console.log($event);
    // this.productosSeleccionados.push($event)
    const productoEncontrado = this.productosSeleccionados.find(producto => producto.nombre === $event.nombre);
    if(productoEncontrado){
      productoEncontrado.cantidad++;
    }else{
      $event.cantidad = 1;
      this.productosSeleccionados.push($event)
    }
    console.log(this.productosSeleccionados);
  }
}
