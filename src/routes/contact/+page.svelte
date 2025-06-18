<script lang="ts">
	// Form handling
	let name = '';
	let email = '';
	let subject = '';
	let message = '';
	let submitted = false;

	function handleSubmit() {
		// Netlify will handle the form submission automatically
		// We just need to show the success message
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
		<h1 class="text-primary-800 mb-8 text-center text-4xl font-bold">Contact Us</h1>

		<div class="mx-auto max-w-6xl">
			<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
				<!-- Contact Information -->
				<div>
					<div class="mb-8 rounded-lg bg-primary-100 p-8 shadow-md">
						<h2 class="text-primary-700 mb-6 text-2xl font-bold">Get in Touch</h2>
						<div class="space-y-4">
							<div class="flex items-start">
								<div class="text-primary-600 mr-4 text-2xl">📍</div>
								<div>
									<h3 class="text-primary-700 font-bold">Address</h3>
									<p class="text-primary-600">123 Address Street</p>
									<p class="text-primary-600">Ottawa, Postal Code</p>
								</div>
							</div>
							<div class="flex items-start">
								<div class="text-primary-600 mr-4 text-2xl">📞</div>
								<div>
									<h3 class="text-primary-700 font-bold">Phone</h3>
									<p class="text-primary-600">Real-Phone-Number</p>
								</div>
							</div>
							<div class="flex items-start">
								<div class="text-primary-600 mr-4 text-2xl">📧</div>
								<div>
									<h3 class="text-primary-700 font-bold">Email</h3>
									<p class="text-primary-600">soulsweetemail.com</p>
								</div>
							</div>
							<div class="flex items-start">
								<div class="text-primary-600 mr-4 text-2xl">🕒</div>
								<div>
									<h3 class="text-primary-700 font-bold">Hours</h3>
									<p class="text-primary-600">Monday-Friday: 7am-6pm</p>
									<p class="text-primary-600">Saturday: 8am-5pm</p>
									<p class="text-primary-600">Sunday: 8am-3pm</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Map Placeholder -->
					
						<div class="bg-primary-100 flex h-64 items-center justify-center rounded-lg p-4 shadow-md">
							<div class="p-4 text-center">
								<p class="text-primary-800">
									A helpful reminder could go here
									<br />
									Something that annoys you
								</p>
							</div>
						</div>
					
				</div>

				<!-- Contact Form -->
				<div class="rounded-lg bg-primary-100 p-8 shadow-md">
					<h2 class="text-primary-700 mb-6 text-2xl font-bold">Send Us a Message</h2>

					{#if submitted}
						<div class="mb-6 rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700">
							Thank you for your message! We'll get back to you soon.
						</div>
					{/if}

					<form 
						name="contact" 
						method="POST" 
						data-netlify="true"
						data-netlify-honeypot="bot-field"
						on:submit|preventDefault={handleSubmit} 
						class="space-y-4"
					>
						<!-- Hidden input for Netlify -->
						<input type="hidden" name="form-name" value="contact" />
						
						<!-- Honeypot field to prevent spam -->
						<div class="hidden">
							<label>
								Don't fill this out if you're human: <input name="bot-field" />
							</label>
						</div>

						<div>
							<label for="name" class="text-primary-700 mb-1 block font-medium">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								bind:value={name}
								required
								class="border-primary-200 focus:ring-primary-300 w-full rounded border px-4 py-2 focus:ring-2 focus:outline-none"
							/>
						</div>
						<div>
							<label for="email" class="text-primary-700 mb-1 block font-medium">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								bind:value={email}
								required
								class="border-primary-200 focus:ring-primary-300 w-full rounded border px-4 py-2 focus:ring-2 focus:outline-none"
							/>
						</div>
						<div>
							<label for="subject" class="text-primary-700 mb-1 block font-medium">Subject</label>
							<select
								id="subject"
								name="subject"
								bind:value={subject}
								required
								class="border-primary-200 focus:ring-primary-300 w-full rounded border px-4 py-2 focus:ring-2 focus:outline-none"
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
							<label for="message" class="text-primary-700 mb-1 block font-medium">Message</label>
							<textarea
								id="message"
								name="message"
								bind:value={message}
								required
								rows="6"
								class="border-primary-200 focus:ring-primary-300 w-full rounded border px-4 py-2 focus:ring-2 focus:outline-none"
							></textarea>
						</div>
						<button
							type="submit"
							class="bg-primary-600 hover:bg-primary-700 w-full rounded-full px-6 py-3 font-medium text-primary-50 transition duration-300 md:w-auto"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>

		<!-- Special Orders Section -->
		<div class="mx-auto mt-16 max-w-6xl">
			<div class="rounded-lg bg-secondary-200 p-8">
				<h2 class="text-primary-800 mb-4 text-2xl font-bold">Special Orders & Catering</h2>
				<p class="text-primary-700 mb-4">
					Looking for custom cakes, catering for an event, or bulk orders? We'd love to help make
					your occasion special with our handcrafted treats.
				</p>
				<p class="text-primary-700 mb-6">
					For special orders over $300, please contact us at least 3 weeks in advance. For large
					events or wedding cakes, we recommend reaching out 4-6 weeks ahead to ensure availability.
				</p>
				<a
					href="tel:Real-Phone-Number"
					class="bg-primary-600 text-primary-50 hover:bg-primary-700 inline-block rounded-full px-6 py-2 transition duration-300"
				>
					Call Us: Real-Phone-Number
				</a>
			</div>
		</div>
	</div>
</div>
