import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Remove this line
// import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    // visualizer({ open: true, gzipSize: true }) // keep commented or remove
  ],
  server: {
    port: 3005,
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor_react'
            if (id.includes('framer-motion')) return 'vendor_framer'
            if (id.includes('lucide-react')) return 'vendor_icons'
            return 'vendor_other'
          }
        }
      }
    }
  }
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: './',   // 👈 ADD THIS LINE
//   plugins: [react()],
//   server: {
//     port: 3005,
//     open: true
//   },
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             if (id.includes('react')) return 'vendor_react'
//             if (id.includes('framer-motion')) return 'vendor_framer'
//             if (id.includes('lucide-react')) return 'vendor_icons'
//             return 'vendor_other'
//           }
//         }
//       }
//     }
//   }
// })
