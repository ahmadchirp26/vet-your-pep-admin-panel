import { Combobox as ComboboxPrimitive, Transition } from "@headlessui/react";
import cn from "@/utils/class-names";
import {
  type Placement,
  flip,
  shift,
  offset,
  autoUpdate,
  useFloating,
} from "@floating-ui/react";
import { useElementSize } from "@/hooks/use-element-size";
import { RxChevronDown } from "react-icons/rx";
import { FieldError } from "rizzui";

const labelClasses = {
  size: {
    sm: "text-xs mb-1",
    DEFAULT: "text-sm mb-1.5",
    lg: "text-sm mb-1.5",
    xl: "text-base mb-2",
  },
};

const selectClasses = {
  base: "flex items-center peer w-full transition duration-200",
  disabled: "!bg-gray-100 cursor-not-allowed !border-gray-200",
  error: "!border-red hover:!border-red focus:!border-red focus:!ring-red",
  size: {
    sm: "px-2 py-1 text-xs h-8 leading-[32px]",
    DEFAULT: "px-3 py-2 text-sm h-10 leading-[40px]",
    lg: "px-4 py-2 text-base h-12 leading-[48px]",
    xl: "px-5 py-2.5 text-base h-14 leading-[56px]",
  },
  rounded: {
    none: "rounded-none",
    sm: "rounded-sm",
    DEFAULT: "rounded-md",
    lg: "rounded-lg",
    pill: "rounded-full",
  },
  variant: {
    active: {
      base: "border bg-gray-0 focus:ring-[0.6px]",
      color: {
        DEFAULT:
          "border-gray-900 focus:border-gray-1000 focus:ring-gray-1000 text-gray-1000",
        primary:
          "border-primary focus:border-primary focus:ring-primary text-primary-dark",
        secondary:
          "border-secondary focus:border-secondary focus:ring-secondary text-secondary-dark",
        danger: "border-red focus:border-red focus:ring-red text-red-dark",
        info: "border-blue focus:border-blue focus:ring-blue text-blue-dark",
        success:
          "border-green focus:border-green focus:ring-green text-green-dark",
        warning:
          "border-orange focus:border-orange-dark focus:ring-orange-dark text-orange-dark",
      },
    },
    flat: {
      base: "focus:ring-2 focus:bg-transparent border-0",
      color: {
        DEFAULT: "bg-gray-200/70 focus:ring-gray-900/20 text-gray-1000",
        primary:
          "bg-primary-lighter/70 focus:ring-primary/30 text-primary-dark",
        secondary:
          "bg-secondary-lighter/70 focus:ring-secondary/30 text-secondary-dark",
        danger: "bg-red-lighter/70 focus:ring-red/30 text-red-dark",
        info: "bg-blue-lighter/70 focus:ring-blue/30 text-blue-dark",
        success: "bg-green-lighter/70 focus:ring-green/30 text-green-dark",
        warning: "bg-orange-lighter/80 focus:ring-orange/30 text-orange-dark",
      },
    },
    outline: {
      base: "bg-transparent focus:ring-[0.6px] border border-gray-300",
      color: {
        DEFAULT:
          "hover:border-gray-1000 focus:border-gray-1000 focus:ring-gray-1000",
        primary: "hover:border-primary focus:border-primary focus:ring-primary",
        secondary:
          "hover:border-secondary focus:border-secondary focus:ring-secondary",
        danger: "hover:border-red focus:border-red focus:ring-red",
        info: "hover:border-blue focus:border-blue focus:ring-blue",
        success: "hover:border-green focus:border-green focus:ring-green",
        warning: "hover:border-orange focus:border-orange focus:ring-orange",
      },
    },
    text: {
      base: "border-0 focus:ring-2 bg-transparent",
      color: {
        DEFAULT: "hover:text-gray-1000 focus:ring-gray-900/20",
        primary: "hover:text-primary-dark focus:ring-primary/30 text-primary",
        secondary:
          "hover:text-secondary-dark focus:ring-secondary/30 text-secondary",
        danger: "hover:text-red-600 focus:ring-red/30 text-red",
        info: "hover:text-blue-dark focus:ring-blue/30 text-blue",
        success: "hover:text-green-dark focus:ring-green/30 text-green",
        warning: "hover:text-orange-dark focus:ring-orange/30 text-orange",
      },
    },
  },
};

const optionsClasses = {
  base: "max-h-[265px] p-2 w-full overflow-auto border border-gray-100 focus:outline-none z-40 bg-white dark:bg-gray-100 [&>ul]:outline-none [&>ul]:ring-0",
  shadow: {
    sm: "drop-shadow-md",
    DEFAULT: "drop-shadow-lg",
    lg: "drop-shadow-xl",
    xl: "drop-shadow-2xl",
  },
  rounded: {
    none: "rounded-none",
    sm: "rounded-sm",
    DEFAULT: "rounded-md",
    lg: "rounded-lg",
    pill: "rounded-xl",
  },
};

const optionClasses = {
  base: "text-gray-900 relative cursor-pointer select-none text-sm dark:hover:bg-gray-50",
  notFound:
    "relative cursor-default select-none text-center text-gray-500 whitespace-nowrap",
  color: {
    DEFAULT: "text-gray-900 bg-gray-100",
    primary: "text-primary-dark bg-primary-lighter",
    secondary: "text-secondary-dark bg-secondary-lighter",
    danger: "text-red-dark bg-red-lighter",
    info: "text-blue-dark bg-blue-lighter",
    success: "text-green-dark bg-green-lighter",
    warning: "text-orange-dark bg-orange-lighter",
  },
};

// actual select field styles
const selectFieldClasses = {
  base: "w-full text-inherit border-0 p-0 focus:outline-none focus:ring-0",
  disabled: "cursor-not-allowed placeholder:text-gray-500",
  clearable:
    "[&:placeholder-shown~.input-clear-btn]:opacity-0 [&:placeholder-shown~.input-clear-btn]:invisible [&:not(:placeholder-shown)~.input-clear-btn]:opacity-100 [&:not(:placeholder-shown)~.input-clear-btn]:visible",
  prefixStartPadding: {
    base: "rtl:pl-[inherit]",
    size: {
      sm: "pl-1.5 rtl:pr-1.5",
      DEFAULT: "pl-2.5 rtl:pr-2.5",
      lg: "pl-3.5 rtl:pr-3.5",
      xl: "pl-4 rtl:pr-4",
    },
  },
  suffixEndPadding: {
    base: "rtl:pr-[inherit]",
    size: {
      sm: "pr-1.5 rtl:pl-1.5",
      DEFAULT: "pr-2.5 rtl:pl-2.5",
      lg: "pr-3.5 rtl:pl-3.5",
      xl: "pr-4 rtl:pl-4",
    },
  },
};

const displayValueFn = <T,>(option: SelectOption<T>) => {
  return option.label ?? "";
};
const getOptionDisplayValueFn = <T,>(option: SelectOption<T>) => {
  return option.label ?? "";
};
export type SelectOption<T> = {
  value: T;
  id: string;
  label?: string;
  disabled?: boolean;
  [key: string]: unknown;
};

interface Props<T> {
  query?: string;
  setQuery: (value: string) => void;
  options?: SelectOption<T>[];
  value?: SelectOption<T> | null;
  onChange?: (value: SelectOption<T> | null | undefined) => void;
  isLoading?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  placeholder?: string;
  size?: keyof typeof labelClasses.size;
  rounded?: keyof typeof selectClasses.rounded;
  variant?: keyof typeof selectClasses.variant;
  color?: keyof (typeof selectClasses.variant)["outline"]["color"];
  clearable?: boolean;
  isRequired?: boolean;
  useContainerWidth?: boolean;
  onClear?: (event: React.MouseEvent) => void;
  error?: string;
  helperText?: React.ReactNode;
  className?: string;
  placement?: Placement;
  labelClassName?: string;
  selectClassName?: string;
  optionClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
  dropdownClassName?: string;
  displayValue?(option: SelectOption<T>): string;
  getOptionDisplayValue?(option: SelectOption<T>): React.ReactNode;
}

export default function Combobox<T>({
  selectClassName,
  size = "DEFAULT",
  rounded = "DEFAULT",
  variant = "outline",
  color = "DEFAULT",
  placement = "bottom-start",
  placeholder = "Select an option",
  clearable = true,
  options = [],
  useContainerWidth = true,
  disabled,
  error,
  dropdownClassName,
  optionClassName,
  labelClassName,
  errorClassName,
  label,
  isRequired,
  query,
  setQuery,
  isLoading,
  value,
  onChange,
  displayValue = displayValueFn,
  getOptionDisplayValue = getOptionDisplayValueFn,
}: Props<T>) {
  const [ref, { width }] = useElementSize();
  const { x, y, refs, strategy } = useFloating({
    placement,
    middleware: [
      flip(),
      shift(),
      offset({
        mainAxis: 6,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const variantStyle = selectClasses.variant[variant];

  return (
    <ComboboxPrimitive
      value={value}
      onChange={onChange}
      nullable={clearable as true}
    >
      {({ open }) => (
        <div ref={refs.setReference}>
          <div ref={ref}>
            {label && (
              <ComboboxPrimitive.Label
                className={cn(
                  "block font-medium",
                  labelClasses.size[size],
                  labelClassName,
                )}
              >
                {label}
                {isRequired && (
                  <span className="ms-1 font-medium text-red-light">*</span>
                )}
              </ComboboxPrimitive.Label>
            )}
            <div className="relative">
              <ComboboxPrimitive.Input
                placeholder={placeholder}
                className={cn(
                  selectClasses.base,
                  selectFieldClasses.base,
                  variantStyle.base,
                  variantStyle.color[color],
                  selectClasses.size[size],
                  selectClasses.rounded[rounded],
                  disabled && selectFieldClasses.disabled,
                  clearable && selectFieldClasses.clearable,
                  // isFocus && 'is-focus', // must have is-focus class based on onFocus event
                  disabled && selectClasses.disabled,
                  error && selectClasses.error,
                  selectClassName,
                )}
                autoComplete={"off"}
                autoCapitalize="off"
                autoCorrect="off"
                onChange={(event) => setQuery(event.target.value)}
                displayValue={(v) =>
                  v ? displayValue(v as SelectOption<T>) : ""
                }
              />
              <ComboboxPrimitive.Button className="absolute right-4 top-3">
                <RxChevronDown className="h-4 w-4" />
              </ComboboxPrimitive.Button>
            </div>
          </div>
          <Transition
            ref={refs.setFloating}
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="z-[9999]"
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              ...(useContainerWidth && { width }),
            }}
            afterLeave={() => setQuery("")}
          >
            {open && Boolean(query) && (
              <ComboboxPrimitive.Options
                className={cn(
                  optionsClasses.base,
                  optionsClasses.shadow[size],
                  optionsClasses.rounded[rounded],
                  dropdownClassName,
                )}
                static
              >
                {isLoading ? (
                  <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                    Loading...
                  </div>
                ) : options.length === 0 ? (
                  <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  options.map((option) => (
                    <ComboboxPrimitive.Option
                      key={option.id}
                      className={({ active }) =>
                        cn(
                          "px-3 py-2 text-sm",
                          optionClasses.base,
                          selectClasses.base,
                          optionsClasses.rounded[rounded],
                          option?.disabled && selectClasses.disabled,
                          option?.disabled && "text-gray-500",
                          active && optionClasses.color[color],
                          optionClassName,
                        )
                      }
                      value={option}
                    >
                      {({ selected }) => (
                        <div
                          className={cn({
                            "font-medium": selected,
                          })}
                        >
                          {getOptionDisplayValue(option)}
                        </div>
                      )}
                    </ComboboxPrimitive.Option>
                  ))
                )}
              </ComboboxPrimitive.Options>
            )}
          </Transition>
          {error && (
            <FieldError size={size} error={error} className={errorClassName} />
          )}
        </div>
      )}
    </ComboboxPrimitive>
  );
}
