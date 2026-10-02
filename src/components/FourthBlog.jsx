import React from 'react';
import { Helmet } from 'react-helmet-async';
import blog4Image from '../assets/TurbinBlog.jpeg'; 
const FourthBlog = () => {
  const faqs = [
    {
      q: "What is a turbine pump used for?",
      a: "A turbine pump lifts water from deep wells and bores. People use it for farms, factories, housing societies, and large buildings."
    },
    {
      q: "How deep can a turbine pump lift water?",
      a: "It can lift water from very deep bores, much deeper than a shallow pump. The exact depth depends on the pump size and the number of impellers."
    },
    {
      q: "How do I know which pump size I need?",
      a: "Check your bore width, water depth, and daily water need. Share these details with us, and we will suggest the right size."
    },
    {
      q: "How often should I service my turbine pump?",
      a: "Do a quick check every month and a full inspection once a year. Regular care helps the pump last longer."
    }
  ];

  const metaTitle = "Turbine Pump in Lahore: What to Know Before You Buy";
  const metaDescription = "Planning to buy a turbine pump in Lahore? Check depth, bore size, motor type, and supplier tips first. Get expert help from Asian Pumps today.";
  const canonicalUrl = "https://asianpumpspk.com/blog/turbine-pump-in-lahore-buying-guide";
  const imageUrl = "https://asianpumpspk.com/TurbineBlog.jpeg"; // copy the image into /public too

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
    "headline": "Everything You Need to Know Before Buying a Turbine Pump in Lahore",
    "description": metaDescription,
    "image": imageUrl,
    "author": { "@type": "Organization", "name": "Asian Pumps Pvt. Ltd." },
    "publisher": {
      "@type": "Organization",
      "name": "Asian Pumps Pvt. Ltd.",
      "logo": { "@type": "ImageObject", "url": "https://asianpumpspk.com/Asian-pumps-logo.png" }
    },
    "datePublished": "2026-10-02",
    "dateModified": "2026-10-02"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  const Underline = ({ center }) => (
    <div className={`heading-underline mb-4 ${center ? 'mx-auto' : ''}`}></div>
  );

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
        .text-accent-green { color: #2fd838 !important; }
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

      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={imageUrl} />

        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <article className="py-5 bg-white" id="blog-article-4">
        <div className="container py-3" style={{ maxWidth: '900px' }}>

          <header className="mb-5 text-center">
            <span className="sub-badge d-block mb-2">Buying Guide</span>
            <h1 className="fw-black text-dark display-5 mb-3">
              Everything You Need to Know Before Buying a <span style={{ color: '#2fd838' }}>Turbine Pump in Lahore</span>
            </h1>
            <div className="heading-underline mx-auto mb-4"></div>

            <p className="text-muted fs-5 lh-base text-start mt-4">
              <a href="https://asianpumpspk.com/" target="_blank" rel="noopener noreferrer" className="fw-semibold text-decoration-none" style={{ color: '#1d4ed8' }}>Turbine pump in Lahore</a> buyers face one big problem: too many choices and too little clear advice. Pick the wrong pump and you waste money, lose water, and pay for repairs every few months. Pick the right one and your farm, factory, or housing society gets steady water for years.
            </p>
            <p className="text-muted fs-6 text-start">
              At <strong>Asian Pumps</strong>, we help customers make this choice every day. This guide shares what we want you to know before you buy.
            </p>
          </header>

          <div className="mb-5 text-center">
            <img
              src={blog4Image}
              alt="Turbine Pump in Lahore Buying Guide"
              className="img-fluid rounded-3 shadow-sm w-100"
              style={{ maxHeight: '480px', objectFit: 'cover' }}
            />
          </div>

          <hr className="my-5" />

          {/* What Is a Turbine Pump */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              What Is a <span style={{ color: '#2fd838' }}>Turbine Pump?</span>
            </h2>
            <Underline />
            <p className="text-secondary lh-lg">
              A turbine pump lifts water from deep underground and pushes it to the surface. It uses a stack of spinning wheels, called impellers, inside a long vertical pipe. Each impeller adds more pressure, so the water climbs even from a very deep well.
            </p>
            <p className="text-secondary lh-lg">
              You may hear people call it a vertical turbine pump, a deep well pump, or a tubewell pump. All these names point to the same kind of machine. Among water pumps in Pakistan, this type stands out for lifting water from great depth.
            </p>
          </section>

          {/* Why Lahore */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              Why Lahore Needs <span style={{ color: '#2fd838' }}>Deep Water Pumps</span>
            </h2>
            <Underline />
            <p className="text-secondary lh-lg">
              The water level in Lahore keeps dropping. Many areas now need deeper bores to reach clean water. A shallow pump cannot reach that depth, but a turbine pump can.
            </p>
            <p className="fw-bold text-dark mb-2">People use a turbine pump in Lahore for:</p>
            <ul className="list-group list-group-flush mb-4">
              {[
                'Farms and orchards',
                'Factories and industrial units',
                'Housing societies and apartment blocks',
                'Plazas and commercial buildings',
                'Community water supply projects'
              ].map((item) => (
                <li key={item} className="list-group-item bg-transparent ps-0 text-secondary">🔹 {item}</li>
              ))}
            </ul>
          </section>

          {/* Key Things */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              Key Things to Check <span style={{ color: '#2fd838' }}>Before You Buy</span>
            </h2>
            <Underline />

            <h3 className="fw-bold text-dark h5 mt-4 mb-2">1. Know Your Water Depth</h3>
            <p className="text-secondary lh-lg">
              Measure the depth of your bore and the water level inside it. The pump must sit below the lowest water level. If it runs dry, the motor burns out fast. Never guess this number.
            </p>

            <h3 className="fw-bold text-dark h5 mt-4 mb-2">2. Decide How Much Water You Need</h3>
            <p className="text-secondary lh-lg">
              Work out your daily water use. A farm needs a different flow rate than a small workshop. Tell your seller two numbers: the flow you need and the height the water must climb. Good dealers use these two numbers to pick the right pump.
            </p>

            <h3 className="fw-bold text-dark h5 mt-4 mb-2">3. Measure Your Bore Size</h3>
            <p className="text-secondary lh-lg">
              The pump must fit inside your borewell. A pump that is too wide will jam. A pump that is too small will waste power and give weak flow. Check the bore width before you order.
            </p>

            <h3 className="fw-bold text-dark h5 mt-4 mb-2">4. Choose the Right Motor</h3>
            <p className="text-secondary lh-lg mb-2">You have a few choices:</p>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item bg-transparent ps-0 text-secondary">✔ <strong>Electric motor:</strong> Works best where the power supply stays steady.</li>
              <li className="list-group-item bg-transparent ps-0 text-secondary">✔ <strong>Diesel engine:</strong> Helps in areas with long power cuts.</li>
              <li className="list-group-item bg-transparent ps-0 text-secondary">✔ <strong>Solar power:</strong> Many farm owners now use it to cut running costs.</li>
            </ul>

            <h3 className="fw-bold text-dark h5 mt-4 mb-2">5. Look at the Build Quality</h3>
            <p className="text-secondary lh-lg">
              Some water in Lahore carries sand and minerals. These wear down weak parts quickly. Strong materials like cast iron and stainless steel last longer. Ask your seller what material the maker used for the impellers and the shaft.
            </p>
          </section>

          {/* Turbine vs Submersible */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              Turbine Pump vs <span style={{ color: '#2fd838' }}>Submersible Pump</span>
            </h2>
            <Underline />
            <p className="text-secondary lh-lg">
              Many buyers ask us which one is better. The answer depends on your job.
            </p>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item bg-transparent ps-0 text-secondary">
                ✔ <strong>Vertical turbine pump:</strong> The motor sits above the ground, so you can reach it easily for repairs. It suits big jobs and long daily running hours.
              </li>
              <li className="list-group-item bg-transparent ps-0 text-secondary">
                ✔ <strong>Submersible pump:</strong> The motor sits underwater. It suits homes and lighter use.
              </li>
            </ul>
            <p className="text-secondary lh-lg">
              If you need a lot of water every day, a turbine pump is usually the safer pick.
            </p>
          </section>

          {/* Supplier */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              How to Choose a <span style={{ color: '#2fd838' }}>Reliable Supplier</span>
            </h2>
            <Underline />
            <p className="text-secondary lh-lg">
              The seller matters as much as the pump. Before you pay, check these points:
            </p>
            <ul className="list-group list-group-flush mb-3">
              {[
                'Does the seller visit your site and size the pump for you?',
                'Do they keep spare parts in stock?',
                'Do they offer a clear warranty?',
                'Do they help with installation and repairs?',
                'What do past customers say about them?'
              ].map((item) => (
                <li key={item} className="list-group-item bg-transparent ps-0 text-secondary">✔ {item}</li>
              ))}
            </ul>
            <p className="text-secondary lh-lg">
              When you shop for water pumps in Pakistan, spare parts and service can matter more than the pump brand. A great pump with no repair support becomes a problem the day it stops.
            </p>
          </section>

          {/* Mistakes */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              Common Mistakes <span style={{ color: '#2fd838' }}>to Avoid</span>
            </h2>
            <Underline />
            <p className="text-secondary lh-lg">We see the same mistakes again and again. Avoid these:</p>
            <ul className="list-group list-group-flush mb-4">
              {[
                'Buying the cheapest pump without checking quality',
                'Skipping the depth and bore measurement',
                'Picking a motor that does not match the pump',
                'Hiring an installer with no real experience',
                'Ignoring the pump until it breaks'
              ].map((item) => (
                <li key={item} className="list-group-item bg-transparent ps-0 text-secondary">⚠️ {item}</li>
              ))}
            </ul>
          </section>

          {/* Maintenance */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              Simple <span style={{ color: '#2fd838' }}>Maintenance Tips</span>
            </h2>
            <Underline />
            <p className="text-secondary lh-lg">A little care keeps your pump running longer. Follow these steps:</p>
            <ul className="list-group list-group-flush mb-3">
              {[
                'Check the bearings and grease them on time',
                'Listen for strange noise or shaking',
                'Watch for a drop in water flow or pressure',
                'Inspect cables and the control panel',
                'Book a full check once a year'
              ].map((item) => (
                <li key={item} className="list-group-item bg-transparent ps-0 text-secondary">✔ {item}</li>
              ))}
            </ul>
            <p className="text-secondary lh-lg">
              Small checks catch small faults before they turn into big repair bills.
            </p>
          </section>

          {/* Why Choose Us */}
          <section className="mb-5 p-4 rounded-3 bg-light border">
            <span className="sub-badge d-block mb-1">Why Choose Us</span>
            <h2 className="fw-bold text-dark h3 mb-2">
              Why Choose Asian Pumps for Your <span className="text-accent-green">Turbine Pump in Lahore</span>
            </h2>
            <Underline />
            <p className="text-secondary lh-lg mb-0">
              We do not just sell a pump and walk away. We ask about your bore, your water need, and your budget. Then we suggest a pump that fits your job. We guide you from sizing to installation, and we stay available when you need help later.
            </p>
          </section>

          {/* Conclusion */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">Conclusion</h2>
            <Underline />
            <p className="text-secondary lh-lg">
              Buying a turbine pump in Lahore gets easy when you know your water depth, flow need, and bore size. Choose strong materials, a matching motor, and a seller who supports you after the sale. At Asian Pumps, we help you pick the right pump from our range of water pumps in Pakistan. Call us today or visit our website to get expert advice and a quote for your project.
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
                    <h3 className="fw-bold text-dark mb-3 h6">{faq.q}</h3>
                    <p className="text-secondary mb-0 small lh-base">{faq.a}</p>
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

export default FourthBlog;