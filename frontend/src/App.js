import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Dashboard from "./views/Dashboard";
import Register from "./views/Register";
import Success from "./components/Success";
import Login from "./views/Login";
import IncomeSources from "./views/income-sources/Index";
import CreateSource from './views/income-sources/CreateIncome';
import  createIncome from './components/Income-form/component'
import Incomes from  './components/Incomes'

function App() {
    return (
        <Router>
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
                            <Success/>

                            <Switch>
                                <Route exact path='/' component={Dashboard}/>
                                <Route path='/register' component={Register}/>
                                <Route path='/login' component={Login}/>
                                <Route path='/incomes/create' component={createIncome}/>
                                <Route path='/incomes' component={Incomes}/>
                                <Route path='/income-sources/create' component={CreateSource}/>
                                <Route path='/income-sources' component={IncomeSources}/>


                            </Switch>


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
        </Router>
    );
}

export default App;
