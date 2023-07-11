import BannerImg from "../components/BannerImg";
import Collapse from "../components/Collapse";
import aboutText from "../data/aboutText.json";
import "../styles/about-kasa.css";

const AboutKasa = () => {
  return (
    <section>
      <BannerImg
        page={"about-banner-img__image banner-img__image--about"}
        text={""}
      />
      <div className="about-kasa__container">
        {aboutText.map((text) => {
          return (
            <Collapse
              key={text.title}
              title={text.title}
              content={text.content}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AboutKasa;
