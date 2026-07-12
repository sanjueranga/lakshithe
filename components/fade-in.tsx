"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

type Direction = "up" | "down" | "left" | "right" | "none"

interface FadeInProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number
}

const OFFSET = 32

const getInitial = (direction: Direction) => {
  switch (direction) {
    case "up":
      return { opacity: 0, y: OFFSET }
    case "down":
      return { opacity: 0, y: -OFFSET }
    case "left":
      return { opacity: 0, x: -OFFSET }
    case "right":
      return { opacity: 0, x: OFFSET }
    default:
      return { opacity: 0 }
  }
}

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98]

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  amount = 0.3,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
}

export function StaggerContainer({
  children,
  className,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode
  className?: string
  once?: boolean
  amount?: number
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}
