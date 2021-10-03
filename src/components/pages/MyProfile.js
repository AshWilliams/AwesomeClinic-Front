import React from 'react'
import Profile from '../../data/Profile'

const MyProfile = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>My Profile</h2>
                    <div className="block">
                    <div className="row">
                        <Profile/>
                    </div>
                </div>
                          
                </div>
            </section>
        </React.Fragment>
    )
}

export default MyProfile;