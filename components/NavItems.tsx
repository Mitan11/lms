'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navItems = [
    {
        label: "Home", href: '/'
    },
    {
        label: "Companions", href: '/companions'
    },
    {
        label: "My Journey", href: '/my-journey'
    },
]

function NavItems() {
    const pathName = usePathname();

    return (
        <nav className='flex items-center gap-4'>
            {navItems.map(({ label, href }, index) => (
                <Link href={href} key={label} className={cn(pathName === href && 'text-primary font-semibold transition-all')}>{label}</Link>
            ))}
        </nav>
    )
}

export default NavItems