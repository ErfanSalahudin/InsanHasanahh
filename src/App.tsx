import { Hero } from './components/Hero';
import { About } from './components/About';
import { Facilities } from './components/Facilities';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Facilities />
      <Gallery />
      <Location />
      <Registration />
      <Footer />
    </div>
  );
}
