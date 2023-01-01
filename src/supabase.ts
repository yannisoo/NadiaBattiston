import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://ikexabhmfyqemydhtlds.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrZXhhYmhtZnlxZW15ZGh0bGRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0MTQ3NTQsImV4cCI6MTk4Nzk5MDc1NH0.JX8i9wUc876bDd0tfJsRXzEfzu9ieCFpwYTnR_BOn_Y'
)