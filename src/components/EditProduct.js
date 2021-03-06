import React, { useState, useRef } from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom';

const EditProduct = ({history, setReloadProducts, product}) => {
  const saucerPriceRef = useRef('');
  const saucerNameRef = useRef('');

  const [category, setCategory] = useState('');
  const [error, setError] = useState(false);

  const readRadioValue = e => {
    setCategory(e.target.value)
  }

  const editProduct = async e => {
    e.preventDefault();

    const newSaucerName = saucerNameRef.current.value;
    const newSaucerPrice = saucerPriceRef.current.value;

    if (newSaucerName === '' || newSaucerPrice === '' || category === '') {
      setError(true)
      return;
    }

    setError(false)

    let categorySaucer = (category === '') ? product.category : category
    const editSaucer = {
      saucerName: newSaucerName,
      saucerPrice: newSaucerPrice,
      category: categorySaucer
    }

    const url = `http://localhost:4000/restaurant/${product.id}`

    try {
      const result = await axios.put(url, editSaucer);
      if (result.status === 200) {
        Swal.fire(
          'Ok',
          'Product edited successfully!',
          'success'
        )
      }
    } catch (e) {
      Swal.fire({
        type: 'error',
        title: 'Error, try again!',
        text: 'success'
      })
    }
    setReloadProducts(true);
    history.push('/products')

  }

  return (
    <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Edit Saucer</h1>
            {error ? <Error message="All fields are required!" /> : null}
            <form
                className="mt-5"
                onSubmit={editProduct}
            >
                <div className="form-group">
                    <label>Saucer Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Saucer Name"
                        ref={saucerNameRef}
                        defaultValue={product.saucerName}
                    />
                </div>

                <div className="form-group">
                    <label>Saucer Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        placeholder="Saucer Price"
                        ref={saucerPriceRef}
                        defaultValue={product.saucerPrice}
                    />
                </div>

                <legend className="text-center">Category:</legend>
                <div className="text-center">
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        value="main"
                        onChange={readRadioValue}
                        defaultChecked={(product.category === 'main')}
                    />
                    <label className="form-check-label">
                        Main
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        value="dessert"
                        onChange={readRadioValue}
                        defaultChecked={(product.category === 'dessert')}
                    />
                    <label className="form-check-label">
                        Dessert
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        value="drink"
                        onChange={readRadioValue}
                        defaultChecked={(product.category === 'drink')}
                    />
                    <label className="form-check-label">
                        Drink
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        value="salad"
                        onChange={readRadioValue}
                        defaultChecked={(product.category === 'salad')}
                    />
                    <label className="form-check-label">
                        Salad
                    </label>
                </div>
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Edit Product" />
            </form>
        </div>
  )
}

export default withRouter(EditProduct);
