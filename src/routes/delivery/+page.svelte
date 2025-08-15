<script lang="ts">
    import { PrismicImage } from '@prismicio/svelte';
    import { onMount } from 'svelte';
    import { preloadImages } from '$lib/utils/imagePreloader';
    import type { DeliveryInsertDocument } from '../../prismicio-types';

    let { data } = $props<{ data: { delivery: DeliveryInsertDocument; imageUrl: string | null } }>();

    onMount(() => {
        // Actively preload the image to ensure it's ready
        if (data.imageUrl) {
            preloadImages([data.imageUrl], { priority: 'high' }).catch(console.warn);
        }
    });
</script>

<svelte:head>
    {#if data.imageUrl}
        <link rel="preload" as="image" href={data.imageUrl} />
    {/if}
</svelte:head>

<div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
        <!-- <h1 class="text-primary-600 bg-secondary-100 font-marck-script mb-12 rounded-full px-6 py-4 text-center text-4xl shadow-lg md:text-7xl">Delivery Information</h1>
         -->
        {#if data.delivery?.data?.delivery_insert}
            <div class="rounded-xl shadow-lg overflow-hidden">
                <PrismicImage 
                    field={data.delivery.data.delivery_insert} 
                    class="w-full h-auto object-cover"
                    alt=""
                    imgixParams={{ auto: ['format'], q: 85 }}
                />
            </div>
        {:else}
            <div class="text-center py-12">
                <p class="text-primary-600 text-lg">No delivery information available at the moment.</p>
            </div>
        {/if}
    </div>
</div>