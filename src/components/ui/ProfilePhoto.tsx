import classNames from 'classnames';

type Props = {
  className?: string;
  alt: string;
  src: string;
};

const ProfilePhoto = ({ className = '', alt, src }: Props) => {
  const imgClass = classNames('rounded-full w-3 h-3', className);

  return <img src={src} className={imgClass} alt={alt} />;
};

export default ProfilePhoto;
