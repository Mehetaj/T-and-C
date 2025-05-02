'use client';

import { useState } from 'react';
import { Edit2, Trash2, Star } from 'lucide-react';

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  isFeatured: boolean;
  imageUrl?: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleAvailability: (id: string) => void;
  onToggleFeatured: (id: string) => void;
}

export default function MenuItem({
  id,
  name,
  description,
  price,
  isAvailable,
  isFeatured,
  imageUrl,
  onEdit,
  onDelete,
  onToggleAvailability,
  onToggleFeatured
}: MenuItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
          <p className="text-blue-600 font-medium">${price.toFixed(2)}</p>
        </div>
        {imageUrl && (
          <div className="w-24 h-24 rounded-lg overflow-hidden ml-4">
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2">
          <button
            onClick={() => onToggleAvailability(id)}
            className={`px-3 py-1 rounded-full text-sm ${isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
          >
            {isAvailable ? 'Available' : 'Out of Stock'}
          </button>
          <button
            onClick={() => onToggleFeatured(id)}
            className={`p-1 rounded-full ${isFeatured ? 'text-yellow-500' : 'text-gray-400'} hover:text-yellow-600 transition-colors`}
            title={isFeatured ? 'Remove from Featured' : 'Mark as Featured'}
          >
            <Star className="w-5 h-5 fill-current" />
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(id)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            title="Edit Item"
          >
            <Edit2 className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            title="Delete Item"
          >
            <Trash2 className="w-4 h-4 text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
}