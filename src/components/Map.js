// yes

import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

// Loop through the location marker and retrieve the data for each event we want to highlight
const Map = ({ eventData, center, zoom }) => {
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return  <LocationMarker lat={ev.geometries[0].coordinates[1]}  lng={ev.geometries[0].coordinates[0]} />
        }
    })


    return (
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys= {{ key: 'AIzaSyAE7idgWTmvdPfyNdSz16e9ln4mzffbKmU'}}
            defaultCenter={ center }
            defaultZoom={ zoom }
            >
               {markers}
                </GoogleMapReact>
        </div>
    )
}

// This location can be edited, it is just a spot in California near common Wildfire zones
Map.defaultProps = {
    center: {
        lat: 42.3265, 
        lng: -122.8756
    },
    zoom: 6
}

export default Map
