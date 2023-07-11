import "../styles/banner-img.css";

const BannerImg = ({ page, text }) => {
  return (
    <div className="banner-img">
      <div className={page}></div>
      <div className="banner-img__text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BannerImg;
