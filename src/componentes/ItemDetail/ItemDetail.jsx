
const ItemDetail = ( {producto} ) => {
    // console.log(producto);
  return (
    <div className="row bg-light">
    <h2 className="text-primary">VISTA DE DETALLE</h2>
    <div className="col">
    <img className="w-25" src={producto.imgUrl} alt="imagen prenda" />
    <div className="">
      <p className="text-muted"><strong>Nombre:</strong> {producto.name} </p>
      <p className="text-muted"><strong>Descripción:</strong> {producto.descripcion} </p>
      <p className="text-muted"><strong>Stock:</strong>: {producto.stock} </p>
      </div> 
    {/* <div className="col">  
    

    </div> */}
    </div>
    </div>

  )
}

export default ItemDetail;