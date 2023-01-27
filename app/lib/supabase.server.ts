import { createClient } from '@supabase/supabase-js'
import type { Database } from './db.types'

const SUPABASE_URL = process.env.SUPABASE_URL || ''
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || ''

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY)
export { supabase }