'use client';

import { decrement, increment } from "@/lib/features/counter/counterSlice";
import { useAppSelector, useAppStore } from "@/lib/hooks";

export default function Counter() {
  const store = useAppStore();
  const num = useAppSelector(state => state.counter.value);

  const handleIncrement = () => {
    store.dispatch(increment());
  };

  const handleDecrement = () => {
    store.dispatch(decrement());
  };

  return (
    <div>
      숫자: {num}
      <input placeholder="숫자 입력" type="number" />
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
    </div>
  );
}