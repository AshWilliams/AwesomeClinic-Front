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
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Doctor</th>
                                <th>Specialty</th>
                                <th>Branch</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <AppointmentList/>
                        </tbody>
                    </table>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default MyAppointments;