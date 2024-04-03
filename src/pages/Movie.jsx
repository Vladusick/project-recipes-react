import {
  useParams,
  useNavigate,
  useLocation,
  // useMatch,
} from "react-router-dom";

function Movie() {
  const { title } = useParams();
  // const { path } = useRouteMatch();
  // console.log(title);
  const navigate = useNavigate();
  // const value = useMatch();
  const value2 = useLocation();
  // console.log(value);
  console.log(value2, "useLocation");
  return (
    <>
      <h1>Movie {title}</h1>
      <button className="btn" onClick={() => navigate(-1)}>
        {" "}
        go back
      </button>
    </>
  );
}

export { Movie };
