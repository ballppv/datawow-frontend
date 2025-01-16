import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        mobile: '375px',
        md: '768px',
        '2md': '900px',
        lg: '1024px',
        xl: '1440px',
      },
      fontSize: {
        md: ['16px', '24px'],
      },
      colors: {
        golden: '#C5A365',
        success: '#49A569',
        green: {
          100: '#D8E9E4',
          300: '#2B5F44',
          500: '#243831',
        },
        grey: {
          100: '#BBC2C0',
          300: '#939494',
        },
      },
      backgroundColor: {},
      borderColor: {},
      textColor: {
        primary: '#191919',
        secondary: '#A0AFBA',
      },
    },
  },
  plugins: [],
}
export default config
