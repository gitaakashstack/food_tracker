import "./Card.css";

function Card(props) {
  return (
    <section className={`generic-card ${props.className}`}>
      {props.children}
    </section>
  );
}

export default Card;
