import React, { Component } from 'react'
import TeamCard from './TeamCard'
import BurgerMenu from './BurgerMenu'

class About extends Component {
    render() {
        return (
            <div>
                <BurgerMenu />
                <div className="about-page">
                    <div className="container">
                        <div className="icon-container">
                            <img className="wl-icon" src="/images/button1.png" alt="Water Lily"/>
                        </div>
                        <h1 className="text-center">About</h1>
                        <div className="p-5">
                            <h2>Motivation</h2>
                            <p><span className="for-kids"><strong>The Larrakia Language App</strong></span> has been a vision of the project director, Laniyuk, for years. As a Larrakia person, she understands the challenges of trying to learn a language with limited accessibility for daily engagement. She also understands the importance of language in the practise of culture, connection to kin and understanding of land.</p>

                            <p>As of the 2016 census there were 14 people in the city of Darwin who claimed to know the Larrakia Language (Gulumirrgin), with Larrakia people numbering around 2,000 out of a total population of 136, 828.</p>

                            <p>It was her wish that an app be created that allowed Larrakia people, and those living on Larrakia Land, to have access to learning and practising Gulumirrgin while strengthening its presence in the day to day.</p>

                            <blockquote className="blockquote text-center p-5">‘Since the colonisation of our lands Larrakia people have actively resisted the enforcement of European control and worked to sustain and maintain our language, culture and lands. The Larrakia Language App is a continued effort towards the self-determination of Larrakia people. I hope that we can continue and honour the work done by those who have come before us while working to invest in the futures of those yet to come.’
                            <footer className="blockquote-footer">Laniyuk (Director of Larrakia Language App)</footer></blockquote>
                        </div>

                        <div className="p-5">
                            <h2>Goals</h2>
                            <p>The Larrakia Language App For Kids brings Larrakia language to the mouths and minds of children between the ages of 7-10 through fun, interactive games.</p>

                            <p>The LLA For Kids encourages the learning of animals, plants and landscape through an interactive map, games and a dictionary for children!</p> 

                            <p>We hope to encourage children to maintain culture and connection with Larrakia Land through language. In time, the work done today will hopefully lead to a world in which Larrakia people are fluent in their language, have access to their culture and control over their lands.</p>

                            <p>Always was, Always will be, Larrakia Land.
                            </p>
                        </div>
                        
                        <div className="p-5">
                            <h2>Meet the Team</h2>
                                <TeamCard name="Laniyuk" role="Project Director" profilePic='/images/laniyukProfile.png'/>
                                <TeamCard name="Simone" role="Project Manager" profilePic='/images/simoneProfile.png'/>
                                <TeamCard name="Zac" role="Git/Deployment"/>
                                <TeamCard name="Boyd" role="Backend" profilePic='/images/boydProfile.png'/>
                                <TeamCard name="Richard" role="Frontend" profilePic='/images/richardProfile.png'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About