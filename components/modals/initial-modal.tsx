"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,

  } from "@/components/ui/dialog"
  import { useForm } from "react-hook-form"
  import * as z from "zod"
  import {zodResolver} from "@hookform/resolvers/zod"

export const InitialModal = () => {
    const form = useForm({
        defaultValues: {
            name: "",
            imageUrl: "",   
        },});

    
    return (
        <Dialog open>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-semibold">
                        CRIE O SEU SERVIDOR
                        </DialogTitle>
                        <DialogDescription className="text-center text-zinc-500">
                            Personalize o seu servidor e deixe ele com a sua cara
                        </DialogDescription>

                </DialogHeader>
                

            </DialogContent>
        </Dialog>
    )
}