'use client';

import React from 'react';
import styles from '@/styles/grafterr.module.css';

interface HeroProps {
  onLearnMore?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLearnMore }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeadline}>
          Looking for a new
          <span className={styles.highlightedText}>
            <span className={styles.pink}>technology provider?</span>
          </span>
        </h1>
        
        <p className={styles.heroSubtitle}>
          Explore our success stories to see how businesses like yours
          have transformed with Grafterr&apos;s technology
        </p>

        <button
          className={styles.ctaButton}
          onClick={onLearnMore}
          aria-label="Learn more about Grafterr"
        >
          Learn more
        </button>
      </div>
    </section>
  );
};
