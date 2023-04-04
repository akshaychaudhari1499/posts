import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const { data } = useSelector((state) => state);
  const { id } = useParams();

  const item = data.find((item) => item.id === Number(id));

  if (item) {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Social Media App</h1>
        <br />
        <hr />
        <br />
        <h2 style={{ textAlign: "center" }}>
          Details Page for Post with ID:{item.id}
        </h2>
        <br />
        <div className="page">
          <div className="detail">
            <div className="card">
              <img
                src={`https://picsum.photos/200?random=${item.id}`}
                alt={item.title}
              />
              <div className="content">
                <h3>User Id : {item.userId}</h3>
                <h3>Title : {item.title}</h3>
                <h3>Body : {item.body}</h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <h1 style={{ textAlign: "center" }}>Item not found</h1>;
  }
};

export default Detail;
