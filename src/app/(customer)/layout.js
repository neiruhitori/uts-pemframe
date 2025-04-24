'use client'

import { useAuth } from '../../hooks/auth'
import Navigation from '../(customer)/Navigation'
import Loading from '../(customer)/Loading'

const AppLayout = ({ children }) => {
  const { user } = useAuth({ middleware: 'auth' });

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex bg-muted">
      <Navigation user={user} />
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
