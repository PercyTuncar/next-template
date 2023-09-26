"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button" 
import {Button} from "@nextui-org/react";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Componentes bellamente diseñados y<br className="hidden sm:inline" />
        construido con  Next UI y Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        ¡Potentes componentes accesibles y totalmente personalizables listos para integrar en 
        tus aplicaciones! Totalmente gratuito, de código abierto y optimizado para Next.js 13.
        </p>
      </div>
      <div className="flex gap-4">
      <Button >
      <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentación
        </Link>
      </Button>
      <Button > 
      <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </Button>
       
      </div>
    </section>
  )
}
