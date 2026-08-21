import type { Destination } from "./types";
import balakumaran from "./assets/balakumaran.png"
import indiraSoundarrajan from "./assets/IndiraSoundarrajan.png"
import sukhabodhananda from "./assets/sukhabodhananda.jpg"
import sivasankaran from "./assets/sivasankaran.jpg"

export const destinations: Destination[] = [
	{
		id: "balakumaran",
		name: "Bala Kumaran",
		location: "வாழ்க்கைத் தத்துவம்",
		image: balakumaran,
		price: 250,
		rating: 4.8,
		days: 7,
		nights: 6,
		hotelStars: 5,
		people: 2,
		category: "Knowledge Guru",
		description:
			"Flamingos or flamingoes are a type of wading bird in the family Phoenicopteridae, the only bird family in the order Phoenicopteriformes.",
	},
	{
		id: "indirasoundarajan",
		name: "Indira Soundarajan",
		location: "கடவுள் தத்துவம்",
		image: indiraSoundarrajan,
		price: 180,
		rating: 4.6,
		days: 5,
		nights: 4,
		hotelStars: 4,
		people: 2,
		category: "African Travel",
		description:
			"Knysna Forest is one of the last remaining tracts of indigenous forest in South Africa, home towering yellowwoods and quiet, sunlit trails.",
	},
	{
		id: "sugabogananda",
		name: "Swami Sugabogananda",
		location: "மனம்",
		image: sukhabodhananda,
		price: 320,
		rating: 4.9,
		days: 6,
		nights: 5,
		hotelStars: 5,
		people: 2,
		category: "African Travel",
		description:
			"The Namib is a coastal desert famed for its towering red dunes, some of the tallest in the world, rolling down to a cold Atlantic coastline.",
	},
	{
		id: "sivasankaran",
		name: "Sivasankaran",
		location: "ஆரோக்கியமான வாழ்க்கை",
		image: sivasankaran,
		price: 410,
		rating: 4.9,
		days: 8,
		nights: 7,
		hotelStars: 5,
		people: 4,
		category: "African Travel",
		description:
			"One of Africa's largest game reserves, Kruger is home to the Big Five and hundreds of species roaming open savanna and riverine bush.",
	},
];

export const travelPackages = [
	{
		id: "mesir",
		name: "Mesir",
		location: "Pyramid, Cairo",
		image:
			"https://images.unsplash.com/photo-1568322445389-f64ac9c2d1cb?q=80&w=800&auto=format&fit=crop",
		rating: 4.5,
	},
	{
		id: "victoria-falls",
		name: "Victoria Falls",
		location: "Zambia",
		image:
			"https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800&auto=format&fit=crop",
		rating: 4.7,
	},
];
