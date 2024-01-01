"use client";
const HomePage = () => {
	console.log("from server");
	return (
		<div>
			<button className="btn">Button</button>
			<button className="btn btn-neutral">Neutral</button>
			<button className="btn btn-primary">Primary</button>
			<button className="btn btn-secondary">Secondary</button>
			<button className="btn btn-accent">Accent</button>
			<button className="btn btn-ghost">Ghost</button>
			<button className="btn btn-link">Link</button>
			<h1 className="text-5xl">This is home route</h1>
		</div>
	);
};

export default HomePage;
