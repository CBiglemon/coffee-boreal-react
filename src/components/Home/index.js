import ContentRight from 'src/components/ContentRight';
import ContentLeft from 'src/components/ContentLeft';

export default function Home() {
  return (
    <div className="home">
      <ContentLeft />
      <ContentRight />
    </div>
  );
}
