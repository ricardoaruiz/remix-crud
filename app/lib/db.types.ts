export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      quote: {
        Row: {
          author: string | null
          create_at: string | null
          id: string
          quote: string | null
        }
        Insert: {
          author?: string | null
          create_at?: string | null
          id?: string
          quote?: string | null
        }
        Update: {
          author?: string | null
          create_at?: string | null
          id?: string
          quote?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
