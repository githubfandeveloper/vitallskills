export function Badge({ className='', children }){
  return <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs border ${className}`}>{children}</span>
}
