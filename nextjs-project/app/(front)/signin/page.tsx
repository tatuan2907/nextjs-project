
import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
    title: "Sign in",
    description: "Sign in to your account",
}

export default async function Signin() {
    return (
        <Form />
    )
}
