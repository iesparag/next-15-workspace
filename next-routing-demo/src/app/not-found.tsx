"use client"
import { usePathname } from "next/navigation"

export default function NotFound(){
                const pathName  = usePathname();
                console.log(pathName.split("/")[0],"pathName");
                
                return (
                                <>
                                <h1>Page not Found</h1>
                                </>
                )
}