"use client";

import { Content } from "@prismicio/client";
import ColeridgeLightIcon from "./ColeridgeLightIcon";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import ButtonLink from "./ButtonLink";
import { it } from "node:test";
type NavBarProps = {
    settings: Content.SitesettingsDocument;
}
export default function NavBar({settings}: NavBarProps) {
  return (
    <nav className="px-4 py-4 md:px-6 md-:py-6 " aria-label="Main">
        <div className="mx-auto flex max-w-6xl flex-col justify-between
             py-2 font-medium text-white md:flex-row md:items-center">
            <Link href="/">
                <ColeridgeLightIcon/>
                <span className="sr-only">Coleridge Ai Home Page</span>
            </Link>
                    <ul className="flex gap-6">
                        {settings.data.navigation.map((item:any) => {
                            
                            if (item.cta_button) {
                                return (
                                    <li key={item.label}>
                                        <ButtonLink field={item.link} >
                                            {item.label}
                                        </ButtonLink>
                                    </li>
                                )
                            }
                            return(
                             <li key={item.label}>
                                <PrismicNextLink 
                                    field={item.link}
                                    className="inline-flex min-h-11 items-center">
                                    {item.label}
                                </PrismicNextLink>
                             </li>
                            )
                        })}
                    </ul>
            </div>
    </nav> 
  )
}
