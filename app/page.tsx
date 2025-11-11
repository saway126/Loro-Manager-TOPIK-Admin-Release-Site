
import React from 'react';
import { LandingHero } from './_components/LandingHero';
import { ProductPreview } from './_components/ProductPreview';

export default function HomePage() {
  return (
    <>
      <LandingHero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProductPreview />
      </div>
    </>
  );
}