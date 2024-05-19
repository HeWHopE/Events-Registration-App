import { useEffect } from 'react';
import Popup from 'reactjs-popup';
import { AiOutlineClose } from 'react-icons/ai';

export type PopupDoctooProps = {
  popupIsOpen: boolean;
  closePopup: () => void;
  backdropClassName?: string;
  modalFullClassName?: string;
  modalBodyClassName?: string;
  modalCloseClassName?: string;
  children: React.ReactNode;
};

export default function PopupDoctoo({
  popupIsOpen,
  closePopup,
  modalBodyClassName,
  children,
  backdropClassName,
  modalFullClassName,
  modalCloseClassName,
}: PopupDoctooProps) {
  useEffect(() => {
    if (popupIsOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [popupIsOpen]);

  return (
    <Popup open={popupIsOpen} onClose={closePopup} closeOnDocumentClick={false}>
      <div className={`flex h-screen w-screen bg-black opacity-20 ${backdropClassName}`} onClick={closePopup}></div>

      <article
        className={`no-scrollbar absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col overflow-y-auto overflow-x-hidden rounded-xl bg-white p-10 ${modalFullClassName}`}
      >
        <div className={`-m-8 mb-2 self-end ${modalCloseClassName}`}>
          <AiOutlineClose className='text-2xl cursor-pointer' onClick={closePopup} />
        </div>

        {/* Body */}
        <div className={modalBodyClassName}>{children}</div>
      </article>
    </Popup>
  );
}
