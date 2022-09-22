const Banner = (props) => {
  return (
    <div id="banner">
      <img src={props.img} className="image" alt="banner" />
    </div>
  );
};

export default Banner;
