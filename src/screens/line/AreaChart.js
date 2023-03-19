import {
  ResponsiveContainer,
  XAxis,
  CartesianGrid,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from 'recharts';

export default function LineChartAxisInterval({ data }) {
  return (
    <ResponsiveContainer height={248} width={903}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0F81CE" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#0F81CE" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#C52D81" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#C52D81" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorZv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1BBA64" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#1BBA64" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="1" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="blue"
          stroke="#0F81CE"
          stackId="1"
          fillOpacity={1}
          fill="url(#colorUv)"
          strokeWidth={2}
          dot={{ r: 2 }}
        />
        <Area
          type="monotone"
          dataKey="red"
          stackId="1"
          stroke="#C52D81"
          fillOpacity={1}
          fill="url(#colorPv)"
          strokeWidth={2}
          dot={{ r: 2 }}
        />
        <Area
          type="monotone"
          dataKey="green"
          stackId="1"
          stroke="#1BBA64"
          fillOpacity={1}
          fill="url(#colorZv)"
          strokeWidth={2}
          dot={{ r: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
