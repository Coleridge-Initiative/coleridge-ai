import { createClient } from "@/prismicio";
import NavBar from "./NavBar";

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("sitesettings");
  return (
    <header>
        <NavBar settings = {settings}/>
    </header>
  )
}
