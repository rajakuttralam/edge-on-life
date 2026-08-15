import { HashRouter, Routes, Route } from "react-router-dom";
import PhoneFrame from "./components/PhoneFrame";
import Home from "./screens/Home";
import PackageList from "./screens/PackageList";
import Detail from "./screens/Detail";
import Philosophy from "./screens/Philosophy";

function Placeholder({ label }: { label: string }) {
	return (
		<div className="flex h-full items-center justify-center px-8 text-center">
			<p className="text-sm font-medium text-[#111a2e]/40">{label} screen — not part of this build.</p>
		</div>
	);
}

export default function App() {
	return (
		<div className="flex min-h-screen items-center justify-center ">
			<HashRouter>
				<PhoneFrame>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/packages" element={<PackageList />} />
						<Route path="/place/:id" element={<Detail />} />
						<Route path="/philosophy" element={<Philosophy />} />
						<Route path="/profile" element={<Placeholder label="Profile" />} />
					</Routes>
				</PhoneFrame>
			</HashRouter>
		</div>
	);
}
