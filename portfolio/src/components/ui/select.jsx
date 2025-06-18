"use client"

import { cn } from "@/lib/utils"
import { useState, createContext, useContext } from "react"
import { ChevronDown, Check } from "lucide-react"

const SelectContext = createContext()

const Select = ({ children, value, onValueChange, defaultValue }) => {
  const [internalValue, setInternalValue] = useState(defaultValue || "")
  const [open, setOpen] = useState(false)
  const currentValue = value !== undefined ? value : internalValue

  const handleValueChange = (newValue) => {
    if (value === undefined) {
      setInternalValue(newValue)
    }
    onValueChange?.(newValue)
    setOpen(false)
  }

  return (
    <SelectContext.Provider
      value={{
        value: currentValue,
        onValueChange: handleValueChange,
        open,
        setOpen,
      }}
    >
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  )
}

const SelectTrigger = ({ className, children, ...props }) => {
  const context = useContext(SelectContext)

  return (
    <button
      type="button"
      role="combobox"
      aria-expanded={context?.open}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      onClick={() => context?.setOpen(!context.open)}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  )
}

const SelectValue = ({ placeholder, className, ...props }) => {
  const context = useContext(SelectContext)

  return (
    <span className={cn("block truncate", className)} {...props}>
      {context?.value || placeholder}
    </span>
  )
}

const SelectContent = ({ className, children, ...props }) => {
  const context = useContext(SelectContext)

  if (!context?.open) return null

  return (
    <div
      className={cn(
        "absolute top-full z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const SelectItem = ({ className, children, value, ...props }) => {
  const context = useContext(SelectContext)
  const isSelected = context?.value === value

  return (
    <div
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      onClick={() => context?.onValueChange?.(value)}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {isSelected && <Check className="h-4 w-4" />}
      </span>
      {children}
    </div>
  )
}

const SelectGroup = ({ className, children, ...props }) => {
  return (
    <div className={cn("p-1", className)} {...props}>
      {children}
    </div>
  )
}

const SelectLabel = ({ className, children, ...props }) => {
  return (
    <div className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props}>
      {children}
    </div>
  )
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel }
