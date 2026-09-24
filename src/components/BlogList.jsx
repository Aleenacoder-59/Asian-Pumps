// src/components/BlogList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogs } from '../blogs'; 

const BlogList = () => {
  return (
    <>
      <Helmet>
        <title>Blogs & Insights | Asian Pumps Pakistan</title>
        <meta name="description" content="Read the latest news, buying guides, and technical insights on submersible, centrifugal, and industrial water pumps in Pakistan from Asian Pumps." />
        <link rel="canonical" href="https://asianpumpspk.com/blog" />
      </Helmet>

      <style>{`
        .sub-badge {
          color: #1d4ed8;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 0.85rem;
        }
        .heading-underline {
          width: 60px;
          height: 4px;
          background-color: #2fd838;
          border-radius: 2px;
        }
        .blog-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.1) !important;
        }
        .btn-read-more {
          background-color: #2fd838;
          color: #ffffff;
          font-weight: 600;
          border: none;
        }
        .btn-read-more:hover {
          background-color: #26b32e;
          color: #ffffff;
        }
      `}</style>

      <section className="py-5 bg-light">
        <div className="container py-3" style={{ maxWidth: '1100px' }}>
          
          <div className="text-center mb-5">
            <span className="sub-badge d-block mb-2">Our Latest News &amp; Articles</span>
            <h1 className="fw-black text-dark display-6 mb-3">
              Asian Pumps <span style={{ color: '#2fd838' }}>Blogs</span>
            </h1>
            <div className="heading-underline mx-auto"></div>
          </div>

          <div className="row g-4">
            {blogs.map((post) => (
              <div className="col-md-6 col-lg-4" key={post.id}>
                <div className="card h-100 border-0 shadow-sm blog-card rounded-3 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="card-img-top" 
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column p-4">
                    <div className="d-flex justify-content-between text-muted small mb-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="card-title h5 fw-bold text-dark mb-3">
                      {post.title}
                    </h2>
                    <p className="card-text text-secondary small flex-grow-1 lh-base">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="btn btn-read-more w-100 mt-3 py-2 rounded-2"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default BlogList;