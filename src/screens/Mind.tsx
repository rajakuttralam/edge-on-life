import { useMemo, useState } from "react";
import BudgetRing from "../components/BudgetRing";
import CategoryCard from "../components/CategoryCard";
import TransactionRow from "../components/TransactionRow";
import MonthSwitcher from "../components/MonthSwitcher";
import { budgetCategories, transactions, monthlyIncome, idCard, interestFreeLoan } from "../budgetData";
import IdentityCard from "../components/IdentityCard";
import IFL from "../components/IFL";

const months = ["June 2026", "July 2026", "August 2026"];

export default function Mind() {
	const [monthIndex, setMonthIndex] = useState(months.length - 1);

	const totalBudget = useMemo(
		() => budgetCategories.reduce((sum, c) => sum + c.budget, 0),
		[]
	);
	const totalSpent = useMemo(
		() => budgetCategories.reduce((sum, c) => sum + c.spent, 0),
		[]
	);
	const remaining = totalBudget - totalSpent;
	const leftToSpendOfIncome = monthlyIncome - totalSpent;


	return (
		<div className="mt-3 grid grid-cols-1 gap-3 w-[90%]">
			<div className="mt-1 shadow-sm divide-y divide-[#111a2e]/[0.06] rounded-3xl bg-white px-4 shadow-[0_10px_24px_-14px_rgba(15,23,41,0.2)]">
				<p className="leading-0.4 p-2 text-justify">Biologically, I act instantly while  thinking. My brains are just processing information at an incredibly high speed, or they are “Thinking out Loud" (மனதிலிருப்பதை வெளிப்படையாகப் பேசுதல்)
					Problems
					Frequently saying hurtful things that lead to regret or broken relationships.
					Interrupting others constantly because of an inability to wait for a turn.
					Making reckless, sudden decisions
					More Likely overspending or unsafe physical acts
					Root Cause
					Growing up with loud or competitive siblings (Family Brother)
					Anxiety due to no one listen   (Family Parents)
					Moral Failure (Wife side)  I am dealing with a medical and neurological issue.
					ADHD/ Learning Disability (School & Collage)
					Stress (Work Environment)
					Solution
					Brain Filter
					Freeze all credit
					Cut off instant access of cash
					Remove digital triggers
					Write It Down before speak
					Separate my needs
					Build Self Respect
					Angry - கோபமான (Rectifiable) | Stress  & BP
					Sorrow - துக்கம் (Irreparable) | Diabetics
					Lie - பொய்
					Truth - உண்மை</p>
			</div>
		</div>
	);
}
