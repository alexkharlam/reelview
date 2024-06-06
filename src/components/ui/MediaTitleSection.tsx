type Props = {
  mainText: string;
  additionalText: string;
  tagline: string;
};

const MediaTitleSection = ({ additionalText, mainText, tagline }: Props) => {
  return (
    <section className="flex flex-col gap-1 px-2 py-3 text-center sm:gap-1.5 lg:gap-2 lg:py-3.5">
      <span className="text-1xl font-semibold text-white sm:text-3xl lg:text-4xl">{mainText}</span>
      <span className="text-xs font-medium text-gray-500 md:text-sm">{additionalText}</span>
      <span className="text-md italic text-white sm:text-base">{tagline}</span>
    </section>
  );
};

export default MediaTitleSection;
