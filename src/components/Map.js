// yes

import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'


const Map = ({ center, zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys= {{ key: 'AIzaSyAE7idgWTmvdPfyNdSz16e9ln4mzffbKmU'}}
            defaultCenter={ center }
            defaultZoom={ zoom }
            >
                <LocationMarker lat={center.lat} lng={center.lng} />
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
