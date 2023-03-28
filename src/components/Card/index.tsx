import { ArrowSquareOut } from '@phosphor-icons/react'
import Link from 'next/link'

import { CardBox } from './styles'

interface CardProps {
  title: string
  description: string
  link: string
  href: string
}

export function Card(props: CardProps) {
  return (
    <CardBox>
      <strong>{props.title}</strong>
      <span>{props.description}</span>

      <Link href={props.href} rel="external" target="_blank">
        {props.link}
        <ArrowSquareOut weight="bold" />
      </Link>
    </CardBox>
  )
}
