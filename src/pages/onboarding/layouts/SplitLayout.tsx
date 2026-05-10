import type { ReactNode } from 'react';

const SplitLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex bg-white">
      <div className="w-1/2 flex flex-col justify-center items-center px-16 py-10">
        {children}
      </div>
      <div className="w-1/2 flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md"></div>
      </div>
    </div>
  );
};

export default SplitLayout;
