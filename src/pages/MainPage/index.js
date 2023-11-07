import Banner from '../../api/components/Banner';
import Nav from '../../api/components/Nav';
import requests from '../../api/requests';
import Row from '../../api/components/Row';
import Footer from '../../api/components/Footer';
function App() {
  return (
    <div className="App">
      <Banner/>
      <Row 
        title='NETFLIX ORIGINALS'
        id='NO'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow/>
      <Row  title='Tremding Now' id='TN' fetchUrl={requests.fetchTrending}/>       
      <Row  title='Top Rated' id='TR' fetchUrl={requests.fetchTopRated}/>
      <Row  title='Action Movies' id='AM' fetchUrl={requests.fetchActionMovies}/>       
      <Row  title='Comedy Movies' id='CM' fetchUrl={requests.fetchComedyMovies}/>
      
    </div>
  );
}

export default App;
