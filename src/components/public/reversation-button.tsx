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
        className="border border-black px-6 py-2 rounded-sm hover:bg-black hover:text-white transition-colors"
      >
        Reservation
      </button>
      <ReservationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
