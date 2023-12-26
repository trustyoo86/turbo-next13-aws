import StoreProvider from "./StoreProvider";
import Counter from '@/src/components/counter/Counter';

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    background: '#fff',
  },
};

export default function CounterPage() {
  return (
    <StoreProvider>
      <div style={styles.container}>
        <Counter />
      </div>
    </StoreProvider>
  )
}