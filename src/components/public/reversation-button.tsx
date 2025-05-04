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
        className="btn-secondary"
      >
        Reservation
      </button>
      <ReservationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
