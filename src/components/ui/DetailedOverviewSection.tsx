import HeadingTertiary from './headings/HeadingTertiary.tsx';

type Props = {
  text: string;
};

const DetailedOverviewSection = ({ text }: Props) => {
  return (
    <section className="mb-3 px-2">
      <HeadingTertiary>Overview</HeadingTertiary>
      <p className="max-w-9 text-md font-normal text-white">{text}</p>
    </section>
  );
};

export default DetailedOverviewSection;
