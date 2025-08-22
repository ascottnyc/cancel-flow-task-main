Configuration:

I had to create a user in supabase dashboard and then create the user in punlic users and a subscription (since the id has to match for row level security).

The following is my env.local file:

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL='http://localhost:54321/'
NEXT_PUBLIC_SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
SUPABASE_SERVICE_ROLE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU'

# Database Configuration (if using external Postgres)
DATABASE_URL=your-postgres-connection-string

# Decisions:

I decided to use the modal built into modern browsers, utalizing the dialog tag.
I needed a ref to the element so I could call openModal on it.

I put the bulk of the modal code in a component stored in modal.tsx.  The logic tracks
internal state (where the user is in the cancelation process) and updates the DOM accordingly.
When there are state changes within what looked like the same dialog step, I used tailwind
to hide the parts that weren't displayed in figma.

DOM updates are more computationally expensive than adding and removing a class on an element.

I ran out of time and did not implemeent A/B testing.  I also did not get inserts ready.

There is some debug code (verifying that I can pull data from the database and that row
level security is working).  I didn't have time to clean that up either.
