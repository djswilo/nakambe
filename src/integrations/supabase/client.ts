// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hftgyzewtltrnclvahjt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmdGd5emV3dGx0cm5jbHZhaGp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4OTQxNzIsImV4cCI6MjA1ODQ3MDE3Mn0.AIQovLsdL-mV4cbZfFpx9UEO_VVWCmEujCusM4taOmk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);