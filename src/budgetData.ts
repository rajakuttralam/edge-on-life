// import type { BudgetCategory, Transaction } from "./types";

export const monthlyIncome = 4200;

export const budgetCategories: any[] = [
	{ id: "housing", name: "Home Loan", icon: "home", color: "#6c63ff", budget: 1041000, spent: 10322 },
	{ id: "food", name: "Muthoot PL", icon: "utensils", color: "#f5a623", budget: 41000, spent: 3350 },
	{ id: "transport", name: "MoneyView", icon: "car", color: "#2fd4a6", budget: 100050, spent: 7100 },
	{ id: "shopping", name: "SBI CC", icon: "bag", color: "#ff6b6b", budget: 138000, spent: 9050 },
	{ id: "entertainment", name: "Murugan", icon: "film", color: "#4ec5f1", budget: 420000, spent: 7400 },
	{ id: "health", name: "Ramesh", icon: "heart", color: "#c084fc", budget: 130000, spent: 2600 },
	{ id: "utilities", name: "Lakshmi", icon: "zap", color: "#a0a4ab", budget: 50000, spent: 1500 },
	{ id: "savings", name: "Jewel Loan", icon: "piggy", color: "#111a2e", budget: 150000, spent: 3000 },
	{ id: "savings", name: "Ashok", icon: "piggy", color: "#111a2e", budget: 125000, spent: 3000 },
];

export const idCard: any[] = [
	{ id: "housing", name: "Raja K", icon: "home", color: "#6c63ff", budget: 'RMM0335869', spent: 10322 },
	{ id: "food", name: "Akila", icon: "utensils", color: "#f5a623", budget: 'DVS7294531', spent: 3350 },
	{ id: "transport", name: "Chakku", icon: "car", color: "#2fd4a6", budget: 'JQH1378785', spent: 7100 },
	{ id: "shopping", name: "Appa", icon: "bag", color: "#ff6b6b", budget: 'RMM2076974', spent: 9050 },
	{ id: "entertainment", name: "Amma", icon: "film", color: "#4ec5f1", budget: 'RMM2076982', spent: 7400 },
];

export const interestFreeLoan: any[] = [
	{ id: "housing", name: "Shop 1 Advance", icon: "home", color: "#6c63ff", budget: 400000, spent: 10322 },
	{ id: "food", name: "Shop 2 Advance", icon: "utensils", color: "#f5a623", budget: 60000, spent: 3350 },
	{ id: "transport", name: "Kulali", icon: "car", color: "#2fd4a6", budget: 35000, spent: 7100 },
	{ id: "shopping", name: "Unnamalai", icon: "bag", color: "#ff6b6b", budget: 50000, spent: 9050 },
	{ id: "entertainment", name: "Uma", icon: "film", color: "#4ec5f1", budget: 50000, spent: 7400 },
];

export const transactions: any[] = [
	{ id: "t1", merchant: "Akila", categoryId: "housing", date: "Aug 7", amount: 23000, type: "expense" },
	{ id: "t2", merchant: "Rent", categoryId: "housing", date: "Aug 7", amount: 12000, type: "expense" },
	{ id: "t3", merchant: "Milk.", categoryId: "housing", date: "Aug 7", amount: 1500, type: "expense" },
	{ id: "t4", merchant: "EB", categoryId: "housing", date: "Aug 2", amount: 2500, type: "expense" },
	{ id: "t5", merchant: "Internet + Mobile", categoryId: "entertainment", date: "Aug 10", amount: 1000, type: "expense" },
	{ id: "t6", merchant: "Hair Cut & Coloring", categoryId: "housing", date: "Aug 5", amount: 700, type: "expense" },
	{ id: "t7", merchant: "Petrol & Service", categoryId: "transport", date: "Aug 10", amount: 4000, type: "expense" },
	{ id: "t8", merchant: "Tution Fees", categoryId: "housing", date: "Aug 2", amount: 500, type: "expense" },
	{ id: "t9", merchant: "Tea", categoryId: "entertainment", date: "Aug 10", amount: 1500, type: "expense" },
	{ id: "t10", merchant: "Sastha Koil", categoryId: "housing", date: "Aug 5", amount: 200, type: "expense" },
	{ id: "t11", merchant: "Food", categoryId: "transport", date: "Aug 10", amount: 2300, type: "expense" },
	{ id: "t12", merchant: "Medicine", categoryId: "housing", date: "Aug 2", amount: 500, type: "expense" },
	{ id: "t13", merchant: "Ration", categoryId: "entertainment", date: "Aug 10", amount: 200, type: "expense" },
	{ id: "t14", merchant: "Sastha Koil", categoryId: "housing", date: "Aug 5", amount: 200, type: "expense" },
	{ id: "t15", merchant: "Flour", categoryId: "transport", date: "Aug 10", amount: 800, type: "expense" },
	{ id: "t15", merchant: "Snacks", categoryId: "transport", date: "Aug 10", amount: 500, type: "expense" },
];
