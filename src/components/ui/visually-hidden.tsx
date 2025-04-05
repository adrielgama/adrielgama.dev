import { VisuallyHidden as VisuallyHiddenPrimitive } from '@radix-ui/react-visually-hidden'

export function VisuallyHidden({
  ...props
}: React.ComponentProps<typeof VisuallyHiddenPrimitive>) {
  return <VisuallyHiddenPrimitive data-slot="visually-hidden" {...props} />
}
