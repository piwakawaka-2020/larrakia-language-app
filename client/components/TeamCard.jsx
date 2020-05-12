import React, { Component } from 'react'

class TeamCard extends Component {

    render() {
        return (
            <div className="p-3"> 
            <div className="card border-dark mb-3 team-card">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.profilePic === undefined ? "https://www.mountaineers.org/images/placeholder-images/placeholder-contact-profile/image" : this.props.profilePic} className="card-img" alt=""/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <h5 className="card-text">{this.props.role}</h5>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default TeamCard