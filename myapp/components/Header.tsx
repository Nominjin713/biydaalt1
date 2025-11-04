import Link from 'next/link';
export default function Header(){
    return(<header className="p-6 bg-blue-600 text-whit mp-4">
        <h1 className="text-2xl">Энэ бол Бямбасүрэн Батзориг намтар </h1>
         <header>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/about">About</Link> | 
        <Link href="/contact">Contact</Link> | 
        <Link href="/blog">Blog</Link> |
        <Link href="/gallery">Gallery</Link> |
        <Link href="/counter">Counter</Link>  |
        <Link href="/todo">todo</Link> |
        <Link href="/login">login</Link> |
        <Link href="/register">register</Link> |
        <Link href="/users">users</Link>

      </nav>
    </header>
    </header>)}
