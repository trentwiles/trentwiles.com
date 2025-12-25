export interface HeaderProps {
    updated: string;
    updatedLink: string;
    websiteTitle: string;
    websiteUrl: string;
    linkTitle: string;
    link: string;
}

import { Link } from "react-router-dom";

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
                  <a href={props.updatedLink} style={{ textDecoration: "none", color: "inherit" }}>
                    Updated {props.updated}
                  </a>
                </p>
              </div>

              <div className="col-auto">
                <ul className="extensible-list horizontal fs-md">
                  <li>
                    <Link className="text-reset" to="/">
                      <strong>Home</strong>
                    </Link>
                  </li>
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
                  <Link
                    className="align-self-center"
                    to="/"
                    title="Home"
                    style={{ textDecoration: "none" }}
                  >
                    <h1 className="display-4 text-black">Trent Wiles</h1>
                    <p className="text-center text-muted">
                      (pronounced "Trent Wiles")
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
