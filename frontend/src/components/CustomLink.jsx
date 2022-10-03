import { useResolvedPath, useMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function CustomLink({ to, children, className }) {
    const activePath = useResolvedPath(to)
    const isActive = useMatch({path: activePath.pathname, end: true})
    return <Link to={to} className={`${isActive ? 'font-semibold' : 'font-medium'} ${className}`}>{children}</Link>
}