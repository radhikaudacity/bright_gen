import DisplayProjectThumbs from './DisplayProjectThumbs';
import CarouselHeader from './CarouselHeader';
import projectsData from '../assets/projectsData.js';

const Home = () => {
  return (
    <div>
      <CarouselHeader />
      <div className='central-wrapper'>
        <DisplayProjectThumbs projectData={projectsData} />
      </div>
    </div>
  );
};
export default Home;
