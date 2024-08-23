import React from 'react'
import '../assets/style/Projects.css'
import Title from '../components/Title'
import Titleh2 from '../components/Titleh2'
import { CardProjects } from '../components/CardProjects'
import TestimonialCards from '../components/TestimonialCards'
import Project1 from '../assets/img/Project1.jpg'
import Project2 from '../assets/img/Project2.jpg'
import Project3 from '../assets/img/Project3.jpg'
import Project4 from '../assets/img/Project4.jpg'
import Project5 from '../assets/img/Project5.jpg'
import Project6 from '../assets/img/Project6.jpg'
import Project7 from '../assets/img/Project7.jpg'
import Project8 from '../assets/img/Project8.jpg'
import Project9 from '../assets/img/Project9.jpg'
import Project10 from '../assets/img/Project10.jpg'
import Testimonio1 from '../assets/img/persona1.jpg'
import Testimonio2 from '../assets/img/persona2.jpg'
import Testimonio3 from '../assets/img/persona3.jpg'
import Testimonio4 from '../assets/img/persona4.jpg'
import Testimonio5 from '../assets/img/persona5.jpg'
import Testimonio6 from '../assets/img/persona6.jpg'
import Testimonio7 from '../assets/img/persona7.jpg'
import Testimonio8 from '../assets/img/persona8.jpg'

export const Projects = () => {
    return (
        <div>
            <section className="animate-container">
                <Title text="PROJECTS" />
                <div className="project-grid">
                    <CardProjects
                        Image={Project1}
                        Title="Electrical Installation"
                        Description="'We perform complete electrical installations for residential and commercial buildings, ensuring safe and efficient operation'"
                    />
                    <CardProjects
                        Image={Project2}
                        Title="Electrical Maintenance"
                        Description="'We offer preventive and corrective maintenance services for electrical systems, guaranteeing their optimal performance and durability.'"
                    />
                    <CardProjects
                        Image={Project3}
                        Title="Solar Panels"
                        Description="'We install solar energy systems to help reduce electricity costs and promote the use of renewable energy.'"
                    />
                    <CardProjects
                        Image={Project4}
                        Title="Heating Systems"
                        Description="'Installation and maintenance of heating systems to ensure a comfortable and warm environment during the cold months.'"
                    />
                    <CardProjects
                        Image={Project5}
                        Title="Electrical Networks"
                        Description="'We design and construct electrical networks for buildings and complexes, ensuring an efficient and safe distribution of energy.'"
                    />
                    <CardProjects
                        Image={Project6}
                        Title="Panel Maintenance"
                        Description="'Cleaning and maintenance services for solar panels, optimizing their performance and extending their useful life.'"
                    />
                    <CardProjects
                        Image={Project7}
                        Title="Air Conditioning"
                        Description="'Installation and maintenance of air conditioning systems to ensure a cool and comfortable environment all year round.'"
                    />
                    <CardProjects
                        Image={Project8}
                        Title="Wind Energy"
                        Description="'We implement wind energy systems to harness wind as a sustainable source of renewable energy.'"
                    />
                    <CardProjects
                        Image={Project9}
                        Title="Energy Efficiency"
                        Description="'We evaluate and improve the energy efficiency of buildings and systems to reduce energy consumption and costs.'"
                    />
                    <CardProjects
                        Image={Project10}
                        Title="Clean Energy"
                        Description="'We develop clean energy solutions to promote a sustainable future and reduce environmental impact.'"
                    />
                </div>
            </section>
            <section className="testimonials-section">
                <Titleh2 text="Testimonials" />
                <div className="testimonials-wrapper">
                    <div className="testimonials-row">
                        <TestimonialCards
                            Image={Testimonio1}
                            Name="Ana García"
                            Comment="'The quality of the work exceeded our expectations. The team was very professional and the communication was excellent'"
                        />
                        <TestimonialCards
                            Image={Testimonio2}
                            Name="Carlos Mendoza"
                            Comment="'A truly positive experience. The results were fantastic and the customer service was exceptional'"
                        />
                        <TestimonialCards
                            Image={Testimonio3}
                            Name="Mariana Suárez"
                            Comment="'The team demonstrated a high level of commitment and professionalism. I recommend their services without hesitation'"
                        />
                        <TestimonialCards
                            Image={Testimonio4}
                            Name="Luis Fernández"
                            Comment="'Excellent service and results. The team was attentive to every detail and met the agreed deadlines'"
                        />
                    </div>
                    <div className="testimonials-row">
                        <TestimonialCards
                            Image={Testimonio5}
                            Name="Lucía López"
                            Comment="'Impressive attention to detail and professionalism. I would recommend their services to anyone'"
                        />
                        <TestimonialCards
                            Image={Testimonio6}
                            Name="Fernando Pérez"
                            Comment="'The process went smoothly and the end result was more than we expected. ¡Excellent work!'"
                        />
                        <TestimonialCards
                            Image={Testimonio7}
                            Name="Elena Torres"
                            Comment="'Very satisfied with the result. The team was efficient and the project was completed on time'"
                        />
                        <TestimonialCards
                            Image={Testimonio8}
                            Name="Andrés Gutiérrez"
                            Comment="'A highly qualified and professional team. I am very happy with the work done'"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
