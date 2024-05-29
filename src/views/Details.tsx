import { useParams } from 'react-router-dom';

const Details = () => {
  const { idSlug } = useParams();

  return <div>Details view {idSlug}</div>;
};

export default Details;
