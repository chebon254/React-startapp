import { useSelector, useDispatch } from 'react-redux'
import { incremented, decremented } from './redux/counter'

export default function Counter() {
  const count = useSelector((state) => state.counter.value) // Grabs the counter value from the store
  const dispatch = useDispatch() // Allows us to send commands to the store

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement</button>
    </div>
  )
}
