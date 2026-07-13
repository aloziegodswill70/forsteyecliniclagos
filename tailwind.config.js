/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        /* ==================================================
           FORST EYE CLINIC OFFICIAL BRAND COLORS
           Extracted from Logo
        ================================================== */

        primary: {
          50: "#FFF8F5",
          100: "#FFF1EB",
          200: "#FFE0D2",
          300: "#FFC2AA",
          400: "#FF9A72",
          500: "#FF7645",
          600: "#F15A29", // Official Logo Orange
          700: "#DD461D",
          800: "#BE3617",
          900: "#992A13",
          950: "#651609",
          DEFAULT: "#F15A29",
        },

        secondary: {
          50: "#FFFDF7",
          100: "#FFF9E3",
          200: "#FFF2B7",
          300: "#F7E66F",
          400: "#E8D83A",
          500: "#D4CE1E",
          600: "#BCB617",
          700: "#9B9512",
          800: "#7B7610",
          900: "#5D590C",
          950: "#393505",
          DEFAULT: "#D4CE1E",
        },

        white: "#FFFFFF",

        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },

        success: {
          DEFAULT: "#16A34A",
          light: "#DCFCE7",
          dark: "#15803D",
        },

        warning: {
          DEFAULT: "#F59E0B",
          light: "#FEF3C7",
          dark: "#D97706",
        },

        danger: {
          DEFAULT: "#DC2626",
          light: "#FEE2E2",
          dark: "#B91C1C",
        },

        info: {
          DEFAULT: "#0284C7",
          light: "#E0F2FE",
          dark: "#0369A1",
        },
      },

      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "2rem",
        },
      },

      maxWidth: {
        site: "1440px",
      },

      screens: {
        xs: "475px",
      },

      borderRadius: {
        xs: "0.375rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        full: "9999px",
      },

      boxShadow: {
        xs: "0 1px 2px rgba(15,23,42,.05)",

        sm: "0 3px 10px rgba(15,23,42,.06)",

        card: "0 10px 28px rgba(15,23,42,.08)",

        dropdown: "0 15px 36px rgba(15,23,42,.10)",

        floating: "0 24px 60px rgba(15,23,42,.12)",

        primary:
          "0 18px 45px rgba(241,90,41,.35)",

        secondary:
          "0 16px 38px rgba(212,206,30,.28)",

        glow:
          "0 0 70px rgba(241,90,41,.40)",

        glowLg:
          "0 0 120px rgba(241,90,41,.28)",
      },

      backgroundImage: {
        /* Logo Orange */

        "brand-gradient":
          "linear-gradient(135deg,#FF8A55 0%,#F15A29 42%,#D63B18 100%)",

        "fire-gradient":
          "linear-gradient(90deg,#FF8E57 0%,#F15A29 50%,#D73A18 100%)",

        "premium-gradient":
          "linear-gradient(135deg,#F15A29 0%,#FF7D4A 45%,#D4CE1E 100%)",

        "brand-gradient-soft":
          "linear-gradient(135deg,#FFF8F5 0%,#FFF1EB 100%)",

        "secondary-gradient":
          "linear-gradient(135deg,#FFF9E3 0%,#F7E66F 50%,#D4CE1E 100%)",

        "hero-gradient":
          "linear-gradient(135deg,#FFF8F5 0%,#FFFFFF 60%,#FFFDF7 100%)",

        "orange-glow":
          "radial-gradient(circle at center,rgba(241,90,41,.40) 0%,rgba(241,90,41,.15) 45%,transparent 78%)",

        "gold-glow":
          "radial-gradient(circle at center,rgba(212,206,30,.28) 0%,transparent 70%)",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },

        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },

        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(24px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        pulseSoft: {
          "0%,100%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: ".9",
          },
        },

        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
      },

      animation: {
        float: "float 4s ease-in-out infinite",
        fadeIn: "fadeIn .5s ease",
        slideUp: "slideUp .6s ease-out",
        pulseSoft: "pulseSoft 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },

  plugins: [],
};

module.exports = config;