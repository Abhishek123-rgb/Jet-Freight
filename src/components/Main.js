import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Booking from './Booking/Booking'
const Main = () => {
    return (
        <div className="main">
            <div className="child">
                <h4 style={{color: "white"}}>Dashboard</h4>
                <Router>
                    <Link className="link" to="/newbooking">Booking</Link>
                    <div className="a">
                        <Route path="/newbooking" exact>
                            <Booking/>
                        </Route>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default Main
