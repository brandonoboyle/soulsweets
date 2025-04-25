<script lang="ts">
	// Define menu categories and items
	const menuCategories = [
		{
			name: 'Cupcakes',
			items: [
				{
					name: 'Vanilla Bean',
					price: '$3.50',
					description: 'Classic vanilla cupcake with vanilla buttercream.'
				},
				{
					name: 'Chocolate Delight',
					price: '$3.75',
					description: 'Rich chocolate cupcake with chocolate ganache.'
				},
				{
					name: 'Strawberry Dream',
					price: '$3.95',
					description: 'Strawberry cupcake topped with strawberry frosting and fresh berries.'
				},
				{
					name: 'Red Velvet',
					price: '$3.95',
					description: 'Traditional red velvet with cream cheese frosting.'
				}
			]
		},
		{
			name: 'Cakes',
			items: [
				{
					name: 'Carrot Cake',
					price: '$35',
					description: 'Moist carrot cake with walnuts and cream cheese frosting.'
				},
				{
					name: 'Chocolate Truffle',
					price: '$35',
					description: 'Decadent chocolate cake with ganache and chocolate shavings.'
				},
				{
					name: 'Lemon Blueberry',
					price: '$35',
					description: 'Lemon cake with blueberry compote and lemon frosting.'
				},
				{
					name: 'Custom Celebration Cake',
					price: 'From $35',
					description: 'Custom cakes for special occasions. Please order 48 hours in advance.'
				}
			]
		},
		{
			name: 'Brownie',
			items: [
				{ name: 'Brownie', price: '$3.50', description: 'Fudgy chocolate brownie with walnuts.' }
			]
		}
	];
</script>

<div class="py-8">
	<div class="mb-12 text-center">
		<h1 class="text-primary-800 mb-4 text-4xl font-bold">Our Menu</h1>
		<p class="text-primary-700 mx-auto max-w-2xl text-xl">Everything made to order</p>
	</div>

	<div class="space-y-16">
		{#each menuCategories as category}
			<section>
				<div class="container mx-auto px-4">
					<h2 class="text-primary-800 border-primary-200 mb-6 border-b-2 pb-2 text-2xl font-bold">
						{category.name}
					</h2>
					<div class="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
						{#each category.items as item}
							<div
								class="bg-tertiary-50 rounded-lg p-5 shadow-sm transition duration-300 hover:shadow-md"
							>
								<div class="flex items-start justify-between">
									<h3 class="text-primary-700 text-lg font-bold">{item.name}</h3>
									<span class="text-primary-800 font-medium">{item.price}</span>
								</div>
								<p class="text-primary-600 mt-1">{item.description}</p>
							</div>
						{/each}
					</div>
				</div>
			</section>
		{/each}
	</div>

	<div class="container mx-auto mt-16 px-4">
		<div class="bg-primary-50 rounded-lg p-6">
			<h2 class="text-primary-800 mb-4 text-2xl font-bold">Special Orders</h2>
			<p class="text-primary-700 mb-4">
				We offer custom cakes, catering, and special orders for events of all sizes. Please contact
				us at least 3 weeks in advance for orders over $300.
			</p>
			<a
				href="/contact"
				class="bg-primary-600 text-primary-50 hover:bg-primary-700 inline-block rounded-full px-6 py-2 transition duration-300"
			>
				Contact Us for Special Orders
			</a>
		</div>
	</div>

	<div class="container mx-auto mt-16 px-4 text-center">
		<p class="text-primary-700 italic">
			* Prices and availability subject to change. Please note that our items may contain or come
			into contact with common allergens such as nuts, dairy, and wheat.
		</p>
	</div>
</div>
