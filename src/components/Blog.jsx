import React from 'react';
import { Helmet } from 'react-helmet-async';
import blog1Image from '../assets/Submersible pumps.jpeg';

const Blog = () => {
  const faqs = [
    {
      q: "Which submersible pump is best for a tubewell in Pakistan?",
      a: "For agricultural tubewells, 5HP to 15HP sand-resistant submersible pumps with multi-stage impellers work best, depending on well depth and required water discharge. Deeper wells beyond 200 feet need higher HP and stronger cable ratings."
    },
    {
      q: "How many HP submersible pump do I need for my farm/home?",
      a: "HP depends on well depth and required flow rate. Shallow domestic borewells under 100 feet typically need 1-3HP, while agricultural tubewells between 150 and 400+ feet need 5-15HP or more. A proper calculation should factor in total dynamic head and discharge requirement."
    },
    {
      q: "How deep can a submersible pump be installed?",
      a: "Standard submersible pumps operate at depths ranging from 50 feet to over 1000 feet, depending on the model and stage configuration. Multi-stage impeller pumps are built specifically for deep-well extraction."
    },
    {
      q: "What is the average submersible pump price in Pakistan?",
      a: "Prices vary by HP, brand, and build quality. Smaller residential pumps start lower, while industrial and agricultural pumps with higher HP cost more. Cable length, control panel, and stainless steel versus cast iron body also affect the final price."
    },
    {
      q: "How long does a submersible pump installation take?",
      a: "A standard borewell installation typically takes a few hours to a full day, depending on well depth, casing condition, and whether you need a new control panel or wiring setup."
    },
    {
      q: "How long do submersible pumps last?",
      a: "With proper installation and regular maintenance, including dry-run protection, voltage stabilization, and periodic servicing, a quality submersible pump can last several years to well over a decade before it needs a major overhaul."
    },
    {
      q: "What causes a submersible pump to fail early?",
      a: "Common causes include running the pump dry, voltage fluctuations without a stabilizer, incorrect HP selection for the well, sand or silt damage without sand-resistant design, and poor cable or wiring installation."
    },
    {
      q: "Submersible pump vs turbine pump — which is better?",
      a: "Submersible pumps suit deep wells with limited space and lower upfront cost, while turbine pumps suit very large-scale, high-volume irrigation with a vertical shaft setup above ground. The right choice depends on your well depth, water volume needs, and budget."
    }
  ];

  return (
    <>
      {/* Custom Styles for Heading Colors & FAQ Hover */}
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

      {/* 1. SEO Meta Tags */}
      <Helmet>
        <title>Submersible Pumps in Pakistan: Buying and Installation Guide</title>
        <meta 
          name="description" 
          content="Complete guide to submersible pumps in Pakistan types, HP selection, and installation tips. Get expert advice from Asian Pumps today." 
        />
        <meta property="og:title" content="Submersible Pumps in Pakistan: Buying and Installation Guide" />
        <meta 
          property="og:description" 
          content="Complete guide to submersible pumps in Pakistan types, HP selection, and installation tips. Get expert advice from Asian Pumps today." 
        />
        <meta property="og:type" content="article" />
        
        <link rel="canonical" href="https://asianpumpspk.com/blog/submersible-pumps-in-pakistan-buying-guide" />
      </Helmet>

      {/* 2. Main Article Content */}
      <article className="py-5 bg-white" id="blog-article">
        <div className="container py-3" style={{ maxWidth: '900px' }}>
          
          {/* Main Title (H1) */}
          <header className="mb-5 text-center">
            <span className="sub-badge d-block mb-2">
              Buying &amp; Installation Guide
            </span>
            <h1 className="fw-black text-dark display-5 mb-3">
            Submersible Pumps in Pakistan:   <span style={{ color: '#2fd838' }}>Complete Buying and Installation Guidee</span>
            </h1>
            <div className="heading-underline mx-auto mb-4"></div>
            
            <p className="text-muted fs-5 lh-base text-start mt-4">
              The submersible pumps in Pakistan is one of the smartest investments you can make for your farm, home, or industry. If you deal with low water tables, deep borewells, or unreliable water supply, this guide will help you understand everything before you buy or install one.
            </p>
            <p className="text-muted fs-6 text-start">
              At Asian Pumps, we get calls every day from farmers, homeowners, and industry owners who ask the same questions. Which pump fits my well? How much power do I need? What goes wrong during installation? This guide answers all of it in plain, simple language.
            </p>
          </header>

          {/* Featured Article Image */}
          <div className="mb-5 text-center">
            <img 
              src={blog1Image} 
              alt="Submersible Pumps in Pakistan Buying and Installation Guide" 
              className="img-fluid rounded-3 shadow-sm w-100"
              style={{ maxHeight: '480px', objectFit: 'cover' }}
            />
          </div>

          <hr className="my-5" />

          {/* Section 1: What is a Submersible Pump */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              What Is a Submersible Pump &amp; <span style={{ color: '#2fd838' }}>How It Works</span>
            </h2>
            <div className="heading-underline mb-4"></div>

            <p className="text-secondary lh-lg">
              The  <a href="https://asianpumpspk.com/" target="_blank" rel="noopener noreferrer" className="fw-semibold text-decoration-none" style={{ color: '#1d4ed8' }}>submersible pumps in Pakistan</a> sits fully underwater, inside a borewell or tank, and pushes water up through a pipe to the surface. Unlike other pumps that pull water, a submersible pump pushes it, which makes it far more efficient for deep wells.
            </p>
            <p className="text-secondary lh-lg">
              The pump has a sealed motor connected to a series of impellers. Once you switch it on, the motor spins the impellers, and they force water upward through the pipe. Since the whole unit stays submerged, it stays cool and runs quietly.
            </p>

            <h3 className="fw-bold text-dark h5 mt-4 mb-3">
              Multi-Stage Impeller Technology Explained
            </h3>
            <p className="text-secondary lh-lg">
              Most submersible water pumps use multiple impeller stages stacked on top of each other. Each stage adds more pressure to the water before passing it to the next one.
            </p>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item bg-transparent ps-0 text-secondary">
                ✔ <strong>More stages</strong> mean more lifting power for deeper wells.
              </li>
              <li className="list-group-item bg-transparent ps-0 text-secondary">
                ✔ <strong>Each stage</strong> boosts pressure without needing a bigger motor.
              </li>
              <li className="list-group-item bg-transparent ps-0 text-secondary">
                ✔ <strong>This design</strong> lets the pump reach depths a single-stage pump cannot handle.
              </li>
            </ul>

            <h3 className="fw-bold text-dark h5 mt-4 mb-3">
              Submersible vs Surface Pumps: Key Differences
            </h3>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item bg-transparent ps-0 text-secondary">
                🔹 <strong>A surface pump</strong> sits above ground and pulls water up, so it struggles once the well gets too deep.
              </li>
              <li className="list-group-item bg-transparent ps-0 text-secondary">
                🔹 <strong>A submersible pump</strong> sits inside the water and pushes it up, so it handles depth much better.
              </li>
              <li className="list-group-item bg-transparent ps-0 text-secondary">
                🔹 <strong>Submersible pumps</strong> run silently because water around them muffles the sound.
              </li>
            </ul>
          </section>

          {/* Section 2: Types */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              Types of <span style={{ color: '#2fd838' }}>Submersible Pumps</span>
            </h2>
            <div className="heading-underline mb-4"></div>

            <h3 className="fw-bold text-dark h5 mt-4 mb-2">Borewell / Tubewell Submersible Pumps</h3>
            <p className="text-secondary lh-lg">
              These are the most common type of tubewell water pump in Pakistan. Farmers use them to draw water from deep agricultural wells for irrigation.
            </p>

            <h3 className="fw-bold text-dark h5 mt-4 mb-2">Sewage &amp; Wastewater Submersible Pumps</h3>
            <p className="text-secondary lh-lg">
              These pumps move dirty water, sludge, or waste instead of clean water for housing societies and industrial plants.
            </p>

            <h3 className="fw-bold text-dark h5 mt-4 mb-2">Sand-Resistant Submersible Pumps</h3>
            <p className="text-secondary lh-lg">
              Uses hardened components that resist wear from sand or silt content in the water table.
            </p>
          </section>

          {/* Section 3: Buying Guide */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              How to Choose <span style={{ color: '#2fd838' }}>The Right Pump</span>
            </h2>
            <div className="heading-underline mb-4"></div>

            <h3 className="fw-bold text-dark h5 mt-4 mb-2">Calculating HP Based on Well Depth &amp; Water Requirement</h3>
            <p className="text-secondary lh-lg">
              Shallow domestic borewells usually need 1-3HP, while deep agricultural tubewells need 5-15HP+ to lift water efficiently.
            </p>

            <h3 className="fw-bold text-dark h5 mt-4 mb-2">Stainless Steel vs Cast Iron Body</h3>
            <ul>
              <li className="text-secondary mb-2"><strong>Stainless steel bodies</strong> resist rust and corrosion, lasting longer in heavy mineral water.</li>
              <li className="text-secondary mb-2"><strong>Cast iron bodies</strong> cost less upfront but wear down faster in corrosive environments.</li>
            </ul>
          </section>

          {/* Section 4: Price */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              Submersible Pump <span style={{ color: '#2fd838' }}>Price in Pakistan</span>
            </h2>
            <div className="heading-underline mb-4"></div>
            <p className="text-secondary lh-lg">
              Pricing depends on horsepower, brand reputation, cable length, and control panel configurations. Reach out to our team directly for an up-to-date quote tailored to your exact depth requirements.
            </p>
          </section>

          {/* Section 5: Installation Guide */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              Installation <span style={{ color: '#2fd838' }}>Guide</span>
            </h2>
            <div className="heading-underline mb-4"></div>

            <div className="alert alert-warning border-0 shadow-sm rounded-3 p-3">
              <h5 className="fw-bold h6">Common Mistakes to Avoid:</h5>
              <ul className="mb-0 small">
                <li className="mb-1">Installing the pump too shallow, causing dry-run motor burn</li>
                <li className="mb-1">Using cheap undersized cable that leads to voltage drops</li>
                <li className="mb-0">Skipping a voltage stabilizer in high-fluctuation areas</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Maintenance & Lifespan */}
          <section className="mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              Maintenance &amp; <span className="text-accent-green">Lifespan Tips</span>
            </h2>
            <div className="heading-underline mb-4"></div>
            <p className="text-secondary lh-lg">
              Install dry-run protection and voltage stabilizers to ensure your pump serves your farm or home for over a decade.
            </p>
          </section>

          {/* Section 7: Why Asian Pumps */}
          <section className="mb-5 p-4 rounded-3 bg-light border">
            <span className="sub-badge d-block mb-1">Why Choose Us</span>
            <h2 className="fw-bold text-dark h3 mb-2">
              Asian Pumps <span className="text-accent-green">Pakistan</span>
            </h2>
            <div className="heading-underline mb-4"></div>

            <p className="text-secondary lh-lg">
              With 50+ years of manufacturing expertise, direct collaboration with premier Turkish suppliers, and trusted ongoing partnerships with WAPDA and government clients, Asian Pumps delivers reliability built for local conditions.
            </p>
          </section>

          <hr className="my-5" />

          {/* Styled FAQ Grid with Hover Effect */}
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
                    <h5 className="fw-bold text-dark mb-3 h6">
                      {faq.q}
                    </h5>
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

export default Blog;