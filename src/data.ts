import type { Destination } from "./types";
import balakumaran from "./assets/balakumaran.png"

export const destinations: Destination[] = [
	{
		id: "balakumaran",
		name: "Balakumaran",
		location: "Meaning of Life",
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
		id: "forest",
		name: "Forest",
		location: "South Africa",
		image:
			"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
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
		id: "namib-desert",
		name: "Namib Desert",
		location: "Namibia",
		image:
			"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop",
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
		id: "kruger",
		name: "Kruger National Park",
		location: "South Africa",
		image:
			"https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
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
