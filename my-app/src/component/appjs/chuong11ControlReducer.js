import Counter from "./component/advanced-react/state-reducer/Counter";
import useCounter from "./component/advanced-react/state-reducer/useCounter";
import "./index.css";

function App() {
  const useReducer = (state, action) => {
    switch (action.type) {
      case "decrement":
        return {
          count: state.count - 5,
        };
      default:
        return useCounter.reducer(state, action);
    }
  };
  const { count, handleDecrement, handleIncrement } = useCounter({
    initial: 0,
  });
  return (
    <div>
      <Counter
        count={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Counter>
    </div>
  );
}

export default App;
//
//
//
//
//     /*        App.js của control-props        */
//
//
// function App() {
//   // const [count, setCount] = useState(5);
//   // const handleCountchange = (newCount) => {
//   //   if (newCount > 10) setCount(0);
//   //   else setCount(newCount);
//   // };
//   return (
//     <div>
//       {/* <Counter value={count} onChange={handleCountchange}></Counter> */}
//       <Counter></Counter>
//     </div>
//   );
// }

// export default App;
