import React from 'react';
import { Formik, useFormik } from 'formik';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Createuser() {
    const Navigate=useNavigate()
    const Params=useParams();
    const formik= useFormik({
        initialValues: {
            name: "",
           
            email: "",
            phone: ""
           

        },
        onSubmit: async (values)=>{
            await axios.post("https://61c4d7a4f1af4a0017d9981e.mockapi.io/userlist",(values))
            alert("User Created Successfully")
            Navigate("/Userlist")
        }
    })
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Create a User</h1>

            </div>
            <div className='container'>
                <form id="form" onSubmit={formik.handleSubmit}>
                    <div className='column'>

                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="name" placeholder="Name"
                                onChange={formik.handleChange}
                                values={formik.values.name} />

                        </div>
                       
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="email" placeholder="Email"
                                onChange={formik.handleChange}
                                values={formik.values.email} />

                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="Number" class="form-control" id="phone" placeholder="Phone Number"
                                onChange={formik.handleChange}
                                values={formik.values.phone} />

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

export default Createuser;
