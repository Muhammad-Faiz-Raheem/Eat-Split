import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className="page-not-found">
      <div className="box">
        <h1 style={{ fontSize: "3rem" }}>
          The page you are looking for could not be found 😢
        </h1>
        <button onClick={() => navigate(-1)} className="back-button">
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
