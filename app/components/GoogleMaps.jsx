'use client'

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

const GoogleMaps = () => {

    const mapRef = useRef(null)

    useEffect(() => {
        const initMap = async () => {
            console.log('Map init')
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
                version: 'weekly'
            });

            const  { Map } = await loader.importLibrary('maps');

            const position = {
                lat: -26.088128,
                lng: 28.090300
            }
            // init a marker 
            const { Marker } = await loader.importLibrary('marker')

            // map options
            const mapOption = {
                center: position,
                zoom: 17,
                mapId: 'MY_NEXTJS_MAPID'

            }

            // setup the map
            const map = new Map( mapRef.current, mapOption)

            //place a marker
            const marker = new Marker({
                map: map,
                position: position
            })
        }

        initMap()
    },[])



    return (
        <div>
            <div className="h-[600px]" ref={mapRef}></div>
        </div>
    );
}
 
export default GoogleMaps;