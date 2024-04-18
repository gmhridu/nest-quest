import Banner from '../../components/Banner/Banner';
import EstateData from '../../components/EstateData/EstateData';
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre';
import { useLoaderData } from 'react-router-dom';
import MeetOurTeam from '../../components/MeetOurTeam/MeetOurTeam';
import Loader from '../../components/Loader/Loader';
import { useCallback, useContext} from 'react';
import { DataContext } from '../../Providers/DataProviders';


const Home = () => {
  


 const { data, loading } = useContext(DataContext);

  console.log(data);
  
   const scrollToEstateData = useCallback(() => {
     const estateDataElement = document.getElementById("estateData");
     if (estateDataElement) {
       estateDataElement.scrollIntoView({ behavior: "smooth", block: "start" });
     }
   }, []);

  

   if (loading) {
     return <Loader />; 
  } 
 
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
      <Banner jsonData={data} scrollToEstateData={scrollToEstateData} />
      <WhoWeAre />
      <div id="estateData">
        <EstateData jsonData={data} />
      </div>
      <MeetOurTeam jsonData={data} />
    </div>
  );
};

export default Home;