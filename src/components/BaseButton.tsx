interface BaseButtonProps {
  onClick: () => void;
}

function BaseButton({ onClick }: BaseButtonProps) {
  return (
    <button
      className="border border-gray-100 py-2 px-4 hover:bg-gray-100 transition-colors duration-300 ease-in-out"
      onClick={onClick}
    >
      This is a Button
    </button>
  );
}

export default BaseButton;
