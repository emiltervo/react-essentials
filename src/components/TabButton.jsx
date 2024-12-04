export default function TabButton({ children, isActive, onClick }) {
    return (
        <li>
            <button onClick={onClick} className={isActive ? 'active' : ''}>
                {children}
            </button>
        </li>
    )
}