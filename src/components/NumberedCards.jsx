export default function NumberedCards({ allCardData }) {
  return (
    <div className="all-numbered-cards">
      {allCardData.map((card, i) => (
        <div className="numbered-card" key={i}>
          <span className="serial-num">{i + 1}</span>
          <h3>{card.title}</h3>
          <p>{card.para}</p>
        </div>
      ))}
    </div>
  );
}
