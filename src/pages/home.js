import Navbar from "../layout/Navbar";
function home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="float-text">
          <div className="de_social-icons">
            <span className="buton">
              <i className="fa fa-facebook fa-lg"></i>
            </span>
            <span className="buton">
              <i className="fa fa-twitter fa-lg"></i>
            </span>
            <span className="buton">
              <i className="fa fa-instagram fa-lg"></i>
            </span>
          </div>
          <span>Follow Me</span>
        </div>
      </div>
    </>
  );
}

export default home;
