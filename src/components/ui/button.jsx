export function Button({ className = '', children, ...props }) {
  return <button className={`px-4 h-10 rounded-2xl border shadow-sm hover:shadow ${className}`} {...props}>{children}</button>
}
