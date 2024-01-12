'use client'

import { useEffect, useState } from 'react'
import Loading from '../components/loading';
import ComingSoon from './mainPage';

export default function ComingSoonPage() {
  const [loadingState, setLoadingState] = useState(100);
  const [ loadingDone, setLoadingDone ] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
        setLoadingState(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setLoadingDone(true)
            return prev;
          }
          return prev - 1;
        });
      }, 50);
    return () => clearInterval(interval);
}, []
)

  if(!loadingDone) {
    return <Loading loadingState={loadingState} />
  }
  return (
    <main className="">
      <ComingSoon />
    </main>
  )
}
