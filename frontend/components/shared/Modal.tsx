import styled from "styled-components"
import { ReactNode, useEffect } from "react"
import { XIcon } from "@heroicons/react/solid"
import { AnimatePresence, motion } from "framer-motion"

import { theme } from "../styles/ThemeStyles"
import Button from "./Button"

interface IModal {
  name: string
  content: ReactNode

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
        <Backdrop
          onClick={props.onClose}
          transition={{ duration: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ margin: 0 }}
        >
          <Wrapper
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
              <Header>
                <Title>{props.title}</Title>
                <Button
                  mode="secondary"
                  variant="outline"
                  onClick={props.onClose}
                  style={{
                    width: 32,
                    height: 32,
                    padding: 0,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <XIcon width={18} height={18} fill="white" />
                </Button>
              </Header>
            )}

            <Content>{props.content}</Content>

            {/* Footer */}
            {!props.hideFooter && (
              <Footer>
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
              </Footer>
            )}
          </Wrapper>
        </Backdrop>
      )}
    </AnimatePresence>
  )
}

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 40;
  display: grid;
  place-items: center;
`

const Wrapper = styled(motion.div)`
  gap: 16px;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.black500};
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
`

const Header = styled.header`
  gap: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
`

const Content = styled.div`
  padding: 0 16px;
`

const Footer = styled.footer`
  gap: 8px;
  display: flex;
  padding: 10px 16px;
  align-items: center;
  flex-direction: row-reverse;
  border-top: 1px solid ${theme.colors.black300};
`
