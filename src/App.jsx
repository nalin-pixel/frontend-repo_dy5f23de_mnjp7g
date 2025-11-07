import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import { Showcase, Pricing, CallToAction, Footer } from './components/ShowcasePricingCTA';

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
