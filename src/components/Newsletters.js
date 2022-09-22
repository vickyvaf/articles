const Newsletter = (props) => {
  return (
    <div id="newsletter">
      <div className="title-wrapper">
        <h3>NEWSLETTER</h3>
      </div>
      <div className="forms-wrapper">
        <input type="text" placeholder="Email" />
        <button onClick={props.submitFn}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Newsletter;
