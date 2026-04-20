'use client';

import React, { useState, Suspense } from 'react';
import { Hero } from '@/components/Hero';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { LoadingState } from '@/components/LoadingState';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLearnMore = () => {
    setIsLoading(true);
    // Simulate a call or navigation
    setTimeout(() => {
      setIsLoading(false);
      alert('Thank you for your interest! Connecting you to our team...');
    }, 1500);
  };

  if (isLoading) {
    return <LoadingState message="Preparing content..." />;
  }

  return (
    <ErrorBoundary>
      <main style={{ background: '#FFFFFF' }}>
        <Suspense fallback={<LoadingState />}>
          <Hero onLearnMore={handleLearnMore} />
        </Suspense>

        <Suspense fallback={<LoadingState />}>
          <FeaturesSection />
        </Suspense>
      </main>
    </ErrorBoundary>
  );
}
