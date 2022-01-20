import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Useredit() {
    let params = useParams()
    const Navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: ""
        },
        onSubmit: async (values) => {
            let abc = await axios.put(`https://61c4d7a4f1af4a0017d9981e.mockapi.io/userlist/${params.id}`, (values))
            alert("User Updated Successfully")
            Navigate('/Userlist')




        }

    })

    useEffect(async () => {
        let userdata = await fetch(`https://61c4d7a4f1af4a0017d9981e.mockapi.io/userlist/${params.id}`)
        var user = await userdata.json()

        formik.setValues(user)
        console.log(user)
    })
   
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Update a User</h1>

            </div>
            <div className='container'>
                <form id="form" onSubmit={formik.handleSubmit}>
                    <div className='column'>

                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="name" placeholder="Name"
                                onChange={formik.handleChange}
                                value={formik.values.name} />

                        </div>

                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="email" placeholder="Email"
                                onChange={formik.handleChange}
                                value={formik.values.email} />

                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="Number" class="form-control" id="phone" placeholder="Phone Number"
                                onChange={formik.handleChange}
                                value={formik.values.phone} />

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

export default Useredit;
