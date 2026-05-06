export default function Child(props) {
  return (
    <button
      onClick={() => {
        props.increment();
      }}
    >
      Increment Counter
    </button>
  );
}
