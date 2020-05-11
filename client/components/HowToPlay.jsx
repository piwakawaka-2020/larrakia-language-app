import React, { Component } from 'react'
import $ from 'jquery'


class HowToPlay extends Component {
    componentDidMount() {
        // Allows modal to show when page is loaded
        $('#how-to-play-modal').modal('show')
    }

    render() {
        return (
            <div className="modal fade" tabIndex="-1" role="dialog" id="how-to-play-modal" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">How To Play</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body modal-body-container">
                            {/* Wrap any tag with <HowToPlay> tags to place info inside the body of modal */}
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Let's Go!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HowToPlay