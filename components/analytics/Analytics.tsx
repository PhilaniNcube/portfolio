'use client';

import { useEffect } from 'react';
import analytics from '../../utils/analytics';

export default function Analytics() {
  useEffect(() => {
    analytics.page();
  }, []);

  return null;
}
