"use client"

import { useState } from "react"
import ReservationModal from "./reservation-modal"

export default function ReservationButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <button
        onClick={openModal}
        className="border border-white px-6 py-2 rounded-sm hover:bg-black text-yellow-600 transition-colors cursor-pointer"
      >
        Reservation
      </button>
      <ReservationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
