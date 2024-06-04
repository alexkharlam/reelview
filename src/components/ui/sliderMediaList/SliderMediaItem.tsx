import { Link } from 'react-router-dom';
import RatingValue from '../RatingValue.tsx';

type Props = {
  posterImgSrc: string;
  voteAverage: number;
  title: string;
  linkPath: string;
  trailerLink?: string;
};

const SliderMediaItem = ({ trailerLink, posterImgSrc, voteAverage, title, linkPath }: Props) => {
  return (
    <Link to={linkPath} className="mx-1 flex w-5.5 flex-col bg-gray-1200">
      <img className="w-full" src={posterImgSrc} alt={title} />
      <div className="line-clamp-2 h-3.5 p-1 text-xs font-medium text-white">{title}</div>
      <div className="flex items-center justify-between p-1">
        <RatingValue className="text-xs" value={voteAverage} />
        {trailerLink && <div className="text-xs">Watch trailer</div>}
      </div>
    </Link>
  );
};

export default SliderMediaItem;
