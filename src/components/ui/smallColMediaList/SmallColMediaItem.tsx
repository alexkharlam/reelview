import { Link } from 'react-router-dom';
import RatingValue from '../RatingValue.tsx';

type Props = {
  posterImgSrc: string;
  voteAverage: number;
  releaseYear: string;
  title: string;
  mediaType: string;
  linkPath: string;
  onClick: () => void;
};

const SmallColMediaItem = (props: Props) => {
  const { onClick, posterImgSrc, voteAverage, releaseYear, title, mediaType, linkPath } = props;

  return (
    <li>
      <Link
        onClick={onClick}
        className="flex w-full items-center gap-2 px-2 py-2 hover:bg-gray-200"
        to={linkPath}
      >
        <img className="w-[40px]" src={posterImgSrc} alt="sdf" />
        <div className="flex w-auto flex-col gap-1.5">
          <h4 className=" text-sm font-medium text-black">{title}</h4>
          <div className="flex items-center gap-2.5">
            <RatingValue className="text-xs font-extrabold" value={voteAverage} />
            <div className="text-xs font-medium capitalize text-gray-800">
              {releaseYear} | {mediaType}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SmallColMediaItem;
