export default defineAppConfig({
    nuxtIcon: {
        size: "1em",
    },

    ui: {
        popover: {
            background: "bg-white dark:bg-navigation",
        },

        dropdown: {
            background: "bg-white dark:bg-navigation",
            ring: "ring-1 ring-slate-500 dark:ring-slate-700",
            item: {
                active: "bg-gray-300 dark:bg-background text-black dark:text-white",
                icon: {
                    active: "text-primary-500 dark:text-primary-400",
                },
            },
        },

        card: {
            background: "bg-white dark:bg-navigation",
            divide: "divide-y divide-slate-500 dark:divide-slate-700",
            ring: "ring-1 ring-slate-500 dark:ring-slate-700",
        },

        slideover: {
            background: "bg-white dark:bg-background",
            overlay: {
                background: "bg-black/60",
            },
            ring: "ring-1 ring-navigation dark:ring-gray-600",
        },
    },
});
