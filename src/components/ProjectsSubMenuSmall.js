import React, { useState, useEffect } from 'react';

import './ProjectsSubMenuSmall.css';
import { Link } from 'react-router-dom';
function ProjectsSubMenu(props) {
  const projectData = props.projectData;
  const [selected, setSelected] = useState(0);

  const titlesArray = projectData.map((item) => {
    return [item.title1, item.title2];
  });

  useEffect(() => {
    setSelected(props.id);
    window.scrollTo(0, 0);
  }, [props.id]);

  return (
    <div className='submenu-small'>
      <h3 className='center'>Products</h3>
      <ul>
        {titlesArray.map((name, index) => {
          return (
            <li
              key={index}
              className={`btn ${index === selected && 'active-btn'}`}
              onClick={() => setSelected(index)}
            >
              <Link to={`/projectinfo/${index + 1}`}>Product {index + 1}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectsSubMenu;
