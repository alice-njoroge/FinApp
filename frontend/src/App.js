import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
      <div id="wrapper">

         {/*Sidebar*/}
         <Sidebar/>
         {/*End of Sidebar */}

         {/*Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">

           {/*Main Content */}
          <div id="content">

             {/*Topbar */}
           <Header/>
             {/*End of Topbar */}

             {/*Begin Page Content */}
            <div className="container-fluid">

               {/*Page Heading */}
              <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>

            </div>
             {/*/.container-fluid */}

          </div>
           {/*End of Main Content */}

           {/*Footer */}
          <Footer/>
           {/*End of Footer */}

        </div>
         {/*End of Content Wrapper */}

      </div>
  );
}

export default App;
