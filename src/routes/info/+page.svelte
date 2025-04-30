<script lang="ts">
  import { ChevronDown } from 'lucide-svelte';
  
  interface Section {
    title: string;
    content: string[];
  }
  
  let activeSection: Section | null = null;
  
  const sections: Section[] = [
    {
      title: 'Ordering',
      content: [
        'General Orders: Orders must be placed at least two weeks in advance. Rush fees may apply for shorter notice.',
        'Large Orders/Events: Orders over $300 require a minimum of three weeks\' notice.',
        'Order Confirmation: Orders are processed on a first-come, first-served basis. Availability is confirmed once the deposit is paid.'
      ]
    },
    {
      title: 'Payment',
      content: [
        'Deposits: A non refundable deposit is required to confirm your order. For orders under $200, a 30% deposit is required. For orders over $200, a 50% deposit will be required. The order will not be started until the deposit is received.',
        'Balance Payment: Full payment is due 12 hours before pickup/delivery.',
        'Rush Orders: Orders placed with less than two weeks\' notice require full upfront, non-refundable payment.',
        'Payment Methods: Cash, e-transfer, credit card, and debit are accepted.'
      ]
    },
    {
      title: 'Pickup & Delivery',
      content: [
        'Timeliness: Orders must be picked up at the agreed time. A $10 late fee applies after 30 minutes. Notify us 12 hours in advance if you need to reschedule.',
        'Unclaimed Orders: If not picked up, we will try to reschedule within 24 hours. After that, the order will be donated and no refund will be issued.',
        'Delivery: Upon request delivery is available and will incur an extra fee based on location. Delivery must be organized at the time of booking.',
        'Fragility: Customers are responsible for handling and storing products properly after pickup or delivery. Soul Sweets is not responsible for any damages after the product leaves our care.',
        'Inspection: Inspect your order upon delivery to confirm accuracy.'
      ]
    },
    {
      title: 'Refunds & Cancellations',
      content: [
        'Refunds are given only if the error is from Soul Sweets (wrong flavor/design). Requests must be submitted within 24 hours with a photo and description of the issue.',
        '7+ Days Notice: Full refund minus the deposit.',
        '5-6 Days Notice: 50% refund, as preparation has started.'
      ]
    },
    {
      title: 'Design & Customization',
      content: [
        'Finalize design details (colors, themes, decorations) at least five days before the pickup/delivery date. Changes after that may incur additional charges.',
        'Character Design: Hand-drawn character designs in buttercream require additional time and skill. For this reason, a buttercream character design fee will be added to your order total, starting at $30 and increasing based on the complexity and number of characters.',
        'Final pricing will be confirmed after design approval.'
      ]
    },
    {
      title: 'Allergen & Dietary Disclaimer',
      content: [
        'Soul Sweets strives to accommodate dietary preferences but operates in a kitchen that handles common allergens, including nuts, gluten, dairy, eggs, and soy.',
        'Products are not guaranteed to be allergen-free due to the risk of cross-contamination.',
        'Customers must inform us of any allergies or dietary restrictions at the time of ordering. By purchasing our products, customers acknowledge and accept these risks.',
        'Soul Sweets is not liable for allergic reactions or health issues resulting from consuming our products.'
      ]
    }
  ];

  const toggleSection = (section: Section) => {
    activeSection = activeSection === section ? null : section;
  };
</script>

<div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-primary-800 mb-4">Soul Sweets Policy</h1>
      <p class="text-lg text-primary-600">~ with kindness and gratitude!</p>
    </div>

    <div class="space-y-4">
      {#each sections as section}
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <button
            class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-pink-50 transition-colors"
            on:click={() => toggleSection(section)}
          >
            <h2 class="text-xl font-semibold text-primary-700">{section.title}</h2>
            <ChevronDown
              class="w-6 h-6 text-primary-600 transform transition-transform {activeSection === section ? 'rotate-180' : ''}"
            />
          </button>
          
          {#if activeSection === section}
            <div class="px-6 pb-4">
              <ul class="space-y-3">
                {#each section.content as item}
                  <li class="text-gray-700">{item}</li>
                {/each}
              </ul>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <div class="mt-12 rounded-lg shadow-md bg-primary-50 p-6">
      <h2 class="text-2xl font-semibold text-primary-700 mb-4">Contact Us</h2>
      <div class="space-y-2 text-surface-700">
        <p>Email: Bakery.SoulSweets@gmail.com</p>
        <p>Instagram: @SoulSweetsBakery</p>
        <p>Facebook: Soul Sweets</p>
      </div>
      <p class="mt-4 text-surface-600">
        Your feedback is important to Soul Sweets. If you have suggestions or comments about our sweets or services, we encourage you to share them with us. Your input helps Soul Sweets improve and better serve you in the future.
      </p>
      <p class="mt-2 text-surface-600">
        If you share photos of our creations on social media, Soul Sweets would love to see them! Feel free to tag us!
      </p>
    </div>
  </div>
</div>

<style>
  .rotate-180 {
    transform: rotate(180deg);
  }
</style>
