import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Loader = () => {
  const { loading } = useContext(AuthContext)
  
  
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
      </div>
    )
  }
  else {
    null;
  }
};

export default Loader;