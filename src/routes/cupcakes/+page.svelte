<script lang="ts">
    import { PrismicImage } from '@prismicio/svelte';
    import type { CupcakeInsertDocument } from '../../prismicio-types';

    let { data } = $props<{ data: { cupcake: CupcakeInsertDocument } }>();
</script>

<div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
        <!-- <h1 class="text-primary-600 bg-secondary-100 font-marck-script mb-12 rounded-full px-6 py-4 text-center text-4xl shadow-lg md:text-7xl">Information</h1> -->
        
        {#if data.cupcake?.data?.cupcake_insert}
            <div class="rounded-xl shadow-lg overflow-hidden">
                <PrismicImage 
                    field={data.cupcake.data.cupcake_insert} 
                    class="w-full h-auto object-cover"
                    alt=""
                />
            </div>
        {:else}
            <div class="text-center py-12">
                <p class="text-primary-600 text-lg">No cupcake information available at the moment.</p>
            </div>
        {/if}
    </div>
</div>