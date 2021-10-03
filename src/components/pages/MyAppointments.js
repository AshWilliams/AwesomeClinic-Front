import React from 'react'
import AppointmentList from '../../data/AppointmentList'

const MyAppointments = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>My Appointments</h2>                    
                </div>

                <div className="block">
                    <div className="row">
                        <div className="col-left">
                            <AppointmentList/>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default MyAppointments;