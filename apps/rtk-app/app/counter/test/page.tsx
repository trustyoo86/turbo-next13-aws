import StoreProvider from "../StoreProvider";
import Counter from '@/src/components/counter/Counter';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
  },
};

export default function CounterPage() {
  return (
    <StoreProvider>
      <div style={styles.container}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
        <div>F</div>
        <div>G</div>
      </div>
    </StoreProvider>
  )
}