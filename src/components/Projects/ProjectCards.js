import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub, BsChevronLeft, BsChevronRight } from "react-icons/bs";

function ProjectCards(props) {
  const { images, imgPath, title, description, ghLink, isBlog = false } = props;

  // Tentukan apakah menggunakan carousel (multiple images)
  const isCarousel = images && Array.isArray(images) && images.length > 0;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gambar yang akan ditampilkan
  let currentImage = imgPath;
  let showControls = false;

  if (isCarousel) {
    currentImage = images[currentIndex];
    showControls = images.length > 1;
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="project-card-view">
      <div style={{ position: "relative" }}>
        <Card.Img variant="top" src={currentImage} alt="card-img" />
        {showControls && (
          <>
            {/* Tombol panah kiri */}
            <button
              onClick={prevSlide}
              style={{
                position: "absolute",
                left: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.6)",
                border: "none",
                color: "white",
                fontSize: "1.5rem",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 2,
                transition: "0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.8)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.6)")}
            >
              <BsChevronLeft />
            </button>

            {/* Tombol panah kanan */}
            <button
              onClick={nextSlide}
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.6)",
                border: "none",
                color: "white",
                fontSize: "1.5rem",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 2,
                transition: "0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.8)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.6)")}
            >
              <BsChevronRight />
            </button>

            {/* Indikator titik (opsional) */}
            <div
              style={{
                position: "absolute",
                bottom: "8px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "8px",
                zIndex: 2,
              }}
            >
              {images.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: currentIndex === idx ? "#fff" : "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                    transition: "0.2s",
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Button variant="primary" href={ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}
        {/* Jika ingin tambahan tombol demo, bisa ditambahkan di sini */}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;