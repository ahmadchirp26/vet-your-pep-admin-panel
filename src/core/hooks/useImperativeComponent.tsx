import { type ReactNode, useState } from 'react'

/**
 * A function that takes a result of a variable type and returns nothing.
 * This will close our component and return to the caller of `openComponent`.
 */
type CloseComponent<ResultType> = (result: ResultType) => void

/**
 * A function that builds the UI for a component.
 * It takes the close function as a parameter and returns a `ReactNode`
 * that we can display.
 */
type ComponentFactory<ResultType> = (
  isOpen: boolean,
  close: CloseComponent<ResultType>
) => ReactNode

function useImperativeComponent<ComponentResult>(
  componentFactory: ComponentFactory<ComponentResult>
) {
  const [componentNode, setComponentNode] = useState<ReactNode | null>(
    componentFactory(false, () => {
      return
    })
  )

  function openComponent() {
    return new Promise<ComponentResult>(resolve => {
      function close(value: ComponentResult) {
        resolve(value)
        setComponentNode(componentFactory(false, close))
      }
      setComponentNode(componentFactory(true, close))
    })
  }

  return {
    componentNode,
    openComponent
  }
}
export default useImperativeComponent
