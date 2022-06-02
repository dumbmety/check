import { useEffect } from "react"
import { XIcon } from "@heroicons/react/solid"
import { AnimatePresence, motion } from "framer-motion"

import { IModal } from "../../types/Components"
import Button from "./Button"

const dropIn = {
  exit: { scale: 0.75, opacity: 0 },
  hidden: { scale: 0.75, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
}

export default function Modal(props: IModal) {
  useEffect(() => {
    if (document.body) {
      document.body.style.overflow = props.isOpen ? "hidden" : "auto"
    }
  }, [props.isOpen])

  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
      onExitComplete={() => null}
    >
      {props.isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 grid place-items-center"
          onClick={props.onClose}
          transition={{ duration: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ margin: 0 }}
        >
          <motion.div
            className="space-y-4 flex flex-col rounded-md bg-gray-700 shadow-xl"
            onClick={e => e.stopPropagation()}
            data-model={`modal-${props.name}`}
            transition={{ duration: 0.2 }}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ minWidth: props.minWidth }}
          >
            {/* Header */}
            {props.title && (
              <header className="p-4 pb-0 flex items-center justify-between space-x-2">
                <h2 className="text-lg font-semibold">{props.title}</h2>
                <Button
                  mode="secondary"
                  variant="outline"
                  onClick={props.onClose}
                  className="w-8 h-8 flex items-center justify-center"
                  style={{ padding: 0 }}
                >
                  <XIcon width={18} height={18} fill="white" />
                </Button>
              </header>
            )}

            <div className="px-4">{props.content}</div>

            {/* Footer */}
            {!props.hideFooter && (
              <footer className="flex flex-row-reverse items-center space-x-2 space-x-reverse py-3 px-4 border-t border-gray-600">
                {props.okayButton && (
                  <Button
                    mode="primary"
                    variant="solid"
                    onClick={props.onOkay}
                    disabled={props.disabledOkayButton}
                  >
                    {props.okayButton}
                  </Button>
                )}
                {props.cancelButton && (
                  <Button
                    mode="secondary"
                    variant="outline"
                    onClick={props.onCancel}
                  >
                    {props.cancelButton}
                  </Button>
                )}
              </footer>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
