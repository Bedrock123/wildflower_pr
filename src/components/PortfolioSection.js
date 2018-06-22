import React from 'react';
import {Row, Col} from 'antd';
import { NavLink } from 'react-router-dom'
import PeapackGladstoneMap from '../assets/images/maps/Gladstone-intro.jpg'
import FarHillsMap from '../assets/images/maps/Farhills-intro.jpg'
import BernardsvilleMap from '../assets/images/maps/Bernardsville-intro.jpg'
import MendhamMap from '../assets/images/maps/mendham-intro.jpg'
import windowSize from 'react-window-size'


class PortfolioSection extends React.Component {

  render() {

    return (
      <div>
        <Row>
          <NavLink to="/portfolio/peapack-gladstone">
            <Col
              className='portfolio-block portfolio-map'
              style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: `url(${PeapackGladstoneMap})`
            }}
              xs={{ span: 24, order: 1 }}
              md={{ span: 12, order: 1 }}></Col>
          </NavLink>
          <Col className="portfolio-block portfolio-text-block" xs={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }}>
            <div className="portfolio-block-outer center">
                <h3 className="portfolio-section-header">THE TOWN OF</h3>
                <h3 className="portfolio-callout">Peapack-Gladstone</h3>
                <h4 className="portfolio-learn">
                  <a style={{
                    color: '#72736e'
                  }}>
                  <NavLink to="/portfolio/peapack-gladstone">
                    <div className="home-hero-arrow home-hero-arrow-center arrow-left">
                      <span className="arrow">
                        <span className="arrow-before">
                        </span>
                        <span className="arrow-after">
                        </span>
                      </span>
                    </div>
                  </NavLink>
                </a>

                </h4>
            </div>
          </Col>
        </Row>
        <Row>

        {this.props.windowWidth < 991 ? (

          <NavLink to="/portfolio/farhills">
          <Col
            className='portfolio-block portfolio-map'
            style={{
            backgroundColor: 'white',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${FarHillsMap})`
          }}
            xs={{ span: 24, order: 1 }}
            md={{ span: 12, order: 1 }}></Col>
        </NavLink>

        ) :
        null
      }
        

          <Col className="portfolio-block portfolio-text-block" xs={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }}>
            <div className="portfolio-block-outer center">
              <h3 className="portfolio-section-header">THE TOWN OF</h3>
                <h3 className="portfolio-callout">Far Hills</h3>
                <h4 className="portfolio-learn">
                  <a style={{
                    color: '#72736e'
                  }}>
                  <NavLink to="/portfolio/farhills">
                    <div className="home-hero-arrow home-hero-arrow-center">
                      <span className="arrow">
                        <span className="arrow-before">
                        </span>
                        <span className="arrow-after">
                        </span>
                      </span>
                    </div>
                  </NavLink>
                  </a>
                </h4>
            </div>
          </Col>

          {this.props.windowWidth > 991 ? (

            <NavLink to="/portfolio/farhills">
            <Col
              className='portfolio-block portfolio-map'
              style={{
              backgroundColor: 'white',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: `url(${FarHillsMap})`
            }}
              xs={{ span: 24, order: 1 }}
              md={{ span: 12, order: 1 }}></Col>
          </NavLink>

          ) :
          null
        }
          
     
        </Row>
        <Row>
        <NavLink to="/portfolio/bernardsville">
          <Col
            className='portfolio-block portfolio-map'
            style={{
               backgroundColor: 'white',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${BernardsvilleMap})`
          }}
            xs={{ span: 24, order: 1 }}
            md={{ span: 12, order: 1 }}></Col>
        </NavLink>
        <Col className="portfolio-block portfolio-text-block" xs={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }}>
          <div className="portfolio-block-outer center">
              <h3 className="portfolio-section-header">THE TOWN OF</h3>
              <h3 className="portfolio-callout">Bernardsville</h3>
              <h4 className="portfolio-learn">
                <a style={{
                  color: '#72736e'
                }}>
                <NavLink to="/portfolio/bernardsville">
                  <div className="home-hero-arrow home-hero-arrow-center arrow-left">
                    <span className="arrow">
                      <span className="arrow-before">
                      </span>
                      <span className="arrow-after">
                      </span>
                    </span>
                  </div>
                </NavLink>
                </a>
              </h4>
          </div>
        </Col>
      </Row>
      <Row>

      {this.props.windowWidth < 991 ? (

        <NavLink to="/portfolio/mendham">
          <Col
            className='portfolio-block portfolio-map'
            style={{
            backgroundColor: 'white',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${MendhamMap})`
          }}
            xs={{ span: 24, order: 1 }}
            md={{ span: 12, order: 1 }}></Col>
        </NavLink>
        ) :
  
        null
      }

      <Col className="portfolio-block portfolio-text-block" xs={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }}>
        <div className="portfolio-block-outer center">
            <h3 className="portfolio-section-header">THE TOWN OF</h3>
            <h3 className="portfolio-callout">Mendham</h3>
            <h4 className="portfolio-learn">
              <a style={{
                color: '#72736e'
              }}>
              <NavLink to="/portfolio/mendham">
                <div className="home-hero-arrow home-hero-arrow-center">
                  <span className="arrow">
                    <span className="arrow-before">
                    </span>
                    <span className="arrow-after">
                    </span>
                  </span>
                </div>
              </NavLink>
              </a>
            </h4>
        </div>
      </Col>

      {this.props.windowWidth > 991 ? (

      <NavLink to="/portfolio/mendham">
        <Col
          className='portfolio-block portfolio-map'
          style={{
          backgroundColor: 'white',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url(${MendhamMap})`
        }}
          xs={{ span: 24, order: 1 }}
          md={{ span: 12, order: 1 }}></Col>
      </NavLink>
      ) :

      null
    }
    </Row>
      </div>
    );
  }
}

export default  windowSize(PortfolioSection);
