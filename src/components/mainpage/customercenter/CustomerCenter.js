import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import styled from './CusromerCenter.module.css';

/*global kakao*/
const CustomerCenter = () => {
  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.567134, 126.980372),
      level: 2,
    };
    let map = new kakao.maps.Map(container, options);
    let markerPosition = new kakao.maps.LatLng(37.567134, 126.980372);
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <main className={styled.CustomerCenter}>
      <section className={styled.content}>
        <div className={styled.mapContainer}>
          <div>
            <h1>본사</h1>
            <h3>서울시 중구 남대문로9길 40, 2001호 (다동, 센터플레이스)</h3>
            <div id="map" className={styled.map}></div>
          </div>
        </div>
        <div className={styled.ContactFormWrapper}>
          <ContactForm className={styled.ContactForm} />
        </div>
      </section>
    </main>
  );
};

export default CustomerCenter;
