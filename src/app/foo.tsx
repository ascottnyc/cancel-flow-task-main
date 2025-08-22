import { supabase } from '@/lib/supabase';

export async function Foo() {
  const { data: instruments } = await supabase.from("users").select("*");
  return (
    <div>
      <pre>{JSON.stringify(instruments, null, 2)}</pre>
      <pre>{instruments}</pre>
    </div>
  );
}