<script lang="ts">
	import me from '$lib/assets/pics/Kiara.jpg';
</script>

<div class="py-12">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-4xl">
			<h2 class="text-primary-800 mb-4 text-center text-4xl font-bold">
				I’m Kiara Marfurt-Breakenridge
			</h2>
			<p class="text-primary-700 mb-12 text-center text-3xl">Creator of Soul Sweets bakery</p>

			<!-- Our Story Section -->
			<section class="bg-primary-50 rounded-lg border-2 py-16">
				<div class="container mx-auto px-4">
					<div class="flex flex-col items-center gap-12 md:flex-row">
						<div class="md:w-1/2">
							<div
								class="bg-primary-200 text-primary-800 flex items-center justify-center rounded-lg"
							>
								<!-- <span class="text-center text-8xl">Your Photo</span> -->
								<img
									src={me}
									alt="Kiara Marfurt-Breakenridge"
									class="h-auto w-full rounded-xl object-cover"
								/>
							</div>
						</div>
						<div class="space-y-4 md:w-1/2">
							<!-- <h2 class="text-primary-800 text-3xl font-bold">
						I’m Kiara Marfurt-Breakenridge, the creator of Soul Sweets bakery.
					</h2> -->
							<p class="text-primary-700">
								Growing up and even now, the kitchen has always been the heart of everything In my
								family. Cooking and baking is how we show love, celebrate, and spend time together.
							</p>
							<p class="text-primary-700">
								For as long as I can remember I’ve been drawn to baking, my mum says I got it from
								my grandfather, who once owned a bakery in Old Montreal. I never got the chance to
								meet him, but I like to think I carry a small part of him with me, especially when
								I’m in the kitchen.
							</p>
							<p class="text-primary-700">
								No matter what paths I’ve taken in life I always find myself coming back to baking,
								It’s what I truly love to do. In November 2023, I decided to start Soul Sweets a
								home based bakery in Russell, Ontario where I specialize in cakes, cupcakes,
								brownies, and other sweet treats. Everything is made fresh, using quality
								ingredients and a whole lot of soul.
							</p>
							<p class="text-primary-800 font-bold">
								Whether you’re celebrating something big or just craving something sweet, I’ve got
								you covered.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</div>
