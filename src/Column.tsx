import React from "react"
import { AddNewItem } from "./AddNewItem"
import { useAppState } from "./AppStateContext"
import { ColumnContainer, ColumnTitle } from './styles'

interface ColumnProps {
  text: string
  index: number
}

export const Column = ({
  text,
  children
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map(task => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  )
}
