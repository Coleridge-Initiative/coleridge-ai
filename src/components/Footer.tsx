
import { createClient } from "@/prismicio";
import ColeridgeLightIcon from "./ColeridgeLightIcon";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("sitesettings");
    return (
        <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 md:flex-row">
            <Link href="/">
                <ColeridgeLightIcon />
                <span className="sr-only">Coleridge.ai Home Page</span>
            </Link>
            <nav aria-label="Footer">
                <ul className="flex gap-6">
                    {settings.data.navigation.map((item:any) => (
                        <li key={item.label}>
                            <PrismicNextLink 
                                field={item.link}
                                className="inline-flex min-h-11 items-center">
                                {item.label}
                            </PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </footer>
    );
}
