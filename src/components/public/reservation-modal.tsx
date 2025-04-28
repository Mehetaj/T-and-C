"use client"

import { useState, useRef, useEffect } from "react"
import { X } from 'lucide-react'

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    seats: "1 person",
    specialRequests: "",
  })

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Reservation Form Data:", formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div
        ref={modalRef}
        className="relative w-[90%] max-w-2xl bg-[#222222] text-white shadow-xl rounded-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="w-full p-8">
          <div className="text-center mb-8">
            <h3 className="text-[#d8b78e] text-4xl font-script mb-1">Table</h3>
            <h2 className="text-white text-5xl font-bold">BOOKING</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-600 focus:border-[#d8b78e] py-2 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-600 focus:border-[#d8b78e] py-2 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-600 focus:border-[#d8b78e] py-2 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-1">Date*</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-600 focus:border-[#d8b78e] py-2 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-1">Time*</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-600 focus:border-[#d8b78e] py-2 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="seats" className="block text-sm font-medium mb-1">Seats*</label>
                <select
                  id="seats"
                  name="seats"
                  value={formData.seats}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-600 focus:border-[#d8b78e] py-2 outline-none transition-colors"
                >
                  <option value="1 person">1 person</option>
                  <option value="2 people">2 people</option>
                  <option value="3 people">3 people</option>
                  <option value="4 people">4 people</option>
                  <option value="5 people">5 people</option>
                  <option value="6 people">6 people</option>
                  <option value="7 people">7 people</option>
                  <option value="8 people">8 people</option>
                  <option value="9+ people">9+ people</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="specialRequests" className="block text-sm font-medium mb-1">
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border border-gray-600 focus:border-[#d8b78e] p-2 outline-none transition-colors rounded-sm"
              />
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="px-8 py-3 bg-[#d8b78e] text-white font-medium hover:bg-[#c3a57d] transition-colors rounded-sm"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}