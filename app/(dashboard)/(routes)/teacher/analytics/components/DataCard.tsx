import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/lib/format";
import React from "react";

interface Props {
  value: number;
  label: string;
  shouldFormat?: boolean;
}

const DataCard = ({ value, label, shouldFormat }: Props) => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{label}</CardTitle>
        <CardContent>
          <div className="text-2xl font-bold">
            {shouldFormat ? formatPrice(value) : value}
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default DataCard;
