interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}
const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-white px-12 py-3 font-lg font-semibold rounded-2xl bg-gradient-to-tr from-indigo-500 to-indigo-700 hover:from-indigo-500 hover:to-indigo-800 shadow-2xl shadow-stone-800/30 transition hover:scale-110"
    >
      {children}
    </button>
  );
};

export default Button;
