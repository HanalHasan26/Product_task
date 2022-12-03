import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { H5 } from '../../../../AbstractElements';
import { Location } from '../../../../Constant';

const containerStyle = {
  width: 'auto',
  height: '300px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Locations = () => {
  return (
    <Col xl='4' className='box-col-12 xl-50'>
      <Card>
        <CardHeader className='card-no-border'>
          <H5>{Location}</H5>
        </CardHeader>
        <CardBody className='pt-0'>
          <div className='dash-map'>
            <div className='map-js-height' id='map'>
              <div id='gmap-simple' className='map-block'>
                <LoadScript googleMapsApiKey='https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places'>
                  <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}></GoogleMap>
                </LoadScript>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Locations;
