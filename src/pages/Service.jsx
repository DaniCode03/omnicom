import React from 'react';
import Title from '../components/Title';
import '../assets/style/Service.css';
import ServiceCard from '../components/ServiceCard';
import GeneralElectricity from '../assets/img/General-Electricity.png';
import HVAC from '../assets/img/HVAC.png';
import RenewableEnergy from '../assets/img/Renewable-Energy.png';
import EnergyEfficiency from '../assets/img/Energy-Efficiency.png';
import SmartEcoControl from '../components/SmartEcoControl';
import SmartEcoImage from '../assets/img/smart-ecocontrol.jpeg';
import Titleh2 from '../components/Titleh2';

export const Service = () => {
  return (
    <div>
      <section className="animate-container">
        <Title text="SERVICES" />
        <div className="services-container">
          <ServiceCard
            title='General Electricity'
            description='Electrical installations, maintenance and repairs.'
            image={GeneralElectricity}
            alt='General Electricity'
          />
          <ServiceCard
            title="HVAC"
            description="Installation and maintenance of heating, ventilation and air conditioning systems."
            image={HVAC}
            alt="HVAC"
          />
          <ServiceCard
            title="Renewable energy"
            description="Implementation of solar systems and other renewable sources."
            image={RenewableEnergy}
            alt="Renewable energy"
          />
          <ServiceCard
            title="Energy efficiency"
            description="Energy efficiency evaluations and improvements."
            image={EnergyEfficiency}
            alt="Energy efficiency"
          />
        </div>
      </section>
      <section className="product-section">
        <Titleh2 text="Product" />
        <div className="product-container">
          <SmartEcoControl
            Image={SmartEcoImage} 
            Price="$9.99"         
            Name="SmartEcoControl" 
            Description="Description of the innovative product that offers monitoring and control of electrical devices at very low cost"
          />
        </div>
      </section>

    </div>
  );
};

export default Service;