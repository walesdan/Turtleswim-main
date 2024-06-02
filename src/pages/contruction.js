// pages/construction.js

const Construction = () => {
    return (
      <div className="construction">
        <h1>Site Under Construction</h1>
        <p>We are working hard to bring you a better experience. Please check back later.</p>
        <style jsx>{`
          .construction {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
            background-color: #f0f0f0;
          }
  
          h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
  
          p {
            font-size: 1.25rem;
          }
        `}</style>
      </div>
    );
  };
  
  export default Construction;
  