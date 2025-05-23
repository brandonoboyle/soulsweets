<script>
  let formData = {
    name: '',
    email: '',
    phone: '',
    productType: '',
    quantity: 1,
    date: '',
    message: ''
  };

  const productTypes = ['Cake', 'Brownies', 'Cupcakes'];

  function handleSubmit() {
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  }
</script>

<div class="container mx-auto px-4 py-8 max-w-2xl">
  <h1 class="text-3xl font-bold text-center mb-8">Place Your Order</h1>
  
  <form on:submit|preventDefault={handleSubmit} class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Contact Information -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">Contact Information</h2>
        
        <div>
          <label for="name" class="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            id="name"
            bind:value={formData.name}
            required
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            required
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label for="phone" class="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            id="phone"
            bind:value={formData.phone}
            required
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <!-- Order Details -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">Order Details</h2>
        
        <div>
          <label for="productType" class="block text-sm font-medium mb-1">Product Type</label>
          <select
            id="productType"
            bind:value={formData.productType}
            required
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select a product</option>
            {#each productTypes as type}
              <option value={type}>{type}</option>
            {/each}
          </select>
        </div>

        <div>
          <label for="quantity" class="block text-sm font-medium mb-1">Quantity</label>
          <input
            type="number"
            id="quantity"
            bind:value={formData.quantity}
            min="1"
            required
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label for="date" class="block text-sm font-medium mb-1">Desired Pickup/Delivery Date</label>
          <input
            type="date"
            id="date"
            bind:value={formData.date}
            required
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
    </div>

    <!-- Special Requirements -->
    <div>
      <label for="message" class="block text-sm font-medium mb-1">Special Requirements or Notes</label>
      <textarea
        id="message"
        bind:value={formData.message}
        rows="4"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        placeholder="Please include any dietary restrictions, allergies, or special requests..."
      ></textarea>
    </div>

    <div class="text-center">
      <button
        type="submit"
        class="bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
      >
        Submit Order
      </button>
    </div>
  </form>
</div>

<style>
  /* Add any custom styles here */
</style>
