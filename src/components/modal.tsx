'use client'
import React from 'react'

interface ModalProps {
  isOpen: boolean
  title: string
  message: string
  onConfirm: () => void
  onCancel: () => void
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-sm rounded-lg bg-white p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{message}</p>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            className="rounded bg-gray-300 px-4 py-2 font-bold text-black hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600"
            onClick={onConfirm}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
