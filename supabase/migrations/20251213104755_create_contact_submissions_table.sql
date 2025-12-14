/*
  # Create contact submissions table for Meta Sec Lock website

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `full_name` (text, required) - Name of the person submitting
      - `email` (text, required) - Contact email address
      - `phone` (text, required) - Phone number
      - `service_required` (text, required) - Type of service they're interested in
      - `message` (text, required) - Their message or inquiry
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Status of the inquiry (new, contacted, closed)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for authenticated admin users to read all submissions
    - Add policy for public (anonymous) users to insert their own submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_required text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);