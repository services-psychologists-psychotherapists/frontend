import React from 'react';
import './EmergencyHelp.css';
import { EMERGENCY_SERVICES } from '../../constants/constants';
import BlockWithTitle from '../templates/BlockWithTitle/BlockWithTitle';

export default function EmergencyHelp() {
  return (
    <section className="emergency-help">
      <BlockWithTitle
        size="m"
        title="Необходима экстренная помощь?"
        titleLvl="2"
        constainerClasses="emergency-help__container"
      >
        <div className="emergency-help__content">
          <p className="emergency-help__text">
            Если вам требуется экстренная помощь в серьезной или угрожающей жизни ситуации
            — обратитесь в одну из этих организаций:
          </p>
          <ul className="emergency-help__contacts">
            {EMERGENCY_SERVICES.map((el) => (
              <li className="emergency-help__contacts-element" key={el.number}>
                <h3 className="emergency-help__contacts-title">{el.number}</h3>
                <p className="emergency-help__contacts-description">{el.service}</p>
              </li>
            ))}
          </ul>
        </div>
      </BlockWithTitle>
    </section>
  );
}
