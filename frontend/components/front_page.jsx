import React from 'react';
import {Link} from 'react-router-dom'

const FrontPage = () => {
  return (
    <div className="body_box">
      <div className="top-image">
        <div className="top-image-content">
          <h2>Discover and share the world's best photos</h2>
          <p>Get inspired with incredible photos from diverse styles and genres
        around the world.  We're notguided by fads - just great photography.</p>
          <button>
            <Link
              to='/signup'
              style={{ color: 'inherit', textDecoration: 'inherit' }}>
              Sign up
            </Link>
          </button>
        </div>
      </div>

      <div className="about-pinhole">
        <h3>What makes us different?</h3>
        <div className="about-content">
          <span className="text-images plant"></span>
      <h4>Grow as a photographer</h4>
          <p>Get immediate exposure with your first upload. Our Pulse algorithm
          surfaces new photographs and photographers, ensuring your photos are seen
      by the community so you receive valuable feedback on day one.</p>
        </div>
        <div className="about-content">
          <span className="text-images ruler"></span>
        <h4>Build your career</h4>
          <p>Present yourself as a professional. Get hired by displaying your
          services, create a Directory listing, showcase the workshops you're
          holding, and create Galleries to highlight your work.</p>
        </div>
        <div className="about-content">
          <span className="text-images statistics">
          </span>
      <h4>See how you're performing</h4>
          <p>With Statistics and Pulse you get valuable insights into how your
          photos are performing and how you rank in comparison to other
      photographers in the community.</p>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <h3>Join our photography community today</h3>
          <p>We want fresh, creative talent like you. Join our global network of
          like-minded creators to be inspired by incredible photos daily, and get
      rewarded for your talents.</p>
          <button>
            <Link 
              to='/signup' 
              style={{ color: 'inherit', textDecoration: 'inherit' }}>
                  Sign up
            </Link>
          </button>
        </div>
      </div>

      <div>
        <footer>
          © Pinhole - 2020
        </footer>
      </div>
    </div>
  );
};

export default FrontPage;