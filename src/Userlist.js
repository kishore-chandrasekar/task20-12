import axios from 'axios';
import React from 'react';
import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'

function Userlist() {
    const [User,setUser]=useState([])
    let params=useParams()
    useEffect(async ()=>{
        try {
            let Userdata= await axios.get("https://61c4d7a4f1af4a0017d9981e.mockapi.io/userlist")
            setUser(Userdata.data);
        } catch (error) {
            console.log(error)
        }
    })
   console.log(params.id)

    return(
    <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">User-List</h1>
            <Link to="/Createuser" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i>Add-User</Link>
        </div>

        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">User-List</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                User.map((element) => {
                                    return <tr>
                                        <td>{element.id}</td>
                                        <td>{element.name}</td>
                                        <td>{element.email}</td>
                                        <td>{element.phone}</td>
                                        <td><Link to={`/useredit/${element.id}`}><button className='btn btn-primary'>Edit-User</button></Link></td>

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

export default Userlist;
