import React from 'react'
import { Col, Card, CardBody } from 'reactstrap'
import Slider from 'react-slick'
import { P, H4, Image } from '../../../../AbstractElements'
import { OfferProductsData } from '../../../../Data/MockTable/OfferProducts'

const OfferProduct = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerPadding: '5px',
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Col xl="12">
      <Card className="offer-box">
        <CardBody className="p-0">
          <div className="offer-slider">
            <div className="carousel slide" id="carouselExampleCaptions" data-ride="carousel">
              <div className="carousel-inner">
                <Slider {...settings}>
                  {OfferProductsData.map((data, index) =>
                    <div key={index} className={`carousel-item ${data.active}`}>
                      <div className="selling-slide row">
                        <Col xl="4" md="6">
                          <div className="d-flex">
                            <div className="left-content">
                              <P>{data.offer1}</P>
                              <H4 attrH4={{ className: 'f-w-600' }} >{data.product1}</H4><span className="badge badge-white rounded-pill">{data.price1}</span>
                              {data.coupon1 && <span dangerouslySetInnerHTML={{ __html: data.coupon1 }} />}
                            </div>
                          </div>
                        </Col>
                        <Col xl="4" md="12">
                          <div className="center-img"><Image attrImage={{ className: 'img-fluid', src: require(`../../../../assets/images/${data.productImage}`), alt: '...' }} /></div>
                        </Col>
                        <Col xl="4" md="6">
                          <div className="d-flex">
                            <div className="right-content">
                              <P>{data.offer2}</P>
                              <H4 attrH4={{ className: 'f-w-600' }} >{data.product2}</H4><span className="badge badge-white rounded-pill">{data.price2}</span>
                            </div>
                          </div>
                        </Col>
                      </div>
                    </div>
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OfferProduct
