# LR15 — Wild Oasis (Next.js + Supabase) — Demo scaffold

This is a ready scaffold for the lab assignment:
- Next.js app-router (app/)
- Tailwind config
- Supabase client in _lib/supabase.js and a mock data-service
- Demo images stored in `public/cabin-images`
- Example pages and components (cabins listing, dynamic cabin page, account nested routes, loaders, error component)

How to use:
1. Copy `.env.local.example` to `.env.local` and fill supabase credentials.
2. Run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:3000

Note: images are small demo placeholders. Replace with your real images or connect to Supabase Storage.
