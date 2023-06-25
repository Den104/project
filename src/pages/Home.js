import Slider from "../Components/Slider";
import NewsGrid from "../Components/NewsGrid";

export default function Home() {
  return (
    <div className="container">
      <Slider />
      <h1 className="container py-3">Останні новини</h1>
      <NewsGrid />
    </div>
  );
}
