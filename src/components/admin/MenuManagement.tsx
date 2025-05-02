'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Plus, Edit2, Trash2 } from 'lucide-react';
import MenuItem from './MenuItem';
import MenuItemForm from './MenuItemForm';

interface Category {
  id: string;
  name: string;
  isExpanded?: boolean;
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  isAvailable: boolean;
  isFeatured: boolean;
  imageUrl?: string;
}

export default function MenuManagement() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('/api/menu');
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Failed to fetch menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showItemForm, setShowItemForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const [categories, setCategories] = useState<Category[]>([
    { id: '1', name: 'Appetizers', isExpanded: false },
    { id: '2', name: 'Main Course', isExpanded: false },
    { id: '3', name: 'Desserts', isExpanded: false },
    { id: '4', name: 'Drinks', isExpanded: false },
  ]);

  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  const toggleCategory = (categoryId: string) => {
    setCategories(categories.map(category =>
      category.id === categoryId
        ? { ...category, isExpanded: !category.isExpanded }
        : category
    ));
  };

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      const newCategory: Category = {
        id: Date.now().toString(),
        name: newCategoryName.trim(),
        isExpanded: false
      };
      setCategories([...categories, newCategory]);
      setNewCategoryName('');
      setShowAddCategory(false);
    }
  };

  const handleDeleteCategory = (categoryId: string) => {
    setCategories(categories.filter(category => category.id !== categoryId));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Menu Management</h1>
        <button
          onClick={() => setShowAddCategory(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Category
        </button>
      </div>

      {/* Add Category Modal */}
      {showAddCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Add New Category</h2>
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Category Name"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowAddCategory(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCategory}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Categories List */}
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div
              className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer"
              onClick={() => toggleCategory(category.id)}
            >
              <h2 className="text-lg font-semibold">{category.name}</h2>
              <div className="flex items-center gap-4">
                <button
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    // TODO: Implement edit category
                  }}
                >
                  <Edit2 className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteCategory(category.id);
                  }}
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
                {category.isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </div>
            </div>
            {category.isExpanded && (
              <div className="p-4 bg-white">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Items in {category.name}</h3>
                  <button
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setSelectedItem(null);
                      setShowItemForm(true);
                    }}
                    className="bg-green-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    Add Item
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {menuItems.filter(item => item.categoryId === category.id).length > 0 ? (
                    menuItems
                      .filter(item => item.categoryId === category.id)
                      .map(item => (
                        <MenuItem
                          key={item.id}
                          {...item}
                          onEdit={(id) => {
                            const itemToEdit = menuItems.find(item => item.id === id);
                            if (itemToEdit) {
                              setSelectedItem(itemToEdit);
                              setSelectedCategory(category.id);
                              setShowItemForm(true);
                            }
                          }}
                          onDelete={(id) => {
                            setMenuItems(menuItems.filter(item => item.id !== id));
                          }}
                          onToggleAvailability={(id) => {
                            setMenuItems(menuItems.map(item =>
                              item.id === id
                                ? { ...item, isAvailable: !item.isAvailable }
                                : item
                            ));
                          }}
                          onToggleFeatured={(id) => {
                            setMenuItems(menuItems.map(item =>
                              item.id === id
                                ? { ...item, isFeatured: !item.isFeatured }
                                : item
                            ));
                          }}
                        />
                      ))
                  ) : (
                    <p className="text-gray-500 text-center py-4">No items in this category</p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Menu Item Form Modal */}
      {showItemForm && selectedCategory && (
        <MenuItemForm
          categoryId={selectedCategory}
          item={selectedItem || undefined}
          onClose={() => {
            setShowItemForm(false);
            setSelectedItem(null);
            setSelectedCategory(null);
          }}
          onSubmit={(itemData) => {
            if (selectedItem) {
              setMenuItems(menuItems.map(item =>
                item.id === selectedItem.id ? itemData : item
              ));
            } else {
              setMenuItems([...menuItems, itemData]);
            }
            setShowItemForm(false);
            setSelectedItem(null);
            setSelectedCategory(null);
          }}
        />
      )}
    </div>
  );
}