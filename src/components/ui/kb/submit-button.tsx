"use client"

import { useFormStatus } from "react-dom"
import { useFormState } from "react-hook-form"

import { Button } from "@/components/ui/button"

export function FormSubmitButton({
  children,
  loader,
  ...buttonProps
}: {
  children: React.ReactNode
  loader?: React.ReactNode
} & React.ComponentProps<typeof Button>) {
  const { isSubmitting } = useFormState()

  return (
    <Button type="submit" disabled={isSubmitting} {...buttonProps}>
      {isSubmitting
        ? (loader ?? <span className="">Submitting...</span>)
        : children}
    </Button>
  )
}

export function FormSubmitButtonAction({
  children,
  loader,
  ...buttonProps
}: {
  children: React.ReactNode
  loader?: React.ReactNode
} & React.ComponentProps<typeof Button>) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} {...buttonProps}>
      {pending ? (loader ?? <span className="">Submitting...</span>) : children}
    </Button>
  )
}
