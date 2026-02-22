import { Helmet } from "react-helmet";
import Vendors from "./dl-vendors";

export default function DlVendor() {
    return (
        <>
            <Helmet>
                <title>DL Vendors</title>
                <meta name="description" content="Homepage for My Awesome Website" />
                <meta property="og:title" content="Home — My Awesome Website" />
                <meta property="og:description" content="Homepage for My Awesome Website" />
                <meta property="og:url" content="https://dentalook-project.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Vendors />
        </>
    )
}