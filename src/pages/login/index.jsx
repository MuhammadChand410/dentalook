import { Helmet } from "react-helmet";
import Login from "./login";

export default function Logiin() {
    return (
        <>
            <Helmet>
                <title>Logins</title>
                <meta name="description" content="Homepage for My Awesome Website" />
                <meta property="og:title" content="Home — My Awesome Website" />
                <meta property="og:description" content="Homepage for My Awesome Website" />
                <meta property="og:url" content="https://dentalook-project.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Login />
        </>
    )
}