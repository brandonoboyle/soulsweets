<script>
  let formData = {
    name: '',
    email: '',
    phone: '',
    productType: '',
    message: ''
  };

  const productTypes = ['Cake', 'Brownies', 'Cupcakes'];
  
  let showConfirmationNotice = true;
  let showTimingNotice = true;
  let submitted = false;

  function handleSubmit() {
    // Form will be handled by Netlify
    submitted = true;
    // Reset form after 5 seconds
    setTimeout(() => {
      formData = {
        name: '',
        email: '',
        phone: '',
        productType: '',
        message: ''
      };
      submitted = false;
    }, 5000);
  }
</script>

<div class="container mx-auto px-4 py-8 max-w-2xl">
  <h1 class="text-3xl font-bold text-center mb-8">Place Your Order</h1>

  {#if submitted}
    <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-green-800">Order Submitted Successfully!</h3>
          <div class="mt-2 text-sm text-green-700">
            <p>Thank you for your order! You will receive a confirmation email within 24 to 48 hours with further details and an order form to complete your purchase.</p>
          </div>
        </div>
      </div>
    </div>
  {/if}

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
    action="/"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    on:submit={handleSubmit} 
    class="space-y-6"
  >
    <!-- Hidden input for Netlify -->
    <input type="hidden" name="form-name" value="order-form" />
    
    <!-- Honeypot field to prevent spam -->
    <div class="hidden">
      <label>
        Don't fill this out if you're human: <input name="bot-field" />
      </label>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Contact Information -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">Contact Information</h2>
        
        <div>
          <label for="name" class="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
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
            name="email"
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
            name="phone"
            bind:value={formData.phone}
            required
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label for="productType" class="block text-sm font-medium mb-1">Product Type</label>
          <select
            id="productType"
            name="productType"
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
      </div>

      <!-- Special Requirements -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">Special Requirements</h2>
        <div>
          <label for="message" class="block text-sm font-medium mb-1">Special Requirements or Notes</label>
          <textarea
            id="message"
            name="message"
            bind:value={formData.message}
            rows="11"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Please include any dietary restrictions, allergies, or special requests..."
          ></textarea>
        </div>
      </div>
    </div>

    <div class="text-center">
      <button
        type="submit"
        class="bg-primary-500 text-surface-50 px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
      >
        Submit Order
      </button>
    </div>
  </form>
</div>

<style>
  /* Add any custom styles here */
</style>
