export interface ProjectProps {
  name: string;
  description: string;
  url: string;
  skills: string[];
}
//style="text-align: left;"
export default function Project(props: ProjectProps) {
  return (
    <div className="narrow my-4" style={{ textAlign: "left" }}>
      <a href={props.url}>
        <h2>{props.name}</h2>
      </a>

      <p>{props.description}</p>
      {props.skills.map((s, index) => (
        <button
          key={index}
          type="button"
          className="btn btn-sm rounded-sm btn-info"
        >
          {s}
        </button>
      ))}
    </div>
  );
}
