import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Userlist from './Userlist';
import Topbar from './Topbar';
import { Link } from 'react-router-dom';
import Productlist from './Productlist';
import Createuser from './Createuser';
import Createproduct from './Createproduct';
import Useredit from './Useredit';
import { useParams } from 'react-router-dom';
import Productedit from './Productedit';
function App() {
  let params=useParams()
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/Userlist" element={<Userlist/>} /><Route />
                <Route path="/Productlist" element={<Productlist/>} /><Route />
                <Route path="/Createuser" element={<Createuser/>} /><Route />
                <Route path="/Createproduct" element={<Createproduct/>} /><Route />
                <Route path="/Useredit/:id" element={<Useredit/>} /><Route />
                <Route path="/Productedit/:id" element={<Productedit/>} /><Route />
              </Routes>

            </div>

          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
