<script lang="ts">
	// Form handling
	let name = '';
	let email = '';
	let subject = '';
	let message = '';
	let submitted = false;

	function handleSubmit() {
		// In a real application, you would handle form submission to a server here
		submitted = true;
		// Reset form
		setTimeout(() => {
			name = '';
			email = '';
			subject = '';
			message = '';
			submitted = false;
		}, 5000);
	}
</script>

<div class="py-12">
	<div class="container mx-auto px-4">
		<h1 class="text-4xl font-bold text-pink-800 mb-8 text-center">Contact Us</h1>

		<div class="max-w-6xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
				<!-- Contact Information -->
				<div>
					<div class="bg-white p-8 rounded-lg shadow-md mb-8">
						<h2 class="text-2xl font-bold text-pink-700 mb-6">Get in Touch</h2>
						<div class="space-y-4">
							<div class="flex items-start">
								<div class="text-2xl text-pink-600 mr-4">📍</div>
								<div>
									<h3 class="font-bold text-pink-700">Address</h3>
									<p class="text-pink-600">123 Bakery Lane</p>
									<p class="text-pink-600">Sweet Town, ST 12345</p>
								</div>
							</div>
							<div class="flex items-start">
								<div class="text-2xl text-pink-600 mr-4">📞</div>
								<div>
									<h3 class="font-bold text-pink-700">Phone</h3>
									<p class="text-pink-600">(555) 123-4567</p>
								</div>
							</div>
							<div class="flex items-start">
								<div class="text-2xl text-pink-600 mr-4">📧</div>
								<div>
									<h3 class="font-bold text-pink-700">Email</h3>
									<p class="text-pink-600">hello@soulsweets.com</p>
								</div>
							</div>
							<div class="flex items-start">
								<div class="text-2xl text-pink-600 mr-4">🕒</div>
								<div>
									<h3 class="font-bold text-pink-700">Hours</h3>
									<p class="text-pink-600">Monday-Friday: 7am-6pm</p>
									<p class="text-pink-600">Saturday: 8am-5pm</p>
									<p class="text-pink-600">Sunday: 8am-3pm</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Map Placeholder -->
					<div class="bg-pink-100 p-4 rounded-lg shadow-md">
						<div class="h-64 bg-pink-200 rounded flex items-center justify-center">
							<div class="text-center p-4">
								<div class="text-4xl mb-2">🗺️</div>
								<p class="text-pink-800">
									Map would be embedded here in a production site.
									<br />
									Find us at 123 Bakery Lane, Sweet Town
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Contact Form -->
				<div class="bg-white p-8 rounded-lg shadow-md">
					<h2 class="text-2xl font-bold text-pink-700 mb-6">Send Us a Message</h2>
					
					{#if submitted}
						<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
							Thank you for your message! We'll get back to you soon.
						</div>
					{/if}
					
					<form on:submit|preventDefault={handleSubmit} class="space-y-4">
						<div>
							<label for="name" class="block text-pink-700 font-medium mb-1">Name</label>
							<input
								type="text"
								id="name"
								bind:value={name}
								required
								class="w-full px-4 py-2 border border-pink-200 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
							/>
						</div>
						<div>
							<label for="email" class="block text-pink-700 font-medium mb-1">Email</label>
							<input
								type="email"
								id="email"
								bind:value={email}
								required
								class="w-full px-4 py-2 border border-pink-200 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
							/>
						</div>
						<div>
							<label for="subject" class="block text-pink-700 font-medium mb-1">Subject</label>
							<select
								id="subject"
								bind:value={subject}
								required
								class="w-full px-4 py-2 border border-pink-200 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
							>
								<option value="">Please select a subject</option>
								<option value="General Inquiry">General Inquiry</option>
								<option value="Custom Order">Custom Order</option>
								<option value="Catering">Catering</option>
								<option value="Feedback">Feedback</option>
								<option value="Other">Other</option>
							</select>
						</div>
						<div>
							<label for="message" class="block text-pink-700 font-medium mb-1">Message</label>
							<textarea
								id="message"
								bind:value={message}
								required
								rows="6"
								class="w-full px-4 py-2 border border-pink-200 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
							></textarea>
						</div>
						<button
							type="submit"
							class="px-6 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition duration-300 w-full md:w-auto"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>

		<!-- Special Orders Section -->
		<div class="max-w-4xl mx-auto mt-16">
			<div class="bg-pink-50 p-8 rounded-lg">
				<h2 class="text-2xl font-bold text-pink-800 mb-4">Special Orders & Catering</h2>
				<p class="text-pink-700 mb-4">
					Looking for custom cakes, catering for an event, or bulk orders? We'd love to help make your occasion special
					with our handcrafted treats.
				</p>
				<p class="text-pink-700 mb-6">
					For special orders, please contact us at least 48 hours in advance. For large events or wedding cakes, we
					recommend reaching out 2-4 weeks ahead to ensure availability.
				</p>
				<a
					href="tel:5551234567"
					class="inline-block px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300"
				>
					Call Us: (555) 123-4567
				</a>
			</div>
		</div>
	</div>
</div> 