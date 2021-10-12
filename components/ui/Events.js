import Image from 'next/image'

function Events({ id, title, image }) {
  return (
    <div className="events">
      <div className="event-info">
        <strong>{title}</strong>
      </div>

      <Image src={image} alt="lady on her laptop"  height="350px" width="300px" />
    </div>
  );
}

export default Events;
