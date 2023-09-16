import { useModel } from '@umijs/max';

type Props = {};

export default function Future({}: Props) {
  const mes = useModel('demo');
  const num = useModel('counter');
  const { initialState } = useModel('@@initialState');
  console.log(initialState);
  console.log(num);
  const { counter, increment, decrement } = num;
  return (
    <div>
      <strong>{initialState?.currentUser?.country}</strong>
      <p>mes</p>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
