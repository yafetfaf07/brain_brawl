import { useEffect, useState, type JSX } from "react";
import { supabase } from "../utils/supabase";
import { useNavigate } from "react-router";

function AuthGuard({ children }: { children: JSX.Element }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkSession() {
      const { data: { session } } = await supabase.auth.getSession();

      if (session) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
      setLoading(false);
    }

    checkSession();

    // listen for changes (login/logout)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

  return children;
}

export default AuthGuard;
