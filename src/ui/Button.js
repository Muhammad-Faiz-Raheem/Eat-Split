export function Button({ reff, onClick, type, disabled, children }) {
  return (
    <button
      className={`${type === "delete" ? "del-btn" : "btn"} button`}
      ref={reff ? reff : null}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
