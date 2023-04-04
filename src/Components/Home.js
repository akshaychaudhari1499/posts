import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "../actions";

const Home = () => {
  const { loading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}> Loading....</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="home">
      <h1 style={{ textAlign: "center" }}>Social Media App</h1>
      <br />
      <hr />
      <br />
      <ul className="list">
        {data.map((item) => (
          <li key={item.id} className="item">
            <Link
              to={`/item/${item.id}`}
              className="readMore"
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <img
                  src={`https://picsum.photos/200?random=${item.id}`}
                  alt={item.title}
                />
                <div className="content">
                  <h4>User ID : {item.userId}</h4>
                  <h4>Title : {item.title.slice(0, 20)}...</h4>
                  <h4>Body : {item.body.slice(0, 50)}...</h4>
                  <span>Read More...</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
