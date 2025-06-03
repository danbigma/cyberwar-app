import React from 'react';
import ScheduleCard from '../ScheduleCard';
import PricesCard from '../PricesCard';

const InfoSection: React.FC = () => {
  return (
    <section id="price" className="flex flex-col lg:flex-row gap-3 mb-11">
      <ScheduleCard />
      <PricesCard />
    </section>
  );
};

export default InfoSection;