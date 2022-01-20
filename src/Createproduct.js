import { useFormik } from 'formik';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Createproduct() {
    let Params=useParams();
    const Navigate=useNavigate();
    const formik= useFormik({
        initialValues: {
            productname: "",
            price: ""
            
           

        },
        onSubmit: async (values)=>{
            await axios.post("https://61c4d7a4f1af4a0017d9981e.mockapi.io/productlist",(values))
            alert("Car Added Successfully")
            Navigate("/Productlist")
        }
    })
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Add a Car</h1>

            </div>
            <div className='container'>
                <form id="form" onSubmit={formik.handleSubmit}>
                    <div className='column'>

                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="productname" placeholder="Name of the car"
                                onChange={formik.handleChange}
                                values={formik.values.name} />

                        </div>

                        <div class="form-floating mb-3 mt-3">
                            <input type="number" class="form-control" id="price" placeholder="Price"
                                onChange={formik.handleChange}
                                values={formik.values.email} />

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
    )
}

export default Createproduct;
