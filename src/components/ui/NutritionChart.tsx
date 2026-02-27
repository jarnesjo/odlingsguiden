import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import type { NutritionDataPoint } from '../../data/types'
import { colors } from '../../theme/tokens'
import styles from './NutritionChart.module.css'

interface NutritionChartProps {
  data: NutritionDataPoint[]
}

const LEGEND = [
  { key: 'N', label: 'Kväve (N)', color: colors.chartN },
  { key: 'P', label: 'Fosfor (P)', color: colors.chartP },
  { key: 'K', label: 'Kalium (K)', color: colors.chartK },
] as const

const LABELS: Record<string, string> = {
  N: 'Kväve (N)',
  P: 'Fosfor (P)',
  K: 'Kalium (K)',
}

export function NutritionChart({ data }: NutritionChartProps) {
  return (
    <div>
      <div className={styles.wrapper}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="nGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.chartN} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.chartN} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="pGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.chartP} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.chartP} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="kGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.chartK} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.chartK} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: colors.textMuted }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fill: colors.textMuted }}
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                fontSize: 13,
              }}
              formatter={(value?: number, name?: string) => [`${value ?? 0}%`, LABELS[name ?? ''] || name || '']}
              labelFormatter={(label, payload) => {
                const item = payload?.[0]?.payload as NutritionDataPoint | undefined
                return item?.label ? `${label} - ${item.label}` : String(label)
              }}
            />
            <Area type="monotone" dataKey="N" stroke={colors.chartN} fill="url(#nGrad)" strokeWidth={2.5} dot={{ r: 3 }} />
            <Area type="monotone" dataKey="P" stroke={colors.chartP} fill="url(#pGrad)" strokeWidth={2.5} dot={{ r: 3 }} />
            <Area type="monotone" dataKey="K" stroke={colors.chartK} fill="url(#kGrad)" strokeWidth={2.5} dot={{ r: 3 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.legend}>
        {LEGEND.map((n) => (
          <div key={n.key} className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: n.color }} />
            {n.label}
          </div>
        ))}
      </div>
    </div>
  )
}
