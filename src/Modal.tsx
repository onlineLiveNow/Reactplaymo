import { useEffect, useRef } from 'react';

interface ModalProps {
  onContinue: () => void;
  onClose?: () => void;
}

function Modal({ onContinue, onClose }: ModalProps) {
  const continueRef = useRef<HTMLButtonElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    continueRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose?.();
      }

      if (e.key === 'Tab') {
        const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      prev?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" ref={overlayRef} role="presentation">
      <div className="modal-container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-content">
          <button className="modal-close" onClick={() => onClose?.()} aria-label="Close dialog">×</button>
          <h2 id="modal-title" className="modal-title">Welcome to PlayM00 Gaming</h2>
          <p className="modal-description">Click continue to start your gaming experience</p>
          <button ref={continueRef} className="modal-button" onClick={onContinue}>
            Continue
          </button>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.12);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .modal-container {
          background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
          border-radius: 24px;
          max-width: 520px;
          width: 100%;
          border: 1px solid rgba(59, 130, 246, 0.12);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          animation: modalSlideIn 0.4s ease-out;
        }

        @keyframes modalSlideIn {
          from { opacity: 0; transform: translateY(-20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .modal-content {
          padding: 44px 36px;
          text-align: center;
          position: relative;
        }

        .modal-close {
          position: absolute;
          right: 16px;
          top: 12px;
          background: transparent;
          border: none;
          color: #94A3B8;
          font-size: 24px;
          cursor: pointer;
        }

        .modal-close:focus {
          outline: 2px solid rgba(59, 130, 246, 0.6);
          border-radius: 6px;
        }

        .modal-title {
          font-family: 'Poppins', 'Inter', sans-serif;
          font-size: 30px;
          font-weight: 800;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #FFFFFF 0%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .modal-description {
          color: #CBD5E1;
          font-size: 15px;
          margin-bottom: 28px;
          line-height: 1.6;
        }

        .modal-button {
          display: inline-block;
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          padding: 14px 44px;
          border-radius: 50px;
          font-size: 17px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 40px rgba(16, 185, 129, 0.4);
          position: relative;
          overflow: hidden;
        }

        .modal-button:hover { transform: translateY(-3px); box-shadow: 0 15px 50px rgba(16, 185, 129, 0.6); }

        .modal-button::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .modal-button:hover::after { left: 100%; }

        @media (max-width: 768px) {
          .modal-content { padding: 30px 20px; }
          .modal-title { font-size: 24px; }
          .modal-description { font-size: 14px; }
          .modal-button { padding: 12px 36px; font-size: 15px; }
        }
      `}</style>
    </div>
  );
}

export default Modal;