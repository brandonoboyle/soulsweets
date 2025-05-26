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
  
  let showConfirmationNotice = true;
  let showTimingNotice = true;

  function handleSubmit() {
    // Form will be handled by Netlify
    return true;
  }
</script>

<div class="container mx-auto px-4 py-8 max-w-2xl">
  <h1 class="text-3xl font-bold text-center mb-8">Place Your Order</h1>

  {#if showConfirmationNotice}
    <div class="bg-warning-50 border-l-4 border-warning-400 p-4 mb-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-warning-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3 flex-grow">
          <h3 class="text-sm font-medium text-warning-800">Please Note:</h3>
          <div class="mt-2 text-sm text-warning-700">
            <p>After submitting your order, you will receive a confirmation email within 24 to 48 hours. This email will include an order form and further details. Please be sure to fill out and submit the order form to finalize your order. Orders are not confirmed until the form is completed and returned.</p>
          </div>
        </div>
      </div>
      <div class="mt-4 text-right">
        <button
          on:click={() => showConfirmationNotice = false}
          class="text-sm text-warning-700 hover:text-warning-900 font-medium"
        >
          Got it
        </button>
      </div>
    </div>
  {/if}

  {#if showTimingNotice}
    <div class="bg-tertiary-50 border-l-4 border-tertiary-400 p-4 mb-8">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-tertiary-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3 flex-grow">
          <h3 class="text-sm font-medium text-tertiary-800">Order Timing Requirements:</h3>
          <div class="mt-2 text-sm text-tertiary-700">
            <ul class="list-disc pl-5 space-y-1">
              <li>Orders must be placed at least two weeks in advance.</li>
              <li>Large Orders/Events: Orders over $300 require a minimum of three weeks' notice</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4 text-right">
        <button
          on:click={() => showTimingNotice = false}
          class="text-sm text-tertiary-700 hover:text-tertiary-900 font-medium"
        >
          Got it
        </button>
      </div>
    </div>
  {/if}

  <form 
    name="order-form"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    on:submit|preventDefault={handleSubmit} 
    class="space-y-6"
  >
    <input type="hidden" name="form-name" value="order-form" />
    <input type="hidden" name="bot-field" />
    
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
