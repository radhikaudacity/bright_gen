import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../assets/projectsData';
import './ProjectDetail.css';

import ProjectsSubMenu from './ProjectsSubMenu';
import ProjectsSubMenuSmall from './ProjectsSubMenuSmall';

function ProjectDetail(props) {
  const params = useParams();
  const index = params.id - 1;
  const ipath = projectData[index].image;
  const [navclicked, setNavclicked] = useState(false);
  return (
    <div className='projectDetail-wrapper'>
      <div className='small-menu'>
        <ProjectsSubMenuSmall id={index} projectData={projectData} />
      </div>
      <div className='left'>
        <ProjectsSubMenu
          id={index}
          projectData={projectData}
          setNavclicked={setNavclicked}
        />
      </div>

      <div className='right '>
        {/* -------------image --------------*/}
        <div>
          {<h2 className='projTitle'> {projectData[index].title2} </h2>}
          <img
            // src={window.location.origin + ipath}
            src={ipath}
            className='projImg'
            alt={'projImg' + (index + 1)}
          />
        </div>
        <div>
          <table className='summaryTable item-wrapper'>
            <tbody>
              {console.log(Object.keys(projectData[index]['detail']))}
              {Object.keys(projectData[index]['detail']).map((key, i) => (
                <tr>
                  <td className='summaryTableHeading'>{key}:</td>
                  <td className='summaryTableHDetail'>
                    {projectData[index]['detail'][key]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
