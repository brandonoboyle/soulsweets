<script lang="ts">
	// Define menu categories and items
	const menuCategories = [
		{
			name: 'Cupcakes',
			items: [
				{ name: 'Vanilla Bean', price: '$3.50', description: 'Classic vanilla cupcake with vanilla buttercream.' },
				{ name: 'Chocolate Delight', price: '$3.75', description: 'Rich chocolate cupcake with chocolate ganache.' },
				{ name: 'Strawberry Dream', price: '$3.95', description: 'Strawberry cupcake topped with strawberry frosting and fresh berries.' },
				{ name: 'Red Velvet', price: '$3.95', description: 'Traditional red velvet with cream cheese frosting.' }
			]
		},
		{
			name: 'Pastries',
			items: [
				{ name: 'Buttery Croissant', price: '$3.25', description: 'Flaky, buttery croissant baked to golden perfection.' },
				{ name: 'Chocolate Croissant', price: '$3.75', description: 'Buttery croissant filled with rich chocolate.' },
				{ name: 'Cinnamon Roll', price: '$4.25', description: 'Soft cinnamon roll with cream cheese frosting.' },
				{ name: 'Fruit Danish', price: '$3.95', description: 'Light pastry filled with seasonal fruits.' }
			]
		},
		{
			name: 'Cakes',
			items: [
				{ name: 'Carrot Cake', price: '$5.95/slice', description: 'Moist carrot cake with walnuts and cream cheese frosting.' },
				{ name: 'Chocolate Truffle', price: '$6.25/slice', description: 'Decadent chocolate cake with ganache and chocolate shavings.' },
				{ name: 'Lemon Blueberry', price: '$5.95/slice', description: 'Lemon cake with blueberry compote and lemon frosting.' },
				{ name: 'Custom Celebration Cake', price: 'From $35', description: 'Custom cakes for special occasions. Please order 48 hours in advance.' }
			]
		},
		{
			name: 'Cookies & Treats',
			items: [
				{ name: 'Chocolate Chip Cookie', price: '$2.50', description: 'Classic chocolate chip cookie with semi-sweet chocolate.' },
				{ name: 'Oatmeal Raisin Cookie', price: '$2.50', description: 'Chewy oatmeal cookie with plump raisins.' },
				{ name: 'Macarons', price: '$2.75 each', description: 'Delicate French macarons in assorted flavors.' },
				{ name: 'Brownie', price: '$3.50', description: 'Fudgy chocolate brownie with walnuts.' }
			]
		},
		{
			name: 'Beverages',
			items: [
				{ name: 'Coffee', price: '$3.25', description: 'Freshly brewed coffee using locally roasted beans.' },
				{ name: 'Tea', price: '$2.95', description: 'Selection of organic loose leaf teas.' },
				{ name: 'Hot Chocolate', price: '$3.95', description: 'Rich hot chocolate topped with whipped cream.' },
				{ name: 'Iced Drinks', price: 'From $3.50', description: 'Selection of refreshing iced coffees and teas.' }
			]
		}
	];
</script>

<div class="py-8">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-pink-800 mb-4">Our Menu</h1>
		<p class="text-xl text-pink-700 max-w-2xl mx-auto">
			Everything is made fresh daily with the finest ingredients
		</p>
	</div>

	<div class="space-y-16">
		{#each menuCategories as category}
			<section>
				<div class="container mx-auto px-4">
					<h2 class="text-2xl font-bold text-pink-800 mb-6 pb-2 border-b-2 border-pink-200">
						{category.name}
					</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
						{#each category.items as item}
							<div class="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition duration-300">
								<div class="flex justify-between items-start">
									<h3 class="text-lg font-bold text-pink-700">{item.name}</h3>
									<span class="text-pink-800 font-medium">{item.price}</span>
								</div>
								<p class="text-pink-600 mt-1">{item.description}</p>
							</div>
						{/each}
					</div>
				</div>
			</section>
		{/each}
	</div>

	<div class="container mx-auto px-4 mt-16">
		<div class="bg-pink-50 p-6 rounded-lg">
			<h2 class="text-2xl font-bold text-pink-800 mb-4">Special Orders</h2>
			<p class="text-pink-700 mb-4">
				We offer custom cakes, catering, and special orders for events of all sizes. Please contact us at least 48 hours
				in advance for special orders.
			</p>
			<a
				href="/contact"
				class="inline-block px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300"
			>
				Contact Us for Special Orders
			</a>
		</div>
	</div>

	<div class="container mx-auto px-4 mt-16 text-center">
		<p class="text-pink-700 italic">
			* Prices and availability subject to change. Please note that our items may contain or come into contact with common
			allergens such as nuts, dairy, and wheat.
		</p>
	</div>
</div> 