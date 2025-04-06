'use client'

import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export const MapBox = () => {
  const mapContainerRef = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [28.8557086, 47.0150665],
      zoom: 17,
      pitch: 60
    })

    const markerEl = document.createElement('div')
    markerEl.className = 'custom-marker'

    markerEl.innerHTML = `
      <img 
        src="/logo/icon.png" 
        alt="Trinko Tattoo" 
        class="w-15 h-15 rounded-full border-2 border-white shadow-lg"
      />
      `

    new mapboxgl.Marker({
      element: markerEl,
      anchor: 'top-right'
    })
      .setLngLat([28.8560486, 47.0150665])
      .setPopup(
        new mapboxgl.Popup().setHTML(`
          <div class="space-y-2">
            <h2 class="font-bold text-lg">Trinko Tattoo</h2>
            <p class="text-gray-600">Strada Albișoara 4, Chișinău</p>
            <a 
              href="https://maps.app.goo.gl/Ns1nSF5DB8Jw1Kew6" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-blue-500 hover:underline focus:outline-none"
            >
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              Открыть в Google Maps
            </a>
          </div>
        `)
      )
      .addTo(map)

    map.on('load', () => {
      map.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        type: 'fill-extrusion',
        paint: {
          'fill-extrusion-color': '#ddd',
          'fill-extrusion-height': ['get', 'height'],
          'fill-extrusion-base': ['get', 'min_height'],
          'fill-extrusion-opacity': 0.6
        }
      })
    })

    return () => {
      map.remove()
    }
  }, [])

  return (
    <section>
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-4xl">Tattoo Salon in Chisinau on the Map</h2>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p>Looking for the best tattoo salon in Chisinau? Visit Trinkotattoo, located right in the heart of the city.</p>
          <p>
            Our talented artists have years of experience and are ready to bring any of your tattoo ideas to life. Whether you’re
            looking for a small, intricate design or a full sleeve, we offer custom tattoos tailored to your style. We prioritize
            cleanliness, safety, and comfort, ensuring you have a memorable experience.
          </p>
        </div>
      </div>

      <div ref={mapContainerRef} className="h-[500px] w-full rounded-xl border border-gray-200 shadow-lg" />
    </section>
  )
}
