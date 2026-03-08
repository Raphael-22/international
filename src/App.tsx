/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import FloatingParticles from './components/FloatingParticles';
import Hero from './components/Hero';
import Extraordinary from './components/Extraordinary';
import DeservesWorld from './components/DeservesWorld';
import Significance from './components/Significance';
import Appreciation from './components/Appreciation';
import Apology from './components/Apology';
import Trust from './components/Trust';
import InteractiveExperience from './components/InteractiveExperience';
import Gallery from './components/Gallery';
import Ending from './components/Ending';

/*
  📝 HOW TO CUSTOMIZE THIS WEBSITE:
  - To change the text, open the respective component file in the `src/components` folder.
  - To change the photos, open `src/components/Gallery.tsx` and `src/components/DeservesWorld.tsx`.
  - To change the colors, open `src/index.css`.
*/

export default function App() {
  return (
    <>
      <FloatingParticles />
      <Hero />
      <Extraordinary />
      <DeservesWorld />
      <Significance />
      <Appreciation />
      <Apology />
      <Trust />
      <InteractiveExperience />
      <Gallery />
      <Ending />
    </>
  );
}
