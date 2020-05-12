import React, { Component } from 'react'

class TeamCard extends Component {

    render() {
        return (
            <div className="p-3"> 
            <div className="card mb-3 team-card">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://www.mountaineers.org/images/placeholder-images/placeholder-contact-profile/image" className="card-img" alt="" onMouseLeave={this.cardHoverHandler}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">Role description</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default TeamCard