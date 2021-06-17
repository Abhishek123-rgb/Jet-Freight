import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import NewBooking from './NewBooking'
import PastBooking from './PastBooking'
import "./Booking.css"
const Booking = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <Router>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="newbooking">
                                    <Link to="/newbooking" className="headcolor" style={{color: "white", textDecoration: "none"}}>Booking</Link>
                                </div>
                            </div>  
                            <div className="col">
                                <div className='pastbooking'>
                                    <Link  to="/pastbooking" className="headcolor" style={{color: "white", textDecoration: "none"}}>PastBooking</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="booking">

                    </div>
                    <Route path="/newbooking" exact>
                        <NewBooking/>
                    </Route>
                    <Route path="/pastbooking">
                        <PastBooking/>
                    </Route>
                </Router>
                </div>
            </div>
        </div>
    )
}

export default Booking
