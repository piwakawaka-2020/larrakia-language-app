import React, { Component } from 'react'

import BurgerMenu from './BurgerMenu'

class LarrakiaPeople extends React.Component {
    render() {
        return (
            <div>
                <BurgerMenu />
                <div className="about-page">
                    <div className="container">
                        <div className="icon-container">
                            <img className="wl-icon" src="/images/button2.png" alt="Native Peanut"/>
                        </div>
                        <h1 className="text-center">Larrakia People are Saltwater People</h1>
                        <div className="p-5">
                        <p>We have a strong relationship with the ocean and all the animals who we share the waters with.</p>
                                <p>We also have strong relationships with the people who live around us, like the Tiwi people, The Wogait people and the Wulna People.</p>
                                <p>Larrakia people have lots of ceremonies and songs we share with our neighbours to make sure we stay connected and to maintain peace.</p>
                                <p>The Crocodile is a very important animal for us, it is the shared totem of all Larrakia people meaning it represents us and we treat Danggalaba with great respect.</p>
                                <br/>
                                <p>We have lived on our lands since the beginning of time and have always cared for all the animals, plants and people.</p>
                                <p>When you are on Larrakia country it's important that you respect all the animals and the land too.</p>
                                <br/>
                                <p>Remember, when we look after the land, the land will look after us.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LarrakiaPeople
