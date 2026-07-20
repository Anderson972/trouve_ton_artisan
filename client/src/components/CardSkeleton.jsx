const CardSkeleton = () => {
  return (
    <div className="card mx-auto" aria-hidden="true">
      <div className="placeholder-glow">
        <div className="placeholder col-12" style={{ height: '200px' }}></div>
        <div className="card-body">
          <span className="placeholder col-6 mb-2 d-block"></span>
          <span className="placeholder col-4 d-block"></span>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;