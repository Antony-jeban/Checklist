import { Inter } from 'next/font/google'
import { FormEvent, FormEventHandler } from 'react'

const inter = Inter({ subsets: ['latin'] })

type LeftPaneProps = {
    onTODOTextChange: Function,
    onAddClickHandler: Function,
    isDisabled: boolean,
    todoText: string,
}

export default function LeftPane({
    onTODOTextChange,
    onAddClickHandler,
    isDisabled,
    todoText,
}: LeftPaneProps) {

  let canClearInput = false;

  function onSubmitHAndler(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    onAddClickHandler();
    canClearInput = true;
  }

  return (
    <form onSubmit={e => onSubmitHAndler(e)} className="left__pane">
        <input type="text"
          value={todoText}
          onChange={e => onTODOTextChange(e.target.value)}/>
        <button disabled={isDisabled}>+</button>
    </form>
  )
}
