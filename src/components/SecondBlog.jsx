import React from 'react';
import { Helmet } from 'react-helmet-async';
import blog2Image from '../assets/Centrifugal pumps.jpeg';

const SecondBlog = () => {
  const faqs = [
    {
      q: "What is a centrifugal pump used for?",
      a: "Centrifugal pumps move water or fluids in industrial processes, fire fighting systems, high-rise building water supply, and HVAC or cooling tower circulation. They work well wherever a steady, reliable flow of liquid is needed at moderate to high pressure."
    },
    {
      q: "Which centrifugal pump is best for a fire fighting system?",
      a: "Fire fighting systems typically use a combination of a jockey pump to maintain pressure, a main fire pump for high-volume discharge during a fire, and a standby pump as backup. The right capacity depends on building size, hydrant count, and sprinkler system design."
    },
    {
      q: "How does a centrifugal pump work?",
      a: "A centrifugal pump uses a rotating impeller inside a casing to convert motor energy into kinetic energy, pushing fluid outward through centrifugal force and into the discharge pipe. The faster the impeller spins, the higher the pressure and flow it generates."
    }
  ];

  const canonicalUrl = "https://asianpumpspk.com/blog/centrifugal-pumps-pakistan-industrial-fire-fighting-use";
  const imageUrl = "https://asianpumpspk.com/assets/Centrifugal-pumps.jpeg";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "headline": "Centrifugal Pumps Pakistan: Industrial, Fire Fighting and Commercial Use",
    "description": "Explore centrifugal pumps Pakistan trusts for industrial, fire fighting, and commercial use. Get expert guidance and a free quote from Asian Pumps.",
    "image": imageUrl,
    "author": {
      "@type": "Organization",
      "name": "Asian Pumps Pvt. Ltd."
    },
    "publisher": {
      "@type": "Organization",
      "name": "Asian Pumps Pvt. Ltd.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://asianpumpspk.com/Asian-pumps-logo.png"
      }
    },
    "datePublished": "2026-01-01",
    "dateModified": "2026-10-01"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <style>{`
        .sub-badge {
          color: #1d4ed8;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 0.85rem;
        }
        .text-accent-green {
          color: #2fd838 !important;
        }
        .heading-underline {
          width: 60px;
          height: 4px;
          background-color: #2fd838;
          border-radius: 2px;
        }
        .faq-card {
          transition: all 0.3s ease-in-out;
          border-left: 4px solid transparent;
        }
        .faq-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08) !important;
          border-left: 4px solid #2fd838 !important;
        }
      `}</style>

      {/* SEO Meta Tags */}
      <Helmet>
        <title>Centrifugal Pumps Pakistan: Industrial and Fire Fighting Use</title>
        <meta 
          name="description" 
          content="Explore centrifugal pumps Pakistan trusts for industrial, fire fighting, and commercial use. Get expert guidance and a free quote from Asian Pumps." 
        />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Centrifugal Pumps Pakistan: Industrial and Fire Fighting Use" />
        <meta property="og:description" content="Explore centrifugal pumps Pakistan trusts for industrial, fire fighting, and commercial use." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Centrifugal Pumps Pakistan: Industrial and Fire Fighting Use" />
        <meta name="twitter:description" content="Explore centrifugal pumps Pakistan trusts for industrial, fire fighting, and commercial use." />
        <meta name="twitter:image" content={imageUrl} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Article Body */}
      <article className="py-5 bg-white" id="blog-article-2">
        <div className="container py-3" style={{ maxWidth: '900px' }}>
          
          <header className="mb-5 text-center">
            <span className="sub-badge d-block mb-2">Industrial &amp; Commercial Guide</span>
            <h1 className="fw-black text-dark display-5 mb-3">
              Centrifugal Pumps Pakistan: <span style={{ color: '#2fd838' }}>Industrial, Fire Fighting and Commercial Use</span>
            </h1>
            <div className="heading-underline mx-auto mb-4"></div>
            
            <p className="text-muted fs-5 lh-base text-start mt-4">
              Centrifugal pumps are the backbone of industrial facilities, commercial buildings, and safety systems across Pakistan. Whether managing a manufacturing plant or designing a fire protection system, selecting the right centrifugal pump prevents downtime and operational failures.
            </p>
            <p className="text-muted fs-6 text-start">
              At <strong>Asian Pumps</strong>, we work directly with plant engineers, commercial contractors, and safety compliance teams[cite: 1, 2, 3]. This guide explains pump selection, sizing parameters, and maintenance considerations for commercial and industrial setups.
            </p>
          </header>

          <div className="mb-5 text-center">
            <img 
              src={blog2Image} 
              alt="Centrifugal Pumps Pakistan Industrial and Fire Fighting Use" 
              className="img-fluid rounded-3 shadow-sm w-100"
              style={{ maxHeight: '480px', objectFit: 'cover' }}
            />
          </div>

          <hr className="my-5" />

          {/* Section 1 */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              What Is a Centrifugal Pump and <span style={{ color: '#2fd838' }}>How Does It Work?</span>
            </h2>
            <div className="heading-underline mb-4"></div>

            <p className="text-secondary lh-lg">
              A <a href="https://asianpumpspk.com/" target="_blank" rel="noopener noreferrer" className="fw-semibold text-decoration-none" style={{ color: '#1d4ed8' }}>centrifugal pump in Pakistan</a> converts rotational energy from a motor into kinetic energy via a spinning impeller. As fluid enters the pump suction eye, centrifugal force drives it outward along the impeller vanes, discharging it into the system under higher pressure.
            </p>

            <h3 className="fw-bold text-dark h5 mt-4 mb-3">Single-Stage vs Multi-Stage Centrifugal Pumps</h3>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item bg-transparent ps-0 text-secondary">
                ✔ <strong>Single-Stage Pumps:</strong> Feature a single impeller; ideal for high-flow, low-to-medium pressure transfer applications.
              </li>
              <li className="list-group-item bg-transparent ps-0 text-secondary">
                ✔ <strong>Multi-Stage Pumps:</strong> Feature multiple impellers on a single shaft; suitable for high-head requirements, such as high-rise building water supply or boiler feed operations.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              Types of Centrifugal Pumps <span style={{ color: '#2fd838' }}>Used in Pakistan</span>
            </h2>
            <div className="heading-underline mb-4"></div>

            <h3 className="fw-bold text-dark h5 mt-4 mb-2">End-Suction Centrifugal Pumps</h3>
            <p className="text-secondary lh-lg">
              Compact and versatile, end-suction designs draw liquid along the axial direction and discharge it radially. Commonly applied in HVAC units, washing systems, and light industrial fluid transfer.
            </p>

            <h3 className="fw-bold text-dark h5 mt-4 mb-2">Split-Case Centrifugal Pumps</h3>
            <p className="text-secondary lh-lg">
              Featuring a casing split along the shaft axis, these allow easy access to internal components without disconnecting pipework. Widely specified for large municipal networks and dedicated fire fighting pump skids.
            </p>

            <h3 className="fw-bold text-dark h5 mt-4 mb-2">Vertical Inline Pumps</h3>
            <p className="text-secondary lh-lg">
              Designed with in-line suction and discharge ports, reducing space requirements in commercial mechanical rooms.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              Centrifugal Pumps for <span style={{ color: '#2fd838' }}>Industrial &amp; Fire Fighting Duty</span>
            </h2>
            <div className="heading-underline mb-4"></div>
            <p className="text-secondary lh-lg">
              Industrial applications demand robust construction, specialized mechanical seals, and material compatibility (such as bronze or stainless steel impellers). For fire protection systems, pumps must meet strict flow and pressure output requirements during emergency demands.
            </p>
          </section>

          <hr className="my-5" />

          {/* FAQs */}
          <section className="mb-5" id="faqs">
            <div className="text-center mb-5">
              <span className="sub-badge d-block mb-1">Got Questions?</span>
              <h2 className="fw-bold text-dark h3 mb-2">
                Frequently Asked <span style={{ color: '#2fd838' }}>Questions</span>
              </h2>
              <div className="heading-underline mx-auto"></div>
            </div>

            <div className="row g-4">
              {faqs.map((faq, index) => (
                <div className="col-md-6" key={index}>
                  <div className="p-4 bg-light rounded-3 border h-100 shadow-sm faq-card">
                    <h3 className="fw-bold text-dark mb-3 h6">
                      {faq.q}
                    </h3>
                    <p className="text-secondary mb-0 small lh-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </article>
    </>
  );
};

export default SecondBlog;