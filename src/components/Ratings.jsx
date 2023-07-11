import rated from "../assets/other/star-filled.png";
import notRated from "../assets/other/star-empty.png";

const Ratings = ({ rating }) => {
  let stars = [];
  let base = 5;
  let noStar = base - rating;
  for (let i = 0; i < rating; i++) {
    let star = <img src={rated} key={i} />;
    stars.push(star);
  }
  for (let i = 0; i < noStar; i++) {
    let star = <img src={notRated} key={i - 5} />;
    stars.push(star);
  }

  return <div className="ratings-area">{stars.map((note) => note)}</div>;
};

export default Ratings;
