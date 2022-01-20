import React from 'react';
import axios from 'axios';

import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'

function Productlist() {

    const [product, setproduct] = useState([])
    let params = useParams()
    useEffect(async () => {
        try {
            let productdata = await axios.get("https://61c4d7a4f1af4a0017d9981e.mockapi.io/productlist")
             setproduct(productdata.data)
        } catch (error) {
            console.log(error)
        }
    })
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Car-List</h1>
                <Link to="/Createproduct" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i>Add-Product</Link>
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Cars-Available</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Car</th>
                                    <th>Price in INR</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    product.map((element) => {
                                        return <tr>
                                            <td>{element.id}</td>
                                            <td>{element.productname}</td>
                                            <td>{element.price}</td>
                                            <td><Link to={`/Productedit/${element.id}`}><button className='btn btn-primary'>Edit-Car</button></Link></td>

                                        </tr>
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Productlist;
