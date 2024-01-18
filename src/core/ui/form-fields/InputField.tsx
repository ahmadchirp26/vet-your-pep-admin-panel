import { type FieldHookConfig, useField } from 'formik'
import { type InputHTMLAttributes, type ReactNode } from 'react'
import { Label } from '../label'
import { cn } from '@/core/lib/utils'
import { Input } from '../input'

type Props = {
  label?: ReactNode
  labelClassName?: string
  validate?: FieldHookConfig<string>['validate']
} & InputHTMLAttributes<HTMLInputElement>
const InputField = ({ className, label, labelClassName, validate, ...props }: Props) => {
  const [field, meta] = useField({
    validate,
    ...props
  } as FieldHookConfig<string>)

  return (
    <div className={cn('flex min-w-[140px] flex-col space-y-2', className)}>
      {label ? (
        <Label
          htmlFor={props.id ? props.id : props.name}
          className={cn('font-semibold leading-relaxed text-blue-600', labelClassName)}
        >
          {label}
        </Label>
      ) : null}
      <Input
        id={props.id ? props.id : props.name}
        className={
          meta.touched && meta.error
            ? 'border border-red-600 bg-red-50 ring-offset-red-400'
            : 'focus:ring-gray-300'
        }
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={'text-xs font-medium text-red-600'}>
          {meta.error.length > 1 ? meta.error : meta.error}
        </div>
      ) : null}
    </div>
  )
}

export default InputField
