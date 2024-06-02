// components/Loading.js

import turtleLoader from '../assets/images/turtleloader.gif';

const Loading = () => {
  return (
    <div className="loading">
      <img src={turtleLoader} alt="Loading" />
      <style jsx>{`
        .loading {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.8);
          z-index: 9999;
        }

        .loading img {
          width: 500px;
          height: 500px;
        }
      `}</style>
    </div>
  );
};

export default Loading;
 // Use default export
  