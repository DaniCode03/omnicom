import React from 'react'
import Title from '../components/Title'
import Description from '../components/Description';
import ObjectiveSection from '../components/ObjectiveSection';
import CardTeam from '../components/CardTeam';
import Empleado1 from '../assets/img/empleado1.jpg'
import Empleado2 from '../assets/img/empleado2.jpg'
import Empleado3 from '../assets/img/empleado3.jpg'
import Empleado4 from '../assets/img/empleado4.jpg'
import Titleh2 from '../components/Titleh2'
import misionImg from '../assets/img/mision.jpg';
import visionImg from '../assets/img/vision.jpg';
import '../assets/style/About_us.css'


export const About_us = () => {
    return (
        <div>
            <section className="animate-container">
                <Title text="ABOUT US" />
                <Description text="Omnicom CR Enterprises (OCRE) is an innovative company specializing in providing comprehensive solutions in construction, energy efficiency, renewable energy, general electricity, air conditioning, plumbing and sanitation, cleaning, maintenance and gardening, and specialized personnel supply. Founded by experts with over 15 years of experience in both Colombia and the United States, Omnicom combines local and international knowledge to deliver high-quality services and customized solutions to its clients." />
            </section>
            <section className="objetivos">
                <ObjectiveSection
                    title="MISSION"
                    text="Our mission is to empower communities and businesses through innovative and sustainable solutions, improving quality of life and promoting a greener environment."
                    imgSrc={misionImg}
                    animationTitle="animate__pulse"
                    animationText="animate__fadeInLeft"
                    animationImg="animate__fadeInLeft"
                />
                <ObjectiveSection
                    title="VISION"
                    text="We aspire to be leaders in the sector, recognized for our ability to deliver high-quality projects that integrate technology, sustainability, and social responsibility, expanding both nationally and internationally."
                    imgSrc={visionImg}
                    animationTitle="animate__pulse"
                    animationText="animate__fadeInRight"
                    animationImg="animate__fadeInRight"
                />
            </section>
            <section>
                <Titleh2 text="MEET OUR TEAM" />
                <div className="card-container">
                    <CardTeam
                        image={Empleado1}
                        name="Natasha Patel"
                        description="''expert in integral solutions for energy efficiency and renewable energies''"
                        jobPosition="Renewable Energy Manager"
                    />
                    <CardTeam
                        image={Empleado2}
                        name="Nat Reynolds"
                        description="''He is an expert in integrated building, energy efficiency and energy solutions''"
                        jobPosition="Construction and Energy Manager"
                    />
                    <CardTeam
                        image={Empleado3}
                        name="Bob Roberts"
                        description="''Specialist in general electrical, air conditioning and plumbing solutions''"
                        jobPosition="Technical Services Coordinator"
                    />
                    <CardTeam
                        image={Empleado4}
                        name="Sarah Johnson"
                        description="''Engineer with experience in energy efficiency and renewable energies''"
                        jobPosition="Renewable Energy Manager"
                    />
                </div>
            </section>
        </div>
    )
}

export default About_us;