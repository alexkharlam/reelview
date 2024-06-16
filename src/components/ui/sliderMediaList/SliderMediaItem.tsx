import { Link } from 'react-router-dom';
import RatingValue from '../RatingValue.tsx';

type Props = {
  posterImgSrc: string;
  voteAverage: number;
  title: string;
  linkPath: string;
  year: string;
};

const SliderMediaItem = ({ posterImgSrc, voteAverage, title, linkPath, year }: Props) => {
  return (
    <Link to={linkPath} className="mx-1 flex w-5.5 flex-col bg-gray-1200 sm:w-6 lg:w-6.5">
      <img className="h-6.5 w-full sm:h-7" src={posterImgSrc} alt={title} />
      <div className="line-clamp-2 h-3.5 p-1 text-xs font-medium text-white">{title}</div>
      <div className="flex items-center justify-between p-1.5">
        <RatingValue className="text-sm" value={voteAverage} />
        <span className="text-sm">{year}</span>
      </div>
    </Link>
  );
};

export default SliderMediaItem;
