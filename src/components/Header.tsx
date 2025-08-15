export interface HeaderProps {
    updated: string;
    websiteTitle: string;
    websiteUrl: string;
    linkTitle: string;
    link: string;
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <header id="global-header" role="banner">
        <div className="bg-black text-white" id="nyc-top-header">
          <div className="container-fluid wide">
            <div className="row py-1 align-items-center justify-content-between">
              <div className="col-auto">
                <p className="d-none d-md-flex fs-md">
                  <a className="text-reset" href={props.websiteUrl}>
                    <strong>{props.websiteTitle}</strong>
                  </a>
                  <span className="mx-1" aria-hidden="true">
                    |
                  </span>
                  Updated {props.updated}
                </p>
              </div>

              <div className="col-auto">
                <ul className="extensible-list horizontal fs-md">
                  <li>
                    <a className="text-reset" href={props.link}>
                      <strong>{props.linkTitle}</strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap-header">
          <div className="container-fluid wide">
            <div className="row align-items-center">
              <div className="col-lg py-2">
                <div className="d-flex justify-content-center">
                  <a
                    className="align-self-center"
                    href="#"
                    title="Home"
                    style={{ textDecoration: "none" }}
                  >
                    <h1 className="display-4 text-black">Trent Wiles</h1>
                    <p className="text-center text-muted">
                      (pronounced "Trent Wiles")
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
