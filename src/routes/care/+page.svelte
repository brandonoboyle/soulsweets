<script>
  import { Truck, Refrigerator, Clock, Scissors, Package, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-svelte';
</script>

<div class="max-w-4xl mx-auto px-4 py-12">
  <h1 class="text-4xl font-bold text-center mb-8 text-primary-500">
    Cake & Dessert Care & Storage Guide
  </h1>

  <p class="text-lg text-gray-700 mb-12 text-center">
    To keep your treats fresh and safe from damage please follow these guidelines for transporting, storing, and serving your desserts.
  </p>

  <div class="space-y-12">
    <!-- Transporting Section -->
    <section class="bg-primary-50 rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-semibold mb-6 text-primary-500 flex items-center gap-2">
        <Truck class="w-8 h-8" />
        Transporting Your Cake/Desserts
      </h2>
      <ul class="space-y-4 text-surface-700">
        <li class="flex items-start gap-2">
          <CheckCircle2 class="w-6 h-6 text-green-500 mt-1" />
          <span>Always carry your box from the bottom to prevent damage.</span>
        </li>
        <li class="flex items-start gap-2">
          <CheckCircle2 class="w-6 h-6 text-green-500 mt-1" />
          <span>Place your cake on a flat surface in your vehicle (such as the trunk or floor). Avoid placing it on a seat, as it is not level.</span>
        </li>
        <li class="flex items-start gap-2">
          <CheckCircle2 class="w-6 h-6 text-green-500 mt-1" />
          <span>Keep the dessert box closed during transport to protect it from dust and debris.</span>
        </li>
        <li class="flex items-start gap-2">
          <CheckCircle2 class="w-6 h-6 text-green-500 mt-1" />
          <span>Drive carefully! Avoid sudden stops or sharp turns, as cakes are fragile.</span>
        </li>
        <li class="flex items-start gap-2">
          <CheckCircle2 class="w-6 h-6 text-green-500 mt-1" />
          <span>Always transport cakes and desserts in a cool, air-conditioned vehicle.</span>
        </li>
      </ul>
    </section>

    <!-- Storing Section -->
    <section class="bg-primary-50 rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-semibold mb-6 text-primary-500 flex items-center gap-2">
        <Refrigerator class="w-8 h-8" />
        Storing Your Cake/Desserts
      </h2>
      <ul class="space-y-4 text-surface-700">
        <li class="flex items-start gap-2">
          <CheckCircle2 class="w-6 h-6 text-green-500 mt-1" />
          <span>Refrigerate your cake/desserts until about 1 hour before serving.</span>
        </li>
        <li class="flex items-start gap-2">
          <CheckCircle2 class="w-6 h-6 text-green-500 mt-1" />
          <span>Items with perishable fillings (e.g. fresh fruit, or dairy) must stay refrigerated until 1–2 hours before serving.</span>
        </li>
      </ul>
    </section>

    <!-- Before Serving Section --> 
    <section class="bg-primary-50 rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-semibold mb-6 text-primary-500 flex items-center gap-2">
        <Clock class="w-8 h-8" />
        Before Serving
      </h2>
      <ul class="space-y-4 text-surface-700">
        <li class="flex items-start gap-2">
          <CheckCircle2 class="w-6 h-6 text-green-500 mt-1" />
          <span>Allow your cake/desserts to come to room temperature for 1–2 hours after removing them from the fridge.</span>
        </li>
        <li class="flex items-start gap-2">
          <CheckCircle2 class="w-6 h-6 text-green-500 mt-1" />
          <span>Remove any inedible decorations, such as toppers or internal support dowels, before cutting.</span>
        </li>
      </ul>
    </section>

    <!-- Cutting Section -->
    <section class="bg-primary-50 rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-semibold mb-6 text-primary-500 flex items-center gap-2">
        <Scissors class="w-8 h-8" />
        Cutting Your Cake
      </h2>
      <ul class="space-y-4 text-surface-700">
        <li class="flex items-start gap-2">
          <CheckCircle2 class="w-6 h-6 text-green-500 mt-1" />
          <span>Use a sharp, clean knife to slice your cake.</span>
        </li>
        <li class="flex items-start gap-2">
          <CheckCircle2 class="w-6 h-6 text-green-500 mt-1" />
          <span>Wipe the knife between cuts for neat slices.</span>
        </li>
        <li class="flex items-start gap-2">
          <AlertCircle class="w-6 h-6 text-error-500 mt-1" />
          <span>DO NOT smash any part of the body into the cake internal dowels may be present to support the structure.</span>
        </li>
      </ul>
    </section>

    <!-- Storing Leftovers Section -->
    <section class="bg-primary-50 rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-semibold mb-6 text-primary-500 flex items-center gap-2">
        <Package class="w-8 h-8" />
        Storing Leftovers
      </h2>
      <ul class="space-y-4 text-surface-700">
        <li class="flex items-start gap-2">
          <CheckCircle2 class="w-6 h-6 text-green-500 mt-1" />
          <span>Wrap leftover cake/desserts in plastic wrap or place them in an airtight container.</span>
        </li>
        <li class="flex items-start gap-2">
          <CheckCircle2 class="w-6 h-6 text-green-500 mt-1" />
          <span>Refrigerate leftovers for up to 3–5 days, or freeze them for up to 3 months.</span>
        </li>
        <li class="flex items-start gap-2">
          <CheckCircle2 class="w-6 h-6 text-green-500 mt-1" />
          <span>To enjoy frozen cake, thaw it in the refrigerator overnight before serving.</span>
        </li>
      </ul>
    </section>

    <!-- Feedback Section -->
    <!-- <section class="bg-white rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-semibold mb-6 text-pink-500 flex items-center gap-2">
        <MessageSquare class="w-8 h-8" />
        Feedback
      </h2>
      <p class="text-gray-700">
        Your feedback is important to Soul Sweets. If you have suggestions or comments about our sweets or services, I encourage you to share them with me. Your input helps Soul Sweets improve and better serve you in the future.
      </p>
    </section> -->
  </div>
</div>

<style>
  :global(body) {
    background-color: #fdf2f8;
  }
</style>
