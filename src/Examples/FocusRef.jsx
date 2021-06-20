import useFocus from '../hooks/useFocus';

const FocusRef = () => {
  const [inputRef, setInputFocus] = useFocus();

  return (
    <>
      <button onClick={setInputFocus}>Focus</button>
      <input ref={inputRef} />
    </>
  );
};

export default FocusRef;
