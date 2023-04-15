import { Inter } from 'next/font/google'
import styles from '@checklist/styles/LeftPane.module.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

type RightPaneProps = {
  addedToDos: AddedToDos[]
}

export default function RightPane({
  addedToDos
}: RightPaneProps) {
  return (
    <div className="right__pane">
        <ul>{addedToDos.map((todo, index) => {
          return <li key={`${index}_list_item`}>
            <input type="checkbox" name="checkbox" key={`${index}_check_box`} id={todo.todoText} />
            {' '}{todo.todoText}</li>
        })}</ul>
    </div>
  )
}

interface AddedToDos {
  isCompleted: boolean,
  todoText: string,
}
