import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  return (
    <div className="card col-lg-4 col-md-6 col-sm-12 mb-4 text-center">
      <div className="card-body p-2 img-fluid rounded">
        <img className="w-100" src={product.imgUrl} alt="imagen prenda" />
        <h5 className="card-title">{product.name}</h5>
        <p className="text-muted"><strong>Descripcion:</strong> {product.description}</p>
      </div>
      <div className="card-footer">
        <Link to={`/detalle/${product.id}`}>
        <button className="btn btn-outline-dark w-100 btn-block">Detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;