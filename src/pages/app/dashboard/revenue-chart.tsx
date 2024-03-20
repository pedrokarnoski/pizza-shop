import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '10/09', revenue: 1200 },
  { date: '11/09', revenue: 870 },
  { date: '12/09', revenue: 1100 },
  { date: '13/09', revenue: 800 },
  { date: '14/09', revenue: 640 },
  { date: '15/09', revenue: 1250 },
  { date: '16/09', revenue: 1270 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6 bg-background">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid className="stroke-muted" vertical={false} />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.orange['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
