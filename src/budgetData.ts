// import type { BudgetCategory, Transaction } from "./types";

export const monthlyIncome = 4200;

export const budgetCategories: any[] = [
	{ id: "housing", name: "Home Loan", icon: "home", color: "#6c63ff", budget: 1041000, spent: 10322 },
	{ id: "food", name: "Muthoot PL", icon: "utensils", color: "#f5a623", budget: 41000, spent: 3350 },
	{ id: "transport", name: "MoneyView", icon: "car", color: "#2fd4a6", budget: 100050, spent: 7100 },
	{ id: "shopping", name: "SBI CC", icon: "bag", color: "#ff6b6b", budget: 138000, spent: 9050 },
	{ id: "entertainment", name: "Entertainment", icon: "film", color: "#4ec5f1", budget: 150, spent: 96 },
	{ id: "health", name: "Health", icon: "heart", color: "#c084fc", budget: 120, spent: 45 },
	{ id: "utilities", name: "Utilities", icon: "zap", color: "#a0a4ab", budget: 220, spent: 205 },
	{ id: "savings", name: "Savings", icon: "piggy", color: "#111a2e", budget: 500, spent: 500 },
];

export const transactions: any[] = [
	{ id: "t1", merchant: "Whole Foods Market", categoryId: "food", date: "Aug 16", amount: 64.2, type: "expense" },
	{ id: "t2", merchant: "Uber", categoryId: "transport", date: "Aug 16", amount: 18.5, type: "expense" },
	{ id: "t3", merchant: "Salary — Acme Co.", categoryId: "savings", date: "Aug 15", amount: 4200, type: "income" },
	{ id: "t4", merchant: "Netflix", categoryId: "entertainment", date: "Aug 14", amount: 15.99, type: "expense" },
	{ id: "t5", merchant: "Zara", categoryId: "shopping", date: "Aug 13", amount: 128.0, type: "expense" },
	{ id: "t6", merchant: "City Power & Water", categoryId: "utilities", date: "Aug 12", amount: 205.0, type: "expense" },
	{ id: "t7", merchant: "Rent — Maple Apartments", categoryId: "housing", date: "Aug 1", amount: 1400.0, type: "expense" },
];
