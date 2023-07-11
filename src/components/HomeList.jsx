import { Link } from "react-router-dom";
import homeList from "../data/homeList.json";
import "../styles/home-list.css";
import HomeItem from "./HomeItem";

const HomeList = () => {
  return (
    <section>
      <ul className="home-list">
        {homeList.map(({ id, title, cover }) => (
          <article key={id}>
            <Link to={`/rental/${id}`}>
              <HomeItem title={title} cover={cover} />
            </Link>
          </article>
        ))}
      </ul>
    </section>
  );
};

export default HomeList;
