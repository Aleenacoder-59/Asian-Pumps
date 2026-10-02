import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="py-5 text-center">
      <Helmet>
        <title>Page Not Found | Asian Pumps Pakistan</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="fw-bold">Page not found</h1>
      <p className="text-secondary">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-success">Back to Home</Link>
    </section>
  );
}