import { Navbar } from "@/components/organisms/Navbar";

export default function AuthLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}