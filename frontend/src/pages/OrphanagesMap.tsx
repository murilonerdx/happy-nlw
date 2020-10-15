import React from 'react';

import mapMarkerImg from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

import '../styles/orphanage-map.css';


function OrphanegeMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="mapMarkerImg" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            <Map
            center={[-23.5983069,-46.6415725]}
            zoom={15}
            style={{ width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
            


        </div>
    );
}

export default OrphanegeMap;