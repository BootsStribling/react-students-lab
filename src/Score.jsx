

const Score = (props) => {
  return ( 
    <>
      <div className="score-container">
        {props.scores.map((score, idx) =>
              <div key={idx} className="card score-card" >
              <p>{score.date}</p>
              <h7>{score.score}</h7>
              </div>
            )}
      </div>
    </>
  );
}

export default Score