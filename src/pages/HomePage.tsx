import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import BeerCarousel from '../components/BeerCarousel';
import FoundedSection from '../components/FoundedSection';
import LocationsSection from '../components/LocationsSection';
import SodaBahiaSection from '../components/SodaBahiaSection';
import EventsSection from '../components/EventsSection';
import SaludSection from '../components/SaludSection';
import { Beer } from '../data/beers';

interface HomePageProps {
  cartCount: number;
  onAddToCart: (beer: Beer) => void;
  badgeRef: React.RefObject<HTMLSpanElement | null>;
}

export default function HomePage({ cartCount, onAddToCart, badgeRef }: HomePageProps) {
  return (
    <>
      <Navbar cartCount={cartCount} badgeRef={badgeRef} />
      <Hero />
      <Ticker />
      <BeerCarousel onAddToCart={onAddToCart} />
      <FoundedSection />
      <LocationsSection />
      <SodaBahiaSection />
      <EventsSection />
      <SaludSection />
    </>
  );
}
