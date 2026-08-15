import { HashRouter, Routes, Route } from "react-router-dom";
import PhoneFrame from "./components/PhoneFrame";
import Home from "./screens/Home";
import PackageList from "./screens/PackageList";
import Detail from "./screens/Detail";
import Philosophy from "./screens/Philosophy";
import ExperiaVilla from "./screens/ExperiaVilla";



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
						<Route path="/experiavilla" element={<ExperiaVilla />} />
					</Routes>
				</PhoneFrame>
			</HashRouter>
		</div>
	);
}
