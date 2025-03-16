import { getAnalytics } from "@/actions/getAnalytics";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DataCard from "./components/DataCard";

const Analytics = async () => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }

  const { data, totalRevenue, totalSales } = await getAnalytics(userId);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard  label="Total Sales" value={totalSales} shouldFormat />
        <DataCard label="Total Revenue" value={totalRevenue} />
      </div>
    </div>
  );
};

export default Analytics;
