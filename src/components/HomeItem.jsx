import "../styles/home-item.css";

const HomeItem = ({ title, cover }) => {
  return (
    <div className="home-item">
      <div className="home-item__image-block">
        <img src={cover} className="home-item__image" />
      </div>
      <div className="home-item__gradient"></div>
      <p className="home-item__text">{title}</p>
    </div>
  );
};

export default HomeItem;
