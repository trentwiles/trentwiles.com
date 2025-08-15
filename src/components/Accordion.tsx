interface AccordionProps {
  buttonTitles: string[];
  title: string;
  parentId: string; // ex. "01"
  childId: string; // ex. "02"
}

export default function Accordion({
  title,
  parentId,
  childId,
  buttonTitles,
}: AccordionProps) {
  const child = "acc-button-" + childId;
  const parent = "#accordion-" + parentId;
  return (
    <div className="card">
      <a
        className="card-header h4 collapse collapsed"
        id={child}
        data-toggle="collapse"
        href={"#panel-" + child}
        role="tab"
        aria-expanded="false"
        aria-controls={"panel-" + child}
        style={{ textDecoration: "none" }}
      >
        {/* NOTE MAY NEED TO BE CHANGED TO <h3> */}
        <span className="title" role="heading">
          {title}
        </span>
      </a>

      <div
        className="collapse"
        id={"panel-" + child}
        role="tabpanel"
        aria-labelledby={child}
        data-parent={parent}
      >
        <div className="card-body">
          <div className="row my-2">
            <div className="col">
              <div className="d-flex flex-wrap">
                {buttonTitles.map((s, index) => (
                    <button
                      key={index}
                      type="button"
                      className="btn btn-sm rounded-sm btn-info"
                      style={{ margin: "5px 5px" }}
                    >
                      {s}
                    </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
