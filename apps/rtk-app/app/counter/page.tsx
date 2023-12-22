import StoreProvider from "./StoreProvider";
import Counter from '@/src/components/counter/Counter';

export default function CounterPage() {
  return (
    <StoreProvider>
      <div>
        <Counter />
      </div>
    </StoreProvider>
  )
}