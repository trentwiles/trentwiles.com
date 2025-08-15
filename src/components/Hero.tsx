interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="bg-primary banner-with-background oculus d-flex flex-column">
      <div className="container my-auto">
        <div className="narrow">
          <h1 className="display-4 text-white">{props.title}</h1>
          <p className="text-white">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
