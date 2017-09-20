import * as React from 'react';
import { PrimaryButton, SecondaryButton } from 'teams-react-component';

export const ButtonSection: React.StatelessComponent = () => (
  <div>
    <h1>Buttons</h1>
    <h2>Primary</h2>
    <PrimaryButton />
    <PrimaryButton disabled={true} />
    <h2>Secondary</h2>
    <SecondaryButton />
    <SecondaryButton disabled={true} />
  </div>
);