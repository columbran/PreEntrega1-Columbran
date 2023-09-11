const productos = [
    {
      id: "1",
      name: "Producto A",
      categoria: "calzado",
      descripcion: "Descripción del Producto A",
      stock: 10,
      imgUrl: "https://th.bing.com/th/id/OIP.AX4_kCRJa3x_Q_dthEQCaQHaHa?pid=ImgDet&rs=1"
    },
    {
      id: "2",
      name: "Producto B",
      categoria: "calzado",
      descripcion: "Descripción del Producto B",
      stock: 5,
      imgUrl: "https://th.bing.com/th/id/OIP.ZYl-NReQtLvVAHvIo5gaNgHaHa?pid=ImgDet&rs=1"
    },
    {
      id: "3",
      name: "Producto C",
      categoria: "calzado",
      descripcion: "Descripción del Producto C",
      stock: 15,
      imgUrl: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwde4662e7/products/NI_BV0417-101/NI_BV0417-101-2.JPG"
    },
    {
      id: "4",
      name: "Producto D",
      categoria: "indumentaria",
      descripcion: "Descripción del Producto D",
      stock: 10,
      imgUrl: "https://th.bing.com/th/id/R.b6bf902a79df0c32a7cf7d47d17a9aae?rik=1IZtMEhSxMF24A&pid=ImgRaw&r=0"
    },
    {
      id: "5",
      name: "Producto E",
      categoria: "indumetaria",
      descripcion: "Descripción del Producto E",
      stock: 5,
      imgUrl: "https://www.innovasport.com/medias/playera-adidas-run-it-is-EK2856-1.jpg?context=bWFzdGVyfGltYWdlc3w1OTgzNHxpbWFnZS9qcGVnfGltYWdlcy9oY2IvaGU3Lzk4Mjg2MTg2MDA0NzguanBnfDZhMDI4MGEzZTAwN2NlMTNhZDY5MTM1ODIxYTYwZjVlYTIzZWVkNDllNDMxYjIwMDUwZDk3Mzk2MjcwMDk2Y2E"
    },
    {
      id: "6",
      name: "Producto F",
      categoria: "indumentaria",
      descripcion: "Descripción del Producto F",
      stock: 15,
      imgUrl: "https://th.bing.com/th/id/OIP.WWNGSQLYj8XrGXyx-0COCAHaHa?pid=ImgDet&rs=1"
    }
  ]

  export const mFetch = (pid) => new Promise((res,rej) => {
    
         setTimeout (()=>{
            res (pid ? productos.find (producto => producto.id == pid) : productos)
         }, 1000)
    
    
  }) 

// export const mFetchOne = () => new Promise((res,rej) => {
//   const condition = true
//   if (condition){
//        setTimeout (()=>{
//           res (productos[0])
//        }, 3000)
//   }else {
//       rej ('dinero no devuelto')
//   }
// })  