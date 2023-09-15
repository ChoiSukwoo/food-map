import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import { LatLng } from '@typings/store';
import { NaverMap } from '@typings/map';
import { INITIAL_CENTER, INITIAL_ZOOM } from '@hooks/useMapOptions';
import { MapStyle } from './style';

type Props = {
  mapId?: string;
  initialCenter?: LatLng;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
};

const Map = ({ mapId = 'map', initialCenter = INITIAL_CENTER, initialZoom = INITIAL_ZOOM, onLoad }: Props) => {
  const mapRef = useRef<NaverMap | null>(null);

  const initializeMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };

    /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html */
    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    if (onLoad) {
      onLoad(map);
    }
  };

  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <MapStyle id={mapId} />
    </>
  );
};

export default Map;
