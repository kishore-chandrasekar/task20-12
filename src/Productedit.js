import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Productedit() {
    let params = useParams()
    const Navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            productname: "",
            price: ""
        },
        onSubmit: async (values) => {
            let abc = await axios.put(`https://61c4d7a4f1af4a0017d9981e.mockapi.io/productlist/${params.id}`, (values))
            alert("User Updated Successfully")
            Navigate('/Userlist')




        }

    })

    useEffect(async () => {
        let userdata = await fetch(`https://61c4d7a4f1af4a0017d9981e.mockapi.io/productlist/${params.id}`)
        var user = await userdata.json()

        formik.setValues(user)
        console.log(user)
    })
  return  <>
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Update a Car</h1>

  </div>
  <div className='container'>
      <form id="form" onSubmit={formik.handleSubmit}>
          <div className='column'>

              <div class="form-floating mb-3 mt-3">
                  <input type="text" class="form-control" id="productname" placeholder="Name of the car"
                      onChange={formik.handleChange}
                      value={formik.values.productname} />

              </div>

              <div class="form-floating mb-3 mt-3">
                  <input type="text" class="form-control" id="price" placeholder="Price"
                      onChange={formik.handleChange}
                      value={formik.values.price} />

              </div>
             

              <div className="col-lg-6 mt-3">
                  <input type="submit" className='btn btn-primary btn-sm'>
                  </input>

              </div>

          </div>
      </form>

      <form onClick={formik.values.handleReset} >
          <div className="col-lg-6 mt-3">
              <button id="clear" className='btn btn-danger btn-sm'
                  onClick={function (e) {
                      return formik.values.handleReset(e)
                  }} >Clear</button>

          </div>
      </form>
  </div>



</>
}

export default Productedit;
