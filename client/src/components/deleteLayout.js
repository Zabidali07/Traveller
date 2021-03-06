import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuth, signout } from "../utils/helper";
import { useDispatch } from "react-redux";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Layout = ({ children, match, history }) => {
  const dispatch = useDispatch();
  const isActive = (path) => {
    if (match.path === path) {
      return { color: "#F0E68C" };
    } else {
      return { color: "#00FFFF" };
    }
  };

  const nav = () => (
    <ul className="nav nav-tabs custom-navbar">
      <li className="nav-item">
        <Link to="/" className="nav-link" style={isActive("/")}>
          Traveller
        </Link>
      </li>
      {!isAuth() && (
        <>
          <li className="nav-item">
            <Link to="/signup" className="nav-link" style={isActive("/signup")}>
              Signup
            </Link>
          </li>
        </>
      )}

      {isAuth() && (
        <>
          <li className="nav-item">
            <Link
              to="/user/dashboard"
              className="nav-link"
              style={isActive("/user/dashboard")}
            >
              Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <span
              className="nav-link"
              style={{ cursor: "pointer", color: "#fff" }}
              onClick={() => {
                signout(() => {
                  history.push("/");
                  localStorage.clear();
                });
              }}
            >
              Signout
            </span>
          </li>
          <div className="navbar-right">
            <li className="nav-item ">
              <DropdownButton title="View Profile">
                <Dropdown.Item href="/user/posts">My Posts</Dropdown.Item>
                <Dropdown.Item href="/user/update-profile">
                  Profile
                </Dropdown.Item>
              </DropdownButton>
            </li>
          </div>
        </>
      )}
    </ul>
  );

  return (
    <Fragment>
      {nav()}
      <div className="container">{children}</div>
    </Fragment>
  );
};

export default withRouter(Layout);

<div className="col-md-6 custom-homepage-backgroundImage">
  {" "}
  <div>
    <h1
      style={{
        color: "#fffcdc",
        fontWeight: "bold",
        margin: "20px",
      }}
    >
      THE ADVENTURE YOU HAVE{" "}
    </h1>{" "}
  </div>
</div>;

axios
  .post("/add-new-article", {
    title,
    description,
    markdown,
    author,
    images,
    imagePath,
    postedByEmail,
    cusineImages,
    cusineImagesPath,
    visitedPlaceImages,
    visitedPlacesImagesPath,
    cusineImagesDescription,
    visitedPlacesImagesDescription,
  })
  .then((res) => {
    console.log(`new article posted ${res} and ${author} and ${images}`);
    setFormInputs({
      ...formInputs,
      title: "",
      description: "",
      markdown: "",
      buttonText: "Submitted",
    });
    history.push("/user/dashboard");
  })
  .catch((err) => {
    console.log(
      `There is error while pushing to database from frontend ${err}`
    );
  });
