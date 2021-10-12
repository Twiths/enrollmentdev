import Image from 'next/image';
import logo from '../../public/images/edu.webp';

function Session() {
  return (
    <div>
      <div className="session__container">
        <div className="session__wrapper">
          <div className="session__circle"></div>
          <Image src={logo} alt="" height="300px" width="400px"/>
        </div>
        <div className="session__wrapper__second">
          <h4>
            Take the next step toward your personal and professional goals with
            Coursera.
          </h4>
          <p>
            Join now to receive personalized recommendations from the full
            Coursera catalog.
          </p>
          <button>Join for Free</button>
        </div>
      </div>
    </div>
  );
}

export default Session;
