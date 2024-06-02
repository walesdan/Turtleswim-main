'use client'

import { FormStep } from "../components/FormStep";
import { Sidebar } from "../components/Sidebar";
import { FormProvider } from "../contexts/form";
import logo from '../assets/images/turtle.png';
import Image from "next/image";
import Link from "next/link";

import { FormStepProvider } from "../contexts/form-step";

export default function Home() {
  return (
    <FormStepProvider>
      <FormProvider>
        <main className={`
          flex flex-col h-screen m-0
          sm:flex-row sm:m-4 sm:mr-0 sm:h-[calc(100vh-32px)]`
        }>
          <Sidebar />
          <div className="flex flex-1 sm:max-w-[550px] sm:flex-0 sm:mx-auto">
            <FormStep />
           
          </div>
          <Link href="/">
      <a className="hidden sm:block">
        <Image src={logo} width={350} height={400} className="w-auto h-auto" alt="Logo" />
      </a>
    </Link>
        </main >
      </FormProvider>
    </FormStepProvider>
  )
}