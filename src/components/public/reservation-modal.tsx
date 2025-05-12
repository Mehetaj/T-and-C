"use client"

import { useState, useRef, useEffect } from "react"
import { X, Loader2 } from 'lucide-react'
import { toast } from 'react-hot-toast'

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [isLoading, setIsLoading] = useState(false)
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const partySize = parseInt(formData.seats.split(" ")[0]) || 1

    const combinedDateTime = new Date(`${formData.date}T${formData.time}`)

    const payload = {
      customerName: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: combinedDateTime,
      time: formData.time,
      partySize,
      notes: formData.specialRequests,
    }

    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Failed to make reservation")
      }

      toast.success("Reservation submitted successfully!")
      onClose()
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        seats: "1 person",
        specialRequests: "",
      })
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to make reservation")
    } finally {
      setIsLoading(false)
    }
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
                  {Array.from({ length: 8 }, (_, i) => (
                    <option key={i + 1} value={`${i + 1} ${i + 1 === 1 ? "person" : "people"}`}>
                      {i + 1} {i + 1 === 1 ? "person" : "people"}
                    </option>
                  ))}
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
                disabled={isLoading}
                className="px-8 py-3 bg-[#d8b78e] text-white font-medium hover:bg-[#c3a57d] transition-colors rounded-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Book Now'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
