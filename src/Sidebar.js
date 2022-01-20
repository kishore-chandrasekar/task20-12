import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">Car-shoppee </div>
        </a>


        <hr class="sidebar-divider my-0" />


        <li class="nav-item active">
            <Link class="nav-link" to="/userlist">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>User-List</span></Link>
        </li>
        <li class="nav-item active">
            <Link class="nav-link" to="/Productlist">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Product-List</span></Link>
        </li>
        <li class="nav-item active">
            <Link class="nav-link" to="/Createuser">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Create-User</span></Link>
        </li>
        <li class="nav-item active">
            <Link class="nav-link" to="/Createproduct">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Create-Product</span></Link>
        </li>

        <hr class="sidebar-divider" />


       





        <hr class="sidebar-divider" />










        <hr class="sidebar-divider d-none d-md-block" />







    </ul>
    );
}

export default Sidebar;
