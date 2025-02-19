'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Map,
  useMapsLibrary,
  useMap,
  APIProvider,
} from '@vis.gl/react-google-maps';
import { RouteDetails, serviceIcons } from '@/data';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const MIN_PRICE = 350;
const PRICE_PER_KM = 1;
const INCLUDED_DISTANCE = 150;

const RouteCalculator: React.FC = () => {
  const [origin, setOrigin] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [routeDetails, setRouteDetails] = useState<RouteDetails | null>(null);
  const [error, setError] = useState<string>('');
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer | null>(null);
  const t = useTranslations('priceCheck');
  const routeDetailsRef = useRef<HTMLDivElement>(null);
  const map = useMap();
  const placesLib = useMapsLibrary('places');
  const directionsLib = useMapsLibrary('routes');

  // Initialize autocomplete
  useEffect(() => {
    if (!placesLib || !map) return;

    // Set up origin autocomplete
    const originInput = document.getElementById(
      'origin-input'
    ) as HTMLInputElement;
    const originAutocomplete = new placesLib.Autocomplete(originInput, {
      fields: ['formatted_address'],
    });

    originAutocomplete.addListener('place_changed', () => {
      const place = originAutocomplete.getPlace();
      if (place.formatted_address) {
        setOrigin(place.formatted_address);
      }
    });

    // Set up destination autocomplete
    const destInput = document.getElementById(
      'destination-input'
    ) as HTMLInputElement;
    const destAutocomplete = new placesLib.Autocomplete(destInput, {
      fields: ['formatted_address'],
    });

    destAutocomplete.addListener('place_changed', () => {
      const place = destAutocomplete.getPlace();
      if (place.formatted_address) {
        setDestination(place.formatted_address);
      }
    });
  }, [placesLib, map]);

  // Initialize directions renderer
  useEffect(() => {
    if (!directionsLib || !map) return;

    const renderer = new directionsLib.DirectionsRenderer({ map });
    setDirectionsRenderer(renderer);

    return () => {
      renderer.setMap(null);
    };
  }, [directionsLib, map]);

  const calculateRoute = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!directionsLib || !origin || !destination) return;

    setError('');
    const directionsService = new directionsLib.DirectionsService();

    try {
      const result = await directionsService.route({
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      if (directionsRenderer && result.routes[0]) {
        directionsRenderer.setDirections(result);
      }

      const route = result.routes[0].legs[0];
      if (route) {
        setRouteDetails({
          distance: route.distance?.text || 'N/A',
          duration: route.duration?.text || 'N/A',
          price: calculatePrice(route.distance?.value || 0),
        });

        // Fit map to route bounds
        if (map && result.routes[0].bounds) {
          map.fitBounds(result.routes[0].bounds);
        }

        if (routeDetailsRef.current) {
          routeDetailsRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }
    } catch (err) {
      setError(
        'Could not calculate route. Please check the addresses and try again.'
      );
      console.error('Error calculating route:', err);
    }
  };

  const calculatePrice = (distance: number) => {
    if (!distance) return 0;
    const distanceInKm = Math.ceil(distance / 1000);

    if (distanceInKm <= INCLUDED_DISTANCE) {
      return MIN_PRICE;
    }

    return MIN_PRICE + (distanceInKm - INCLUDED_DISTANCE) * PRICE_PER_KM;
  };

  return (
    <div className='w-full max-w-4xl mx-auto p-4'>
      <form
        onSubmit={calculateRoute}
        className='mb-4 space-y-10 max-w-lg mx-auto'
      >
        <div className='bg-white/5 px-6 pt-5 pb-6 rounded-md'>
          <label
            htmlFor='origin-input'
            className='block text-xl font-medium mb-1'
          >
            {t('departureLocation')}
          </label>
          <input
            id='origin-input'
            type='text'
            value={origin}
            placeholder=''
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOrigin(e.target.value)
            }
            className='w-full p-2 border-b outline-none'
            required
          />
        </div>

        <div className='bg-white/5 px-6 pt-5 pb-6 rounded-md'>
          <label
            htmlFor='destination-input'
            className='block text-xl font-medium mb-1'
          >
            {t('destinationLocation')}
          </label>
          <input
            id='destination-input'
            type='text'
            value={destination}
            placeholder=''
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDestination(e.target.value)
            }
            className='w-full p-2 border-b outline-none'
            required
          />
        </div>

        <button
          type='submit'
          className='block bg-tran uppercase text-white font-medium text-lg border-1 border-white rounded-md px-5 py-4 mt-10 mx-auto w-fit hover:bg-white hover:text-black transition-all duration-300 cursor-pointer'
          disabled={!origin || !destination}
        >
          {t('calculate')}
        </button>
      </form>

      {error && (
        <div className='mb-4 p-3 bg-red-100 text-red-700 rounded'>{error}</div>
      )}

      {routeDetails && (
        <div
          ref={routeDetailsRef}
          className='mt-10 bg-white/10 px-6 pt-5 pb-6 rounded-md flex items-center justify-between gap-x-10'
        >
          <div>
            <h3 className='text-2xl font-bold mb-2'>
              {t('long-distance-transfers.routeDetails')}:
            </h3>
            <p className='text-lg'>
              {t('long-distance-transfers.distance')} ~ {routeDetails.distance}
            </p>
            <p className='text-lg'>
              {t('long-distance-transfers.duration')} ~ {routeDetails.duration}
            </p>
            <p className='text-lg'>
              {t('long-distance-transfers.price')} ~ {routeDetails.price}€
            </p>
          </div>

          <Link
            href='/contact'
            className='bg-white uppercase text-black font-medium text-lg border-1 border-white rounded-md px-5 py-4 w-fit hover:bg-transparent hover:text-white transition-all duration-300 cursor-pointer'
          >
            {t('reserve')}
          </Link>
        </div>
      )}

      <div className='h-96 border rounded overflow-hidden mt-20'>
        <Map
          defaultCenter={{ lat: 44.812543343319746, lng: 20.401666695447965 }}
          defaultZoom={12}
          gestureHandling={'greedy'}
          disableDefaultUI={false}
        />
      </div>
    </div>
  );
};

const PriceCalculator: React.FC<{
  titleMain: string;
  titleSub: string;
  className?: string;
}> = ({ titleMain, titleSub, className }) => {
  const Icon = serviceIcons['long-distance-transfers'];

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <div className={`flex gap-8 ${className}`}>
        <Icon className='w-40 h-40' />
        <h3 className='text-4xl uppercase whitespace-nowrap pt-6'>
          {titleMain} <span className='text-5xl'>{titleSub}</span>
        </h3>
      </div>
      <RouteCalculator />
    </APIProvider>
  );
};

export default PriceCalculator;
