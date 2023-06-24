import React from 'react';

export default function Footer({ darkMode }) {
  return (
		<div>
			<div className="margin my-4 ">
				<footer className={`footer  ${darkMode ? "dark-mode" : ""}`}>
					<div className="row footertext">
						<div className="col-5 col-lg-3 col-md-2 mb-3 ">
							<h5>Quick Links</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2">
									<a href="/" className="nav-link p-0 text-muted">
										Explore
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="/" className="nav-link p-0 text-muted">
										Login
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="/" className="nav-link p-0 text-muted">
										Register
									</a>
								</li>
							</ul>
						</div>

						<div className="col-5 col-md-2 col-lg-3 mb-3 ">
							<h5>Snappcoins</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2">
									<a href="/" className="nav-link p-0 text-muted">
										Connect Wallet
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="/" className="nav-link p-0 text-muted">
										FAQ
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="/" className="nav-link p-0 text-muted">
										Become a Partner
									</a>
								</li>
							</ul>
						</div>

						<div className="col-5 col-md-2 col-lg-3 mb-3">
							<h5>Resources</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2">
									<a href="/" className="nav-link p-0 text-muted">
										Community
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="/" className="nav-link p-0 text-muted">
										How it works
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="/" className="nav-link p-0 text-muted">
										Latest Products
									</a>
								</li>
							</ul>
						</div>

						<div className="col-md-3">
							<form>
								<h6>Keep in touch</h6>
								<div className="d-flex flex-column flex-sm-row w- gap-2 ml--3">
									<input
										id="newsletter1"
										type="text"
										className="form-control"
										placeholder="Your Email"
										fdprocessedid="fphmjs"
									/>
									<button
										className="btn bgpink text-white"
										type="button"
										fdprocessedid="9hghoh">
										{">"}
									</button>
								</div>
							</form>
						</div>
					</div>

					<div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4 my-4 border-top">
						<ul className="list-unstyled d-flex">
							<li className="me-3">
								<a className="link-dark" href="/">
									<svg className="bi" width="24" height="24">
										<use xlinkHref="/twitter"></use>
									</svg>
								</a>
							</li>
							<li className="me-3">
								<a className="link-dark" href="/">
									<svg className="bi" width="24" height="24">
										<use xlinkHref="/instagram"></use>
									</svg>
								</a>
							</li>
							<li className="me-3">
								<a className="link-dark" href="/">
									<svg className="bi" width="24" height="24">
										<use xlinkHref="/facebook"></use>
									</svg>
								</a>
							</li>
						</ul>
						<ul className="list-unstyled d-flex ms-auto mr-10">
							<li>
								<a className="link-dark" href="/terms">
									Terms &amp; Conditions
								</a>
							</li>
							<li>
								<span className="mx-3">|</span>
							</li>
							<li>
								<p className="mb-0">&copy; 2023 Snappcoins</p>
							</li>
						</ul>
					</div>
				</footer>
			</div>
		</div>
	);
}
