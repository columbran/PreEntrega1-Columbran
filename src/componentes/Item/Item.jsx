import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ producto }) => {
  return (
    <div className="card col-lg-4 col-md-6 col-sm-12 mb-4 text-center">
      <div className="card-body p-2 img-fluid rounded">
        <img className="w-100" src={producto.imgUrl} alt="imagen prenda" />
        <h5 className="card-title">{producto.name}</h5>
        <p className="text-muted"><strong>Descripcion:</strong> {producto.descripcion}</p>
      </div>
      <div className="card-footer">
        <Link to={`/detalle/${producto.id}`}>
        <button className="btn btn-outline-dark w-100 btn-block">Detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;