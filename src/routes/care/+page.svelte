<script>
	import {
		Truck,
		Refrigerator,
		Clock,
		Scissors,
		Package,
		MessageSquare,
		CheckCircle2,
		AlertCircle
	} from 'lucide-svelte';
</script>

<div class="mx-auto max-w-4xl px-4 py-12">
	<h1 class="text-primary-500 mb-8 text-center text-4xl font-bold">
		Cake & Dessert Care & Storage Guide
	</h1>

	<p class="text-primary-900 mb-12 text-center text-lg">
		To keep your treats fresh and safe from damage please follow these guidelines for transporting,
		storing, and serving your desserts.
	</p>

	<div class="space-y-12">
		<!-- Transporting Section -->
		<section class="bg-primary-50 rounded-lg p-8 shadow-lg">
			<h2 class="text-primary-500 mb-6 flex items-center gap-2 text-2xl font-semibold">
				<Truck class="h-8 w-8 text-primary-800" />
				Transporting Your Cake/Desserts
			</h2>
			<ul class="text-primary-900 space-y-4">
				<li class="flex items-start gap-2">
					<div class="w-6 flex-shrink-0">
						<CheckCircle2 class="mt-1 h-6 w-6 text-green-500" />
					</div>
					<span>Always carry your box from the bottom to prevent damage.</span>
				</li>
				<li class="flex items-start gap-2">
					<div class="w-6 flex-shrink-0">
						<CheckCircle2 class="mt-1 h-6 w-6 text-green-500" />
					</div>
					<span
						>Place your cake on a flat surface in your vehicle (such as the trunk or floor). Avoid
						placing it on a seat, as it is not level.</span
					>
				</li>
				<li class="flex items-start gap-2">
					<div class="w-6 flex-shrink-0">
						<CheckCircle2 class="mt-1 h-6 w-6 text-green-500" />
					</div>
					<span
						>Keep the dessert box closed during transport to protect it from dust and debris.</span
					>
				</li>
				<li class="flex items-start gap-2">
					<div class="w-6 flex-shrink-0">
						<CheckCircle2 class="mt-1 h-6 w-6 text-green-500" />
					</div>
					<span>Drive carefully! Avoid sudden stops or sharp turns, as cakes are fragile.</span>
				</li>
				<li class="flex items-start gap-2">
					<div class="w-6 flex-shrink-0">
						<CheckCircle2 class="mt-1 h-6 w-6 text-green-500" />
					</div>
					<span>Always transport cakes and desserts in a cool, air-conditioned vehicle.</span>
				</li>
			</ul>
		</section>

		<!-- Storing Section -->
		<section class="bg-primary-50 rounded-lg p-8 shadow-lg">
			<h2 class="text-primary-500 mb-6 flex items-center gap-2 text-2xl font-semibold">
				<Refrigerator class="h-8 w-8 text-primary-800" />
				Storing Your Cake/Desserts
			</h2>
			<ul class="text-surface-700 space-y-4">
				<li class="flex items-start gap-2">
					<div class="w-6 flex-shrink-0">
						<CheckCircle2 class="mt-1 h-6 w-6 text-green-500" />
					</div>
					<span>Refrigerate your cake/desserts until about 1 hour before serving.</span>
				</li>
				<li class="flex items-start gap-2">
					<div class="w-6 flex-shrink-0">
						<CheckCircle2 class="mt-1 h-6 w-6 text-green-500" />
					</div>
					<span
						>Items with perishable fillings (e.g. fresh fruit, or dairy) must stay refrigerated
						until 1–2 hours before serving.</span
					>
				</li>
			</ul>
		</section>

		<!-- Before Serving Section -->
		<section class="bg-primary-50 rounded-lg p-8 shadow-lg">
			<h2 class="text-primary-500 mb-6 flex items-center gap-2 text-2xl font-semibold">
				<Clock class="h-8 w-8 text-primary-800" />
				Before Serving
			</h2>
			<ul class="text-surface-700 space-y-4">
				<li class="flex items-start gap-2">
					<div class="w-6 flex-shrink-0">
						<CheckCircle2 class="mt-1 h-6 w-6 text-green-500" />
					</div>
					<span
						>Allow your cake/desserts to come to room temperature for 1–2 hours after removing them
						from the fridge.</span
					>
				</li>
				<li class="flex items-start gap-2">
					<div class="w-6 flex-shrink-0">
						<CheckCircle2 class="mt-1 h-6 w-6 text-green-500" />
					</div>
					<span
						>Remove any inedible decorations, such as toppers or internal support dowels, before
						cutting.</span
					>
				</li>
			</ul>
		</section>

		<!-- Cutting Section -->
		<section class="bg-primary-50 rounded-lg p-8 shadow-lg">
			<h2 class="text-primary-500 mb-6 flex items-center gap-2 text-2xl font-semibold">
				<Scissors class="h-8 w-8 text-primary-800" />
				Cutting Your Cake
			</h2>
			<ul class="text-surface-700 space-y-4">
				<li class="flex items-start gap-2">
					<div class="w-6 flex-shrink-0">
						<CheckCircle2 class="mt-1 h-6 w-6 text-green-500" />
					</div>
					<span>Use a sharp, clean knife to slice your cake.</span>
				</li>
				<li class="flex items-start gap-2">
					<div class="w-6 flex-shrink-0">
						<CheckCircle2 class="mt-1 h-6 w-6 text-green-500" />
					</div>
					<span>Wipe the knife between cuts for neat slices.</span>
				</li>
				<li class="flex items-start gap-2">
					<div class="w-6 flex-shrink-0">
						<AlertCircle class="text-error-500 mt-1 h-6 w-6" />
					</div>
					<span
						>DO NOT smash any part of the body into the cake internal dowels may be present to
						support the structure.</span
					>
				</li>
			</ul>
		</section>

		<!-- Storing Leftovers Section -->
		<section class="bg-primary-50 rounded-lg p-8 shadow-lg">
			<h2 class="text-primary-500 mb-6 flex items-center gap-2 text-2xl font-semibold">
				<Package class="h-8 w-8 text-primary-800" />
				Storing Leftovers
			</h2>
			<ul class="text-surface-700 space-y-4">
				<li class="flex items-start gap-2">
					<div class="w-6 flex-shrink-0">
						<CheckCircle2 class="mt-1 h-6 w-6 text-green-500" />
					</div>
					<span
						>Wrap leftover cake/desserts in plastic wrap or place them in an airtight container.</span
					>
				</li>
				<li class="flex items-start gap-2">
					<div class="w-6 flex-shrink-0">
						<CheckCircle2 class="mt-1 h-6 w-6 text-green-500" />
					</div>
					<span>Refrigerate leftovers for up to 3–5 days, or freeze them for up to 3 months.</span>
				</li>
				<li class="flex items-start gap-2">
					<div class="w-6 flex-shrink-0">
						<CheckCircle2 class="mt-1 h-6 w-6 text-green-500" />
					</div>
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
