import "./intic.css";
export default function IntiC() {
  return (
    <div>
      <div
        style={{ backgroundColor: "#7A1CAC", width: "100vw", height: "50vh" }}
        id="carouselExampleIndicators"
        className="carousel slide bgintic text-primary-emphasis"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner bg">
          <div className="carousel-item active ">
            <h1 className="fw-bold text-wrap text-center textCrousel text-dark pt-4  ">
              DIGITAL MARKETING
            </h1>
            <div className=" text-center"></div>
          </div>
          <div className="carousel-item">
            <h1 className="fw-bold text-wrap text-center text-dark pt-4">
              SOCIAL MEDIA
            </h1>
            <div className=" text-center"></div>
          </div>
          <div className="carousel-item">
            <h1 className="fw-bold text-wrap text-center text-dark pt-4">
              SEO
            </h1>
            <div className=" text-center"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
