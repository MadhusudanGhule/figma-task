'use client';

import React from 'react';
import styles from '@/styles/grafterr.module.css';

interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ message = 'Loading...' }) => {
  return (
    <div className={styles.loadingContainer} role="status" aria-live="polite">
      <div style={{ textAlign: 'center' }}>
        <div className={styles.spinner} />
        <p
          style={{
            marginTop: '16px',
            color: '#6B7280',
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
};
