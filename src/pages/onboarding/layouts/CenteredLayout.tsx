import type React from 'react';

const CenteredLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex-col justify-center items-center bg-white">
      <div className="flex flex-col justify-center items-center px-16 py-10">
        {children}
      </div>
    </div>
  );
};

export default CenteredLayout;
