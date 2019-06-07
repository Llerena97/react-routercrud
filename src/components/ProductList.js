import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({product}) => {

  const deleteProduct = id => {
    console.log("Delete ", id);
  }

  return (
    <li data-category={product.category} className="list-group-item d-flex justify-content-between align-items-center">
      <p>
        {product.saucerName}{' '}
        <span className="font-weight-bold">${product.saucerPrice}</span>
      </p>
      <div>
        <Link
          to={`/products/edit/${product.id}`}
          className="btn btn-success mr-2"
        >Edit</Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteProduct(product.id)}
        >Delete &times;</button>
      </div>
    </li>
  )
}

export default ProductList;