"use client";

import dynamic from 'next/dynamic';

const ClientOnly = dynamic(() => import('../../components/app'), {
  ssr: false,
});

export default ClientOnly;
