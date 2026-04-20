'use client';

import React, { useState } from 'react';
import { FeatureCard } from './FeatureCard';
import styles from '@/styles/grafterr.module.css';

interface Feature {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  label?: string;
}

const FEATURES: Feature[] = [
  {
    id: 'pos',
    title: 'Point of sale',
    imageSrc: '/pos-system.jpg',
    imageAlt: 'Point of sale system interface displaying restaurant menu and pricing',
  },
  {
    id: 'self-service',
    title: 'Self-service',
    imageSrc: '/self-service-kiosk.jpg',
    imageAlt: 'Self-service kiosk interface for customer ordering',
  },
  {
    id: 'kitchen',
    title: 'Kitchen management',
    imageSrc: '/kitchen-management.jpg',
    imageAlt: 'Kitchen management dashboard showing order tracking and status',
  },
];

export const FeaturesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        {/* Decorative Elements */}
        <div className={`${styles.decorativeElement} ${styles.blue} ${styles['top-left']}`} />
        <div className={`${styles.decorativeElement} ${styles.pink} ${styles['top-right']}`} />
        <div className={`${styles.decorativeElement} ${styles.pink} ${styles['middle-right']}`} />

        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            More ways <span className={styles.emphasis}>Grafterr</span> can help you
            <br />
            grow your business
          </h2>
          <p className={styles.sectionDescription}>
            An award-winning, end-to-end restaurant technology & payment platform, designed to streamline food
            service and automate complex, volume operations.
          </p>
          <div className={styles.divider} />
        </div>

        {/* Feature Cards */}
        <div className={styles.cardsContainer}>
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              label={feature.label}
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <nav className={styles.navigationDots} aria-label="Feature carousel navigation">
          {FEATURES.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to feature ${index + 1}`}
              aria-current={index === currentIndex ? 'page' : undefined}
            />
          ))}
        </nav>
      </div>
    </section>
  );
};
