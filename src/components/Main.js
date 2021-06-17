import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Booking from './Booking/Booking'
const Main = () => {
    return (
        <div className="main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="child">
                            <h4 style={{color: "white"}}>Dashboard</h4>
                            <Router>
                                <Link className="link" to="/newbooking" style={{color: "white", textDecoration: "none"}}>Booking</Link>
                                <div className="a">
                                    <Route path="/newbooking" exact>
                                        <Booking/>
                                    </Route>
                                </div>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
