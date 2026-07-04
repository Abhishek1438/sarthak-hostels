'use client'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2 }: AnimatedCounterProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const reducedMotion = useReducedMotion()

  return (
    <span ref={ref}>
      {reducedMotion ? (
        `${prefix}${end}${suffix}`
      ) : (
        <CountUp
          start={0}
          end={inView ? end : 0}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          preserveValue
        />
      )}
    </span>
  )
}
