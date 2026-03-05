/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",       // for App Router (Next 13+)
        "./pages/**/*.{js,ts,jsx,tsx}",     // for Pages Router
        "./components/**/*.{js,ts,jsx,tsx}",// shared UI
        "./src/**/*.{js,ts,jsx,tsx}"        // optional if using `src/`
    ],
    theme: {
        extend: {
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme("colors.zinc.800"),
                        a: { color: theme("colors.blue.600"), textDecoration: "underline" },
                        h1: { fontWeight: "700", fontSize: "2.25rem" },
                        h2: { fontWeight: "600", marginTop: "2rem" },
                        code: { backgroundColor: theme("colors.zinc.100"), padding: "2px 4px", borderRadius: "4px" },
                    },
                },
            }),
            fontFamily: {
                display: ['"DM Serif Display"', 'serif'],
                sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                xl: '12px',
                '2xl': '16px',
                '3xl': '24px',
                '4xl': '32px',
            },
            boxShadow: {
                'card': '0 1px 3px rgba(10, 15, 13, 0.06), 0 1px 2px rgba(10, 15, 13, 0.04)',
                'card-md': '0 4px 16px rgba(10, 15, 13, 0.08), 0 1px 4px rgba(10, 15, 13, 0.04)',
                'card-lg': '0 12px 40px rgba(10, 15, 13, 0.10)',
                'card-xl': '0 24px 64px rgba(10, 15, 13, 0.14)',
            },
            colors: {
                dark: '#0A0F0D',
                'dark-mid': '#111A16',
                green: '#00C96B',
                'green-soft': '#E6FFF3',
                cream: '#F8F7F3',
                'cream-dark': '#EFEFEA',
                ink: '#0A0F0D',
                'ink-muted': '#52665E',
                'ink-faint': '#9BB0A7',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                }
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [
        require("@tailwindcss/typography"),
        // require("tailwindcss-animate")
    ]
};

module.exports = config;