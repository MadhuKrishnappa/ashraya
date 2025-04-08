import { Image } from "./image";
import React, { useState } from "react";

export const Gallery = (props) => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Transforming spaces into timeless works of art, we specialize in creating bespoke interiors that reflect your personality and lifestyle.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />

                  

                  
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};


// Styles
const styles = {
  container: {
    padding: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '15px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  gridImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'scale(1.02)',
    },
  },
  modalOverlay: {
    position: 'fixed',
    top: 25,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    position: 'relative',
    maxWidth: '90%',
    maxHeight: '90%',
  },
  modalImage: {
    maxWidth: '100%',
    maxHeight: '80vh',
    borderRadius: '8px',
  },
  closeButton: {
    position: 'absolute',
    top: '-30px',
    right: '-30px',
    color: 'white',
    fontSize: '40px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s',
    ':hover': {
      color: '#ccc',
    },
  },
};
