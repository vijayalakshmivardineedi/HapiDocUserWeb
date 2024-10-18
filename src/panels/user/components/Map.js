import React, { useRef, useEffect } from 'react';

function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapOptions = {
      center: { lat: 17.822836, lng: 83.362907 },
      zoom: 18,
    };

    const map = new window.google.maps.Map(mapRef.current, mapOptions);

    new window.google.maps.Marker({
      position: { lat: 17.822836, lng: 83.362907 },
      map: map,
      title: 'Your Location'
    });
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '280px' }}></div>;
}

export default Map;
