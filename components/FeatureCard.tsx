'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/grafterr.module.css';

interface FeatureCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  label?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  imageSrc,
  imageAlt,
  label,
}) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardImageContainer}>
          {!imageError ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={320}
              height={280}
              className={styles.cardImage}
              priority={false}
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: '#F3F4F6',
                fontSize: '14px',
                color: '#9CA3AF',
              }}
            >
              Image unavailable
            </div>
          )}
          {label && <span className={styles.cardLabel}>{label}</span>}
        </div>

        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </article>
  );
};
