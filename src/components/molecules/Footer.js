import { Card } from '../atoms/Card'

export const Footer = ({ inter }) => (
    <div data-testid="footer" className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Card
            inter={inter}
            title="Deploy A"
            url="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            body="Instantly deploy your Next.js site to a shareable URL with Vercel." />
        <Card
            inter={inter}
            title="Deploy B"
            url="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            body="Instantly deploy your Next.js site to a shareable URL with Vercel." />
        <Card
            inter={inter}
            title="Deploy C"
            url="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            body="Instantly deploy your Next.js site to a shareable URL with Vercel." />
        <Card
            inter={inter}
            title="Deploy D"
            url="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            body="Instantly deploy your Next.js site to a shareable URL with Vercel." />
      </div>
)