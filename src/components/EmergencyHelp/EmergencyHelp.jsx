import React from 'react';
import './EmergencyHelp.css';
import HelpfulInformation from '../HelpfulInformation/HelpfulInformation';
import { EMERGENCY_SERVICES } from '../../constants/constants';

export default function EmergencyHelp() {
  return (
    <HelpfulInformation
      size="m"
      text="Необходима экстренная помощь?"
      titleClassName="emergency-help__title"
    >
      <p className="emergency-help__text">
        Если вам требуется экстренная помощь в серьезной или угрожающей жизни
        ситуации — обратитесь в одну из этих организаций:
      </p>
      <div className="emergency-help__contacts">
        {EMERGENCY_SERVICES.map((el) => (
          <div className="emergency-help__contacts-element" key={el.number}>
            <h3 className="emergency-help__contacts-title">{el.number}</h3>
            <p className="emergency-help__contacts-description">{el.service}</p>
          </div>
        ))}
      </div>
    </HelpfulInformation>
  );
}
