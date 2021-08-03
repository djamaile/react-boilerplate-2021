import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div>
      <p>
        Sorry, we could not find this page <br />
        <Link to={`${process.env.PUBLIC_URL}/`}>Return to Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
