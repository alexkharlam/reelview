import PopularMovies from '../components/PopularMovies.tsx';
import PopularTv from '../components/PopularTv.tsx';
import HeadingSecondary from '../components/ui/headings/HeadingSecondary.tsx';
import HeadingTertiary from '../components/ui/headings/HeadingTertiary.tsx';

const Home = () => {
  return (
    <div className="px-2">
      <div className="mt-4" />
      <HeadingSecondary>What to watch</HeadingSecondary>
      <HeadingTertiary>Popular movies</HeadingTertiary>
      <PopularMovies className="mb-3" />
      <HeadingTertiary>Popular TV shows</HeadingTertiary>
      <PopularTv />
    </div>
  );
};

export default Home;
