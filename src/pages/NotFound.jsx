import { Compass } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" noIndex />
      <section className="container-xl flex min-h-[70vh] flex-col items-center justify-center bg-paper py-20 text-center">
        <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sea-50 text-sea-700">
          <Compass className="h-8 w-8" />
        </span>
        <p className="mb-2 text-caption font-semibold uppercase tracking-widest text-charcoal-muted">Error 404</p>
        <h1 className="mb-4 text-3xl font-semibold text-charcoal sm:text-4xl">
          This page has moved, or never existed.
        </h1>
        <p className="mb-8 max-w-md text-charcoal-muted">
          Double-check the address, or head back to the homepage to find what you were looking for.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button to="/contact" variant="soft" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
