"use client";
import React, { useEffect, useState } from "react";
import ReservationModal from "@/components/public/reservation-modal";

interface Reservation {
    id: string;
    customerName: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    partySize: number;
    status: string;
    notes?: string;
    createdAt: string;
}

export default function ReservationsPage() {
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch("/api/reservation")
            .then((res) => res.json())
            .then((data) => {
                setReservations(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const filteredReservations = reservations.filter((reservation) => {
        const searchLower = searchTerm.toLowerCase();
        return (
            reservation.customerName.toLowerCase().includes(searchLower) ||
            reservation.email.toLowerCase().includes(searchLower) ||
            new Date(reservation.date).toLocaleDateString().includes(searchTerm)
        );
    });

    return (
        <div className="p-6">
            <ReservationModal isOpen={showModal} onClose={() => setShowModal(false)} />
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Reservations</h1>
                <div className="flex space-x-4">
                    <input
                        type="text"
                        placeholder="Search by name, email or date..."
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        onClick={() => setShowModal(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Add Reservation
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-10 text-gray-600">Loading...</div>
            ) : (
                <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                    <table className="min-w-full text-sm text-left text-gray-700">
                        <thead className="bg-blue-600 text-white sticky top-0 z-10">
                            <tr>
                                <th className="px-4 py-3">Customer</th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Phone</th>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Time</th>
                                <th className="px-4 py-3">Party Size</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Notes</th>
                                <th className="px-4 py-3">Created At</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReservations.map((r) => (
                                <tr key={r.id} className="even:bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <td className="px-4 py-3">{r.customerName}</td>
                                    <td className="px-4 py-3">{r.email}</td>
                                    <td className="px-4 py-3">{r.phone}</td>
                                    <td className="px-4 py-3">{new Date(r.date).toLocaleDateString()}</td>
                                    <td className="px-4 py-3">{r.time}</td>
                                    <td className="px-4 py-3">{r.partySize}</td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${r.status === "confirmed"
                                                    ? "bg-green-100 text-green-700"
                                                    : r.status === "pending"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {r.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">{r.notes || "-"}</td>
                                    <td className="px-4 py-3">{new Date(r.createdAt).toLocaleString()}</td>
                                    <td className="px-4 py-3 flex gap-2 justify-end">
                                        <select
                                            value={r.status}
                                            onChange={async (e) => {
                                                const response = await fetch(`/api/reservation/${r.id}`, {
                                                    method: 'PATCH',
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify({ status: e.target.value })
                                                });
                                                if (response.ok) {
                                                    setReservations(reservations.map(res =>
                                                        res.id === r.id ? { ...res, status: e.target.value } : res
                                                    ));
                                                }
                                            }}
                                            className="px-2 py-1 rounded border border-gray-300 bg-white text-sm"
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="confirmed">Confirmed</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>
                                        <button
                                            onClick={async () => {
                                                if (window.confirm('Are you sure you want to delete this reservation?')) {
                                                    const response = await fetch(`/api/reservation/${r.id}`, {
                                                        method: 'DELETE'
                                                    });
                                                    if (response.ok) {
                                                        setReservations(reservations.filter(res => res.id !== r.id));
                                                    }
                                                }
                                            }}
                                            className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );
}