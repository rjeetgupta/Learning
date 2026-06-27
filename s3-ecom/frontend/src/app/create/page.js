export default function CreateProductPage() {
    return (
      <div className="max-w-lg mx-auto mt-10 shadow-md rounded-xl p-6 border-2 border-neutral-600">
        <h2 className="text-2xl font-semibold mb-6">Create Product</h2>
  
        <form className="space-y-5">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              placeholder="Enter product name"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Enter product description"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full border rounded-lg px-3 py-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-gray-100 file:rounded-md"
            />
          </div>
  
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create Product
          </button>
        </form>
      </div>
    );
  }