export interface Destination {
	id: string;
	name: string;
	location: string;
	image: string;
	price: number;
	rating: number;
	days: number;
	nights: number;
	hotelStars: number;
	people: number;
	category: string;
	description: string;
}

export interface BudgetCategory {
	id: string;
	name: string;
	icon: "home" | "utensils" | "car" | "bag" | "film" | "heart" | "zap" | "piggy";
	color: string;
	budget: number;
	spent: number;
}

export interface Transaction {
	id: string;
	merchant: string;
	categoryId: string;
	date: string;
	amount: number;
	type: "expense" | "income";
}

export interface Destination {
	id: string;
	name: string;
	location: string;
	image: string;
	price: number;
	rating: number;
	days: number;
	nights: number;
	hotelStars: number;
	people: number;
	category: string;
	description: string;
}
