export interface IModal {
  name: string
  content: React.ReactNode

  minWidth?: number

  title?: string
  className?: string

  hideFooter?: boolean
  hideCloseButton?: boolean

  okayButton?: string
  loadingOkayButton?: boolean
  disabledOkayButton?: boolean

  cancelButton?: string

  isOpen: boolean
  onOkay: () => void
  onClose: () => void
  onCancel: () => void
}
