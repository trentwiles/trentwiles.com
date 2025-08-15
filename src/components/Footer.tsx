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
                                        <a className="text-reset" href="https://devpost.com/trentwiles">
                                            <strong>Devpost</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-reset"
                                            href="https://www.nyc.gov/assets/oti/html/nyc-core-framework/index.html">
                                            <strong>NYC Core Framework</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-reset" href="/tos">
                                            <strong>Privacy</strong>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </nav>

                    </div>

                    <div className="col-md-6 col-lg-4">

                        <h1 className="display-6 text-white">
                            <a href="https://en.wikipedia.org/wiki/Second_Avenue_Subway" target="_blank"><span
                                    className="subway-icon mta-turquoise">T</span></a>
                            <span className="subway-icon mta-yellow">R</span>
                            <span className="subway-icon mta-blue">E</span>
                            <span className="subway-icon mta-yellow">N</span>
                            <a href="https://en.wikipedia.org/wiki/Second_Avenue_Subway" target="_blank"><span
                                    className="subway-icon mta-turquoise">T</span></a>
                            <br />
                            <span className="subway-icon mta-yellow">W</span>
                            <span className="subway-icon mta-red">1</span>
                            <span className="subway-icon mta-gray">L</span>
                            <span className="subway-icon mta-blue">E</span>
                            <span className="subway-icon mta-gray">S</span>
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