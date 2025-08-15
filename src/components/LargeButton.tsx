interface ButtonProps {
  text: string;
  fontAwesomeIcon: string | undefined;
}

export default function LargeButton(props: ButtonProps) {
  return (
    <button type="button" className="btn btn-lg rounded-lg btn-primary">
      {props.fontAwesomeIcon && (
        <span className={"fa-solid fa-" + props.fontAwesomeIcon}></span>
      )}
      {props.text}
    </button>
  );
}
