const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} />
      <div className='line-card'></div>
      <h3 className='title-card'>{game.title}</h3>
    </div>
  );
};

export default GameCard;