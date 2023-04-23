import './styles.css'
export default function Clear({
  onClick,
  color = '#f84d4d',
  style
}: {
  onClick: () => void
  color?: string
  style?: React.CSSProperties
}) {
  return (
    <button
      className="icon-button btn-clear btn-hover"
      onClick={onClick}
      style={style}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={color}
      >
        <path d="M12.48 3 7.73 7.75 3 12.59a2 2 0 0 0 0 2.82l4.3 4.3A1 1 0 0 0 8 20h12v-2h-7l7.22-7.22a2 2 0 0 0 0-2.83L15.31 3a2 2 0 0 0-2.83 0zM8.41 18l-4-4 4.75-4.84.74-.75 4.95 4.95-4.56 4.56-.07.08z"></path>
      </svg>
    </button>
  )
}
