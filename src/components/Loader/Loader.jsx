import { ClipLoader } from "react-spinners";
import "./Loader.css";

export default function Loader({ loading = true }) {
  return (
    loading && (
      <div className="loader-overlay">
        <div className="loader-wrapper">
          <ClipLoader size={100} color="#89f7fe" />
        </div>
      </div>
    )
  );
}
