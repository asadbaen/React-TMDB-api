import React from "react";
import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
export const SliderSwiper = ({ children }) => {
  return (
    <Container>
      <Col>
        <Row>
          <Swiper
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            slidesPerView={3}
            className="mySwiper"
          >
            {children}
          </Swiper>
        </Row>
      </Col>
    </Container>
  );
};

SliderSwiper.propTypes = {
  children: PropTypes.node.isRequired,
};
