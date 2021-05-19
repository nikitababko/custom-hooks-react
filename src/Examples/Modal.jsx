import { useModal } from '../hooks';

const Client = () => {
  const { isOpen, onToggle } = useModal();

  return (
    <div>
      <button onClick={onToggle}>Click me</button>
      {isOpen && <div>It's modal</div>}
    </div>
  );
};

export default Client;
