import { Link, useNavigate } from "react-router-dom";
const Navbar = ({ searchText, setSearchText }) => {
 const navigate = useNavigate()
  const updateSearchText = (e) => {
    navigate('/search')
    setSearchText(e.target.value)
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          Flix-Hub
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upcoming">
                Coming Soon
              </Link>
            </li>
          </ul>
          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            ></input>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
