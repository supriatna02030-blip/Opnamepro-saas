import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://wklzodxwzagmwxgpfzur.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrbHpvZHh3emFnbXd4Z3BmenVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5OTg1MzIsImV4cCI6MjEwMjU3NDUzMn0.ZRcCCjmG5XIJBZt6q_BN2cxwo1ijfzpRa-0Mr1UJykc'
)
