import { Link } from 'react-router-dom';
import RatingValue from '../RatingValue.tsx';

type Props = {
  posterImgSrc: string;
  voteAverage: number;
  title: string;
  linkPath: string;
};

const SliderMediaItem = ({ posterImgSrc, voteAverage, title, linkPath }: Props) => {
  return (
    <Link to={linkPath} className="mx-1 flex flex-col bg-gray-1200">
      <img className="w-full    " src={posterImgSrc} alt={title} />
      <div className="line-clamp-2 h-3.5 p-1 text-xs font-medium text-white">{title}</div>
      <div className="flex items-center justify-between p-1">
        <div className="text-xs">Watch trailer</div>
        <RatingValue className="text-xs" value={voteAverage} />
      </div>
    </Link>
  );
};

export default SliderMediaItem;
