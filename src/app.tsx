import { RenderOtpInput } from './otp';
// import { RenderVirtualizedList } from './virtualizedList';

export function App() {
  return (
    <div className='flex items-center justify-center h-screen flex-col space-4'>
      {/* <RenderVirtualizedList /> */}
      <RenderOtpInput />
    </div>
  );
}
