type Props = {
  title: string;
  body: string | number;
};

const MediaDetailedInfo = ({ title, body }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-md font-bold text-white">{title}</span>
      <span className="text-md font-normal">{body}</span>
    </div>
  );
};

export default MediaDetailedInfo;
