'use client';
import React from 'react';
import TestButton from '@/shared/components/test-button';
import ButtonsWidget from '../widgets/buttons-widget';
export default function Home() {
  return (
    <main className="main-container">
      <h1>tdd-storybook-example</h1>
      <ButtonsWidget />
    </main>
  );
}
