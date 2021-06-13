import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import NewBooking from './NewBooking'
import PastBooking from './PastBooking'
import "./Booking.css"
const Booking = () => {
    return (
        <div>
            <Router>
                <div className="booking">

                    <div className="newbooking">
                        <Link to="/newbooking">Booking</Link>
                    </div>

                    <div className='pastbooking'>
                        <Link  to="/pastbooking">PastBooking</Link>
                    </div>

                </div>
                <Route path="/newbooking" exact>
                    <NewBooking/>
                </Route>
                <Route path="/pastbooking">
                    <PastBooking/>
                </Route>
            </Router>
        </div>
    )
}

export default Booking
