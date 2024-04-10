'use client'
import useCartService from "@/lib/hooks/useCartStore"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const Menu = () => {
    const { items } = useCartService()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    const signoutHandler = () => {
        signOut({ callbackUrl: '/signin' })
    }

    const { data: session } = useSession()

    return (
        <div>
            <nav className="sm:flex sm:justify-center sm:items-center mt-4">
                <div className="flex flex-col sm:flex-row">
                    <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Home</a>
                    <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/product">Shop</Link>
                    <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Categories</a>
                    <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Contact</a>
                    <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">About</a>
                </div>
            </nav>
        </div>
    )
}
export default Menu