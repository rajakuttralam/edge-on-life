import BottomNav from "../components/BottomNav";
import image from "./../assets/Villa.png"

export default function ExperiaVilla() {

	return (
		<div className="flex flex-col min-h-screen items-center justify-center p-6"
			style={{ background: "#0B0D11" }} >
			<span
				className="flex w-full text-white items-start justify-start p-3 rounded-full text-3xl"
			>
				EXPERIA VILLA
			</span>
			<div className="">
				<img
					src={image}
					alt={"name"}
					className="p-3 object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
			<BottomNav />
		</div>
	);
}