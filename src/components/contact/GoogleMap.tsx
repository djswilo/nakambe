
import React from 'react';

const GoogleMap = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-subtle h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9092376573406!2d30.7184365!3d-23.3131322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec5b59e9e7eeef5%3A0x5cbde1fd2e5aac78!2sGreater%20Giyani%2C%20Limpopo%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1665582674231!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Nakmabe Centre location"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
