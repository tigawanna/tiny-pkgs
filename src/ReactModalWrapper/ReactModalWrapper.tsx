// Generated with util/create-component.js
import React from "react";
import { ReactModalWrapperProps } from "./ReactModalWrapper.types";
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { IconContext } from "react-icons/lib";
import "./ReactModalWrapper.css";


const ReactModalWrapper: React.FC<ReactModalWrapperProps> = (
    { isOpen, closeModal, styles, child, deps }) => {
    const { isMobile } = useCheckInMobile()
    const adjustSize = (size: string, mobile_size: string) => {
        return isMobile ? mobile_size : size
    }
    interface ModalStyles {
        overlay: React.CSSProperties,
        content: React.CSSProperties
    }
    const customStyles: ModalStyles = {
        overlay: {
            position: 'fixed',
            zIndex: 60,
            top: adjustSize(styles?.overlay_top ?? '0%', '0%'),
            left: adjustSize(styles?.overlay_left ?? '15%', '0%'),
            right: adjustSize(styles?.overlay_right ?? '15%', '0%'),
            bottom: adjustSize(styles?.overlay_bottom ?? '5%', '0%'),
            backgroundColor: styles?.overlay_bg_color ?? 'rgba(255, 255, 255, 0.75)',

        },
        content: {
            position: 'absolute',
            top: adjustSize(styles?.content_top ?? '0%', '0%'),
            left: adjustSize(styles?.content_left ?? '15%', '0%'),
            right: adjustSize(styles?.content_right ?? '15%', '0%'),
            bottom: adjustSize(styles?.content_bottom ?? '5%', '0%'),
            overflow: 'hidden',
            WebkitOverflowScrolling: 'touch',
            border: styles?.content_border ?? '',
            borderRadius: styles?.content_border_radius ?? '5%',
            outline: 'none',
            backgroundColor: styles?.content_bg_color ?? "",

        }
    };

    return (
        <Modal
            isOpen={isOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}
            appElement={document.getElementById('root') as HTMLElement}
            style={customStyles}
            contentLabel="Modal"
        >
            <div className="w-full flex justify-end">
                <IconContext.Provider value={{ size: '25' }}>
                    <AiOutlineCloseCircle onClick={closeModal} />
                </IconContext.Provider>
            </div>

            <div className="h-full w-full overflow-auto scroll-bar">
                {/* @ts-expect-error */}
                {React.isValidElement(child) ? React.cloneElement(child, { deps, isOpen }) : child}
            </div>

        </Modal>
    );
}








const useCheckInMobile = () => {
    const [width, setWidth] =
        React.useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            handleWindowSizeChange
        );
        return () => {
            window.removeEventListener(
                "resize",
                handleWindowSizeChange
            );
        };
    }, []);

    const isMobile = width <= 700;
    return { width, isMobile };
};

export default ReactModalWrapper;

