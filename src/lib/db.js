import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://nphykmdyafqximjeemqm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE2MzE1MCwiZXhwIjoxOTU1NzM5MTUwfQ.-w1NRh4b-iPxprky42PiYQ211LewXV_hiIJ8GrB7kNY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase