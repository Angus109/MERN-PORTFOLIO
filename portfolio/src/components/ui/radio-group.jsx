"use client"

import { cn } from "@/lib/utils"
import { createContext, useContext, useState } from "react"

const RadioGroupContext = createContext()

const RadioGroup = ({ className, value, onValueChange, defaultValue, ...props }) => {
  const [internalValue, setInternalValue] = useState(defaultValue || "")
  const currentValue = value !== undefined ? value : internalValue

  const handleValueChange = (newValue) => {
    if (value === undefined) {
      setInternalValue(newValue)
    }
    onValueChange?.(newValue)
  }

  return (
    <RadioGroupContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
      <div className={cn("grid gap-2", className)} role="radiogroup" {...props} />
    </RadioGroupContext.Provider>
  )
}

const RadioGroupItem = ({ className, value, id, ...props }) => {
  const context = useContext(RadioGroupContext)
  const isChecked = context?.value === value

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isChecked}
      data-state={isChecked ? "checked" : "unchecked"}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      onClick={() => context?.onValueChange?.(value)}
      {...props}
    >
      <div className={cn("flex items-center justify-center", isChecked && "h-2.5 w-2.5 rounded-full bg-current")} />
    </button>
  )
}

export { RadioGroup, RadioGroupItem }
