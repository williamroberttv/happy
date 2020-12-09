import mapMarkerImg from '../images/marker.svg'
import '../styles/pages/orphanagesMap.css'
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'

function OrphanagesMap (){
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita ;)</p>
        </header>
        <footer>
          <strong>Maceió</strong>
          <span>Alagoas</span>
        </footer>
      </aside>

      <MapContainer center={[-9.6704705,-35.7385121]}
        zoom={15}
        scrollWheelZoom={false}
        style={{width: "100%" , height:"100%"}}>
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </MapContainer>


      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff"/>
      </Link>
    </div>
  )
}

export default OrphanagesMap;
