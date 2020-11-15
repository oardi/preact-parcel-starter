import { h, Fragment } from 'preact';
import Router, { Route } from 'preact-router';
import { Link } from 'preact-router/match';
import { createHashHistory } from 'history';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { useState } from 'preact/hooks';

export const App = () => {
	const [name] = useState("Hello Preact Parcel");

	return (
		<Fragment>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" href="/">{name}</a>
			</nav>

			<div class="p-3">
				<div>
					<Link class="btn btn-sm btn-primary" activeClassName="active" href="/">Home</Link>
					<Link class="btn btn-sm btn-primary" activeClassName="active" href="/about">About</Link>
				</div>

				<Router history={createHashHistory()}>
					<Route path="/" component={Home} />
					<Route path="/about" component={About} />

					<div default>
						404
      				</div>
				</Router>
			</div>
		</Fragment>
	);
}
