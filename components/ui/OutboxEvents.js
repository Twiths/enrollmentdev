import Events from "./Events";

function EduEvents() {
  return (
    <div className="our-events">
      <h3>EDU Community Events</h3>
      <div className="edu-events">
        <Events
          id="1234"
          title="Hands On Programming"
          image="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />

        <Events
          id="1234"
          title="Get Together Events"
          image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHBlb3BsZSUyMGFuZCUyMGxhcHRvcHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <Events
          id="123477"
          title="Carrier Guidance"
          image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2hub2xvZ3l8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />

        <Events
          id="123488"
          title="Full Stack Web Development"
          image="https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fHRlY2hub2xvZ3l8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
  );
}

export default EduEvents;
