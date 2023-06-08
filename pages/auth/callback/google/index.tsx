import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useGoogleLoginMutation } from '@/interfaces/auth/mutation';

const GoogleCallback = () => {
  const params = useSearchParams();
  const code = params.get("code");
  const mutation = useGoogleLoginMutation();

  useEffect(() => {
    if (code != null) mutation.mutate(code);
  }, [code]);

  return (
    <p>Loading...</p>
  )
}

export default GoogleCallback;
