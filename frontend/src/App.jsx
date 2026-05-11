import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Front Pages
import Frontmaster from './Front/Front_component/Frontmaster'
import Home from './Front/Front_page/Home';
import About from './Front/Front_page/About';
import Resume from './Front/Front_page/Resume';
import Service from './Front/Front_page/Service';
import Portfolio from './Front/Front_page/Portfolio';
import Contact from './Front/Front_page/Contact';

// Admin Components
import Adminmaster from './Admin/admin_components/Adminmaster';
import PrivateRoute from './Admin/admin_components/PrivateRoute';

// Admin Pages
import Dashboard from './Admin/admin_pages/user/Dashboard';
import Adminlogin from './Admin/admin_pages/Adminlogin';
import Adminuser from './Admin/admin_pages/user/Adminuser';
import Adminprofile from './Admin/admin_pages/user/Adminprofile';
import Adduser from './Admin/admin_pages/user/Adduser';
import Adminenquery from './Admin/admin_pages/user/Adminenquery';
import Updateuser from './Admin/admin_pages/user/Updateuser';

import AddHomeSetting from './Admin/admin_pages/user/AddHomeSetting';
import AdminHomeSetting from './Admin/admin_pages/user/AdminHomeSetting';
import UpdateHomeSetting from './Admin/admin_pages/user/UpdateHomeSetting';

import AdminAboutSetting from './Admin/admin_pages/user/AdminAboutSetting';
import AddAboutSetting from './Admin/admin_pages/user/AddAboutSetting';
import UpdateAboutSetting from './Admin/admin_pages/user/UpdateAboutSetting';


function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          {/* Front Website */}
          <Route path="/" element={<Frontmaster />}>

            <Route index element={<Home />} />

            <Route path="about" element={<About />} />

            <Route path="resume" element={<Resume />} />

            <Route path="service" element={<Service />} />

            <Route path="portfolio" element={<Portfolio />} />

            <Route path="contact" element={<Contact />} />

          </Route>


          {/* Admin Panel */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Adminmaster />
              </PrivateRoute>
            }
          >

            <Route path="dashboard" element={<Dashboard />} />

            <Route path="users" element={<Adminuser />} />

            <Route path="enquery" element={<Adminenquery />} />

            <Route path="homesetting" element={<AdminHomeSetting />} />

            <Route path="aboutsetting" element={<AdminAboutSetting />} />

          </Route>


          {/* Admin Other Pages */}
          <Route path="/adminlogin" element={<Adminlogin />} />

          <Route path="/adminprofile" element={<Adminprofile />} />

          <Route path="/adduser" element={<Adduser />} />

          <Route path="/updateuser/:id" element={<Updateuser />} />

          <Route path="/addhomesetting" element={<AddHomeSetting />} />

          <Route path="/updatehomesetting/:id" element={<UpdateHomeSetting />} />

          <Route path="/addaboutsetting" element={<AddAboutSetting />} />

          <Route path="/updateaboutsetting/:id" element={<UpdateAboutSetting />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
{/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontmaster />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="service" element={<Service />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="/" element={<Adminmaster />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/adminuser" element={<Adminuser/>}/>
          </Route>
          <Route path="/adminlogin" element={<Adminlogin />} />
        </Routes>
      </BrowserRouter> */}