import Cardsc from "./scard";
import "./s.css";

export default function Second() {
  const cards = [
    {
      head: "SEO",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
    praesentium soluta natus impedit excepturi laborum cum!`,
    },
    {
      head: "SEO",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
      praesentium soluta natus impedit excepturi laborum cum!`,
    },
    {
      head: "SEO",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
        praesentium soluta natus impedit excepturi laborum cum!`,
    },
    {
      head: "SEO",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
          praesentium soluta natus impedit excepturi laborum cum!`,
    },
    {
      head: "SEO",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            praesentium soluta natus impedit excepturi laborum cum!`,
    },
  ];
  return (
    <div id="second">
      <div className="mt-3 text-center mx-2">
        <h1 className=" fw-bold fs-4">
          360-Degree Digital Marketing Services for Companies of All Kinds
        </h1>
        <p className="mt-3 mx-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
          praesentium soluta natus impedit excepturi laborum cum! Autem dolore
          optio expedita facere ipsam minima amet esse? Repellendus rem ad ipsa
          illum?
        </p>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {cards.map((card, idx) => (
            <div
              className="col-sm-12 col-md-4 col-lg-4 mt-3 mb-3 mx-0.5 block"
              key={idx}
            >
              <Cardsc head={card.head} content={card.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
