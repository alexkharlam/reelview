type Props = {
  posterSrc: string;
  posterAlt: string;
  backdropSrc: string;
  backdropAlt: string;
};

const MediaDetailedImages = ({ posterSrc, backdropSrc, posterAlt, backdropAlt }: Props) => {
  return (
    <section className="relative h-6.5 sm:h-7.5 lg:h-8">
      <img
        className="absolute left-2.5 top-1/2 z-10 h-6 -translate-y-1/2 object-cover sm:h-7 lg:left-3.5 lg:h-7.5"
        src={posterSrc}
        alt={posterAlt}
      />
      <img src={backdropSrc} className="h-full w-full object-cover" alt={backdropAlt} />
    </section>
  );
};

export default MediaDetailedImages;
