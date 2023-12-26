'use client';

import { decrement, increment, incrementByAmount, initializeCount, selectCount } from "@/lib/features/counter/counterSlice";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import { useRef } from "react";

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    widht: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as const,
  },
  paragraph: {
    fontSize: 15,
    color: '#333',
    marginBottom: 10,
  },
  input: {
    background: '#fff',
    padding: 10,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
};

export default function Counter() {
  const store = useAppStore();
  const num = useAppSelector(selectCount);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIncrement = () => {
    store.dispatch(increment());
  };

  const handleDecrement = () => {
    store.dispatch(decrement());
  };

  const handleInit = () => {
    store.dispatch(initializeCount(0));
  };

  const handleIncrementAmount = () => {
    const value = inputRef.current?.value;
    store.dispatch(incrementByAmount(Number(value)));
  };

  return (
    <div style={styles.container}>
      <p style={styles.paragraph}>숫자: {num}</p>
      <input placeholder="숫자 입력" type="number" style={styles.input} ref={inputRef} />
      <button onClick={handleIncrement} style={styles.button}>증가</button>
      <button onClick={handleDecrement} style={styles.button}>감소</button>
      <button onClick={handleInit} style={styles.button}>초기화</button>
      <button onClick={handleIncrementAmount} style={styles.button}>입력한 양만큼 증가</button>
    </div>
  );
}