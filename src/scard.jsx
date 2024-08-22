import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./scard.css";

export default function Cardsc({ head, content }) {
  return (
    <div className="box1">
      <div className="card " style={{ width: "13rem", height: "15rem" }}>
        <div className="card-body">
          <AccessTimeIcon />
          <h5 className="card-title">{head}</h5>
          <p className="card-text fs-6">{content}</p>
        </div>
      </div>
    </div>
  );
}
