import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://wklzodxwzagmwxgpfzur.supabase.co', // GANTI PAKE PUNYA KAMU
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' // GANTI PAKE PUNYA KAMU
)
