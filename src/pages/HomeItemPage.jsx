import { useParams } from "react-router-dom";
import homeList from "../data/homeList.json";
import { HomeItemCarousel, Ratings, Collapse } from "../components/_comp_index";
import "../styles/homeitempage.css";

const HomeItemPage = () => {
  const { rentalId } = useParams();
  const rental = homeList.find((rental) => rental.id === rentalId);

  return (
    <section className="home-item-section">
      <HomeItemCarousel images={rental.pictures} />
      <div className="home-item__head">
        <div className="home-item__head--left">
          <h3 className="home-name">{rental.title}</h3>
          <h4 className="home-loc">{rental.location}</h4>
          <div className="tags">
            {rental.tags.map((tag) => {
              return (
                <div className="tag" key={tag}>
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <div className="home-item__head--right">
          <div className="home-owner__profile">
            <h4 className="home-owner-name">{rental.host.name}</h4>
            <img src={rental.host.picture} className="home-owner-photo" />
          </div>
          <Ratings rating={rental.rating} />
        </div>
      </div>

      <div className="home-item__collapses">
        <div className="home-item__collapse">
          <Collapse title="Description" content={rental.description} />
        </div>
        <div className="home-item__collapse">
          <Collapse title="Equipements" content={rental.equipments} />
        </div>
      </div>
    </section>
  );
};

export default HomeItemPage;
