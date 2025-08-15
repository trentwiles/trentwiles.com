export interface ProjectProps {
  name: string;
  description: string;
  url: string;
  skills: string[];
}

export default function Project(props: ProjectProps) {
  return (
    <div className="narrow my-4" style={{ textAlign: "left" }}>
      <a href={props.url}>
        <h2>{props.name}</h2>
      </a>

      <p>{props.description}</p>
      <div className="row my-2">
        <div className="col">
          <ul className="extensible-list horizontal">
            {props.skills.map((s, index) => (
              <li>
                <button
                  key={index}
                  type="button"
                  className="btn btn-sm rounded-sm btn-info"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
