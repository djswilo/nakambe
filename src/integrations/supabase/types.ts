export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      aftercare_payments: {
        Row: {
          amount: number
          child_id: string | null
          id: string
          payment_date: string
          payment_status: Database["public"]["Enums"]["payment_status"]
          transaction_id: string | null
          user_id: string
        }
        Insert: {
          amount: number
          child_id?: string | null
          id?: string
          payment_date?: string
          payment_status?: Database["public"]["Enums"]["payment_status"]
          transaction_id?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          child_id?: string | null
          id?: string
          payment_date?: string
          payment_status?: Database["public"]["Enums"]["payment_status"]
          transaction_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "aftercare_payments_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "aftercare_payments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      appointments: {
        Row: {
          appointment_datetime: string
          created_at: string
          family_booking_id: string | null
          id: string
          status: Database["public"]["Enums"]["booking_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          appointment_datetime: string
          created_at?: string
          family_booking_id?: string | null
          id?: string
          status?: Database["public"]["Enums"]["booking_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          appointment_datetime?: string
          created_at?: string
          family_booking_id?: string | null
          id?: string
          status?: Database["public"]["Enums"]["booking_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      blogs: {
        Row: {
          author_id: string | null
          content: string
          created_at: string
          id: string
          title: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          content: string
          created_at?: string
          id?: string
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          content?: string
          created_at?: string
          id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blogs_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      child_profiles: {
        Row: {
          child_name: string
          created_at: string
          date_of_birth: string
          gender: string | null
          grade: string | null
          id: string
          initial_notes: string | null
          parent_id: string
          updated_at: string
        }
        Insert: {
          child_name: string
          created_at?: string
          date_of_birth: string
          gender?: string | null
          grade?: string | null
          id?: string
          initial_notes?: string | null
          parent_id: string
          updated_at?: string
        }
        Update: {
          child_name?: string
          created_at?: string
          date_of_birth?: string
          gender?: string | null
          grade?: string | null
          id?: string
          initial_notes?: string | null
          parent_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_profiles_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_inquiries: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
        }
        Relationships: []
      }
      documents: {
        Row: {
          child_id: string | null
          document_name: string
          document_url: string
          id: string
          upload_date: string
          user_id: string
        }
        Insert: {
          child_id?: string | null
          document_name: string
          document_url: string
          id?: string
          upload_date?: string
          user_id: string
        }
        Update: {
          child_id?: string | null
          document_name?: string
          document_url?: string
          id?: string
          upload_date?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "documents_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      donors: {
        Row: {
          created_at: string
          donation_amount: number | null
          donation_date: string | null
          donor_name: string
          funding_report: string | null
          id: string
          logo_url: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          donation_amount?: number | null
          donation_date?: string | null
          donor_name: string
          funding_report?: string | null
          id?: string
          logo_url?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          donation_amount?: number | null
          donation_date?: string | null
          donor_name?: string
          funding_report?: string | null
          id?: string
          logo_url?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      funding_proposals: {
        Row: {
          created_at: string
          description: string | null
          funding_amount: number | null
          id: string
          proposal_status: string
          proposal_title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          funding_amount?: number | null
          id?: string
          proposal_status: string
          proposal_title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          funding_amount?: number | null
          id?: string
          proposal_status?: string
          proposal_title?: string
          updated_at?: string
        }
        Relationships: []
      }
      funding_team: {
        Row: {
          created_at: string
          funding_id: string
          id: string
          role: string
          staff_id: string
        }
        Insert: {
          created_at?: string
          funding_id: string
          id?: string
          role: string
          staff_id: string
        }
        Update: {
          created_at?: string
          funding_id?: string
          id?: string
          role?: string
          staff_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_team_funding_id_fkey"
            columns: ["funding_id"]
            isOneToOne: false
            referencedRelation: "funding_proposals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_team_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
        ]
      }
      programme_participation: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          participant_role: string
          participation_date: string
          programme_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          participant_role: string
          participation_date: string
          programme_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          participant_role?: string
          participation_date?: string
          programme_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "programme_participation_programme_id_fkey"
            columns: ["programme_id"]
            isOneToOne: false
            referencedRelation: "programmes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "programme_participation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      programmes: {
        Row: {
          created_at: string
          description: string | null
          end_date: string | null
          id: string
          programme_name: string
          start_date: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          programme_name: string
          start_date: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          programme_name?: string
          start_date?: string
          updated_at?: string
        }
        Relationships: []
      }
      referrals: {
        Row: {
          contact_info: string | null
          created_at: string
          id: string
          notes: string | null
          referred_by_name: string
          referred_by_type: string
        }
        Insert: {
          contact_info?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          referred_by_name: string
          referred_by_type: string
        }
        Update: {
          contact_info?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          referred_by_name?: string
          referred_by_type?: string
        }
        Relationships: []
      }
      staff: {
        Row: {
          availability: string | null
          created_at: string
          id: string
          position: string | null
          signup_date: string
          staff_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          availability?: string | null
          created_at?: string
          id?: string
          position?: string | null
          signup_date: string
          staff_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          availability?: string | null
          created_at?: string
          id?: string
          position?: string | null
          signup_date?: string
          staff_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string
          email: string
          family_id: string | null
          full_name: string
          id: string
          id_number: string | null
          id_type: string | null
          staff_type: string | null
          updated_at: string
          user_type: string
        }
        Insert: {
          created_at?: string
          email: string
          family_id?: string | null
          full_name: string
          id: string
          id_number?: string | null
          id_type?: string | null
          staff_type?: string | null
          updated_at?: string
          user_type: string
        }
        Update: {
          created_at?: string
          email?: string
          family_id?: string | null
          full_name?: string
          id?: string
          id_number?: string | null
          id_type?: string | null
          staff_type?: string | null
          updated_at?: string
          user_type?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      booking_status: "pending" | "confirmed" | "cancelled" | "completed"
      document_status: "pending" | "approved" | "rejected"
      payment_status: "pending" | "completed" | "failed" | "refunded"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
