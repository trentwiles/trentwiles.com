import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
        <footer className="bg-black" id="global-footer" role="contentinfo">

        <h2 className="sr-only">
            Page Footer
        </h2>

        <div className="bg-opacity-black-25 text-white" id="nyc-footer">



            <hr className="opacity-10" aria-hidden="true" />

            <div className="container py-3">

                <div className="row">

                    <div className="col-md-6 col-lg-8 mb-3 mb-lg-0">

                        <nav className="row fs-md" role="navigation">

                            <div className="col-lg mb-3 mb-lg-0">

                                <ul className="extensible-list">
                                    <li>
                                        <a className="text-reset" href="https://www.linkedin.com/in/trentwiles/">
                                            <strong>LinkedIn</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-reset" href="https://github.com/trentwiles/">
                                            <strong>GitHub</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-reset" href="https://github.com/trentwiles/trentwiles.com">
                                            <strong>Website Source</strong>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg mb-3 mb-lg-0">

                                <ul className="extensible-list">
                                    <li>
                                        <a className="text-reset" href="https://stats.fm/elephantandcastle">
                                            <strong>stats.fm</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-reset"
                                            href="https://www.nyc.gov/assets/oti/html/nyc-core-framework/index.html">
                                            <strong>NYC Core Framework</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-reset"
                                            href="/tools">
                                            <strong>Tools</strong>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </nav>

                    </div>

                    <div className="col-md-6 col-lg-4">

                        <h1 className="display-6 text-white">
                            <a href="https://en.wikipedia.org/wiki/Second_Avenue_Subway" target="_blank"><span className="subway-icon mta-turquoise">T</span></a>
                            <a href="https://en.wikipedia.org/wiki/R_(New_York_City_Subway_service)" target="_blank"><span className="subway-icon mta-yellow">R</span></a>
                            <a href="https://en.wikipedia.org/wiki/E_(New_York_City_Subway_service)" target="_blank"><span className="subway-icon mta-blue">E</span></a>
                            <a href="https://en.wikipedia.org/wiki/N_(New_York_City_Subway_service)" target="_blank"><span className="subway-icon mta-yellow">N</span></a>
                            <a href="https://en.wikipedia.org/wiki/Second_Avenue_Subway" target="_blank"><span className="subway-icon mta-turquoise">T</span></a>
                            <br />
                            <a href="https://en.wikipedia.org/wiki/W_(New_York_City_Subway_service)" target="_blank"><span className="subway-icon mta-yellow">W</span></a>
                            <a href="https://en.wikipedia.org/wiki/1_(New_York_City_Subway_service)" target="_blank"><span className="subway-icon mta-red">1</span></a>
                            <a href="https://en.wikipedia.org/wiki/L_(New_York_City_Subway_service)" target="_blank"><span className="subway-icon mta-gray">L</span></a>
                            <a href="https://en.wikipedia.org/wiki/E_(New_York_City_Subway_service)" target="_blank"><span className="subway-icon mta-blue">E</span></a>
                            <a href="https://en.wikipedia.org/wiki/Rockaway_Park_Shuttle" target="_blank"><span className="subway-icon mta-gray">S</span></a>
                        </h1>
                        <strong className="fs-sm">YOU'RE EITHER A BLESSING OR A LESSON</strong>
                        

                    </div>

                </div>

            </div>

        </div>

    </footer>
    </>
    )
}
