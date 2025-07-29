<script lang="ts">
    import { PrismicImage } from '@prismicio/svelte';
    import { ChevronDown, Cake, Star, CakeSlice } from 'lucide-svelte';
    import { slide } from 'svelte/transition';
    import type { CakeBaseDocument } from '../../prismicio-types';
    import type { CakeFlavoursDocument } from '../../prismicio-types';
    import type { CakeToppingsDocument } from '../../prismicio-types';

    let { data } = $props<{ 
        data: { 
            cakeBase: CakeBaseDocument;
            cakeFlavours: CakeFlavoursDocument;
            cakeToppings: CakeToppingsDocument;
        } 
    }>();
    
    let { cakeBase, cakeFlavours, cakeToppings } = data;

    interface Section {
        title: string;
        image: any;
        icon: any;
    }

    let activeSection = $state<string | null>(null);

    const sections: Section[] = [
        {
            title: 'Cake Base',
            image: cakeBase?.data?.cake_base,
            icon: Cake
        },
        {
            title: 'Cake Flavours',
            image: cakeFlavours?.data?.cake_flavours,
            icon: CakeSlice
        },
        {
            title: 'Cake Toppings',
            image: cakeToppings?.data?.cake_toppings,
            icon: Star
        }
    ];

    const toggleSection = (section: Section) => {
        activeSection = activeSection === section.title ? null : section.title;
    };
</script>

<div class="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl">
        <div class="mb-12 text-center">
            <h1 class="text-primary-600 bg-secondary-100 font-marck-script mb-12 rounded-full px-6 py-4 text-center text-4xl shadow-lg md:text-7xl">Cake Selection</h1>
        </div>

        <div class="space-y-4">
            {#each sections as section}
                <div class="bg-primary-50 overflow-hidden rounded-lg shadow-md">
                    <button
                        class="md:hover:bg-secondary-50 flex w-full items-center justify-between px-6 py-4 text-left transition-colors"
                        onclick={() => toggleSection(section)}
                    >
                        <div class="flex items-center gap-2">
                            <section.icon class="text-primary-600 h-6 w-6" />
                            <h2 class="text-primary-700 text-xl font-semibold">{section.title}</h2>
                        </div>
                        <ChevronDown
                            class="text-primary-600 h-6 w-6 transform transition-transform {activeSection ===
                            section.title
                                ? 'rotate-180'
                                : ''}"
                        />
                    </button>

                    {#if activeSection === section.title}
                        <div class="p-4 px-6" transition:slide={{ duration: 200 }}>
                            {#if section.image}
                                <div class="rounded-xl shadow-lg overflow-hidden">
                                    <PrismicImage 
                                        field={section.image} 
                                        class="w-full h-auto object-cover"
                                        alt=""
                                    />
                                </div>
                            {:else}
                                <div class="text-center py-8">
                                    <p class="text-primary-600 text-lg">No {section.title.toLowerCase()} information available at the moment.</p>
                                </div>
                            {/if}
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>