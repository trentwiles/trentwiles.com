interface ButtonProps {
  text: string;
  fontAwesomeIcon: string | undefined;
}

export default function LargeButton(props: ButtonProps) {
  return (
    <div className="row my-3">
      <div className="col">
        <ul className="extensible-list horizontal">
          <li>
            <button type="button" className="btn btn-lg rounded-lg btn-primary">
              {props.fontAwesomeIcon && (
                <span className={"fa-solid fa-" + props.fontAwesomeIcon}></span>
              )}
              {props.text}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
