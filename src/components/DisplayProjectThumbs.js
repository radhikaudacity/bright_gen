import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DisplayProjectThumbs.css';

import logo from '../images/logo.jpg';

const DisplayProjectThumbs = (props) => {
  const [mouseOver, setSMouseOver] = useState(-1);
  console.log(props.projectData);
  const projectData = props.projectData;
  const projTitles = projectData.map((item) => {
    return [item.title1, item.title2];
  });

  return (
    <div className='display-thumbs-wrapper'>
      <div className='projects-main ' id='projectsRef'>
        <h2 className='centre-title'>
          Explore Our
          <span style={{ color: '#fca510', textAlign: 'center' }}>
            {' '}
            Products
          </span>
        </h2>
        <h4 className='subtitle'>Lorem epsum....</h4>
        <div className=''>
          <div className='portfolio-items-wrapper'>
            {projTitles.map((name, index) => {
              const ipath = projectData[index].thumbImage;
              console.log('ipath' + ipath);
              return (
                // className={`btn ${index === selected && 'active-btn'}`}
                <div className='flex-wrap' key={index}>
                  <div
                    className={`portfolio-item-wrapper `}
                    onMouseOver={() => setSMouseOver(index)}
                    onMouseOut={() => setSMouseOver(-1)}
                  >
                    <Link
                      to={{ pathname: `/projectInfo/${index + 1}` }}
                      className=''
                    >
                      <div
                        className={`portfolio-img-bg ${
                          index === mouseOver && 'image-darken'
                        }`}
                        style={{
                          backgroundImage: `url(${projectData[index].thumbImage})`,
                        }}
                      ></div>
                      <div className='img-text-wrapper'>
                        <div
                          className={`logo-wrapper ${
                            index === mouseOver && 'cardtitle-mouseover'
                          }`}
                        >
                          {/* <AiOutlineProject /> */}
                          {index === mouseOver && (
                            <img src={logo} className='logo-thumb' alt='logo' />
                          )}
                        </div>

                        <div
                          className={`cardtitle ${
                            index === mouseOver && 'cardtitle-mouseover'
                          }`}
                        >
                          {name[0]}
                        </div>
                        <div
                          className={`cardtitle ${
                            index === mouseOver && 'cardtitle2-mouseover'
                          } `}
                        >
                          {name[1]}
                        </div>
                        <div
                          className={`cardtitle-sm ${
                            index === mouseOver && 'cardtitle-mouseover'
                          } `}
                        >
                          <br />
                          <br />
                          <p>Click to see more</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProjectThumbs;
