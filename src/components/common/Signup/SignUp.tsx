// // type Props = {};
// import bg from '@/assets/images/signupBg.png';
// import logo from '@/assets/icons/favicon.svg';
// import Signform from './form';
// import Authwith from './authwith';
// import { useSignupStore } from '@/store/signupStore';
// import TermText from './termText';

// const SignUp = () => {
//   const { isSuccess } = useSignupStore();

//   return (
//     <section>
//       {/* background  */}
//       <div className="flex h-full overflow-hidden relative">
//         <img
//           src={bg}
//           alt="Signup"
//           className="max-w-[130vh] h-full object-contain"
//         />
//       </div>

//       {/* text */}
//       <div
//         className="absolute  lg:right-0 top-0 bottom-0
//             w-full h-full
//          flex  flex-col lg:flex-row"
//       >
//         {/* welcome to meetmind */}
//         <div
//           className="bg-[#0000008f] flex items-center justify-center
//          lg:w-[45%] h-full text-white"
//         >
//           <div className="flex flex-col gap-4">
//             <h1 className="text-4xl font-bold ">
//               Welcome to Meet <span className="text-[#06B6D4]">Mind</span>
//             </h1>
//             <p className="text-xl w-[80%]">
//               Designing intelligence that knows how to speak
//             </p>
//           </div>
//         </div>

//         {/* signup form */}
//         <div
//           className="bg-[#F7F9FB]  lg:w-[55%] h-full flex
//             flex-col items-center justify-center gap-3
//           rounded-bl-2xl rounded-tl-2xl"
//         >
//           {/* if successfully or not */}
//           {isSuccess ? (
//             // if successful, show success message
//             <div className="flex flex-col items-center gap-3 text-center">
//               <img src={logo} alt="MeetMind logo" className="h-10 w-10" />
//               <h1 className="text-2xl font-bold text-[#0F172A]">
//                 You're in! 🎉
//               </h1>
//               <p className="text-[#737373] text-base">
//                 Your account has been created successfully.
//               </p>
//             </div>
//           ) : (
//             // if not successful, show form
//             <>
//               {/* logo */}
//               <div>
//                 <img src={logo} alt="MeetMind logo" className="h-10 w-10" />
//               </div>

//               {/* form area */}
//               <div className="w-[55%] flex flex-col gap-3">
//                 <Signform />

//                 {/* or with divider */}
//                 <div className="flex items-center justify-center gap-1.5">
//                   <p className="h-0.5 w-full bg-[#737373]"></p>
//                   <p className="text-base font-semibold text-[#91949D]">OR</p>
//                   <p className="h-0.5 w-full bg-[#737373]"></p>
//                 </div>

//                 {/* auth with  */}
//                 <Authwith />

//                 {/* term and condition */}
//                 <TermText />
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SignUp;
import bg from '@/assets/images/signupBg.png';
import logo from '@/assets/icons/favicon.svg';
import Signform from './form';
import Authwith from './authwith';
import { useSignupStore } from '@/store/signupStore';
import TermText from './termText';

const SignUp = () => {
  const { isSuccess } = useSignupStore();

  return (
    <section className="relative w-full h-screen flex overflow-hidden">
      {/* background - hidden on mobile */}
      <div className="hidden lg:block lg:w-[45%] h-full">
        <img src={bg} alt="Signup" className="w-full h-full object-cover" />
        {/* overlay + welcome text */}
        <div className="absolute inset-0 w-[45%] bg-[#0000008f] flex items-center justify-center">
          <div className="flex flex-col gap-4 px-10">
            <h1 className="text-4xl font-bold text-white">
              Welcome to Meet <span className="text-[#06B6D4]">Mind</span>
            </h1>
            <p className="text-xl text-white w-[80%]">
              Designing intelligence that knows how to speak
            </p>
          </div>
        </div>
      </div>

      {/* signup form panel */}
      <div
        className="w-full lg:w-[55%] h-full bg-[#F7F9FB]
          flex flex-col items-center justify-center
          overflow-y-auto px-6 py-6 sm:px-10
          lg:rounded-bl-2xl lg:rounded-tl-2xl
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {isSuccess ? (
          <div className="flex flex-col items-center gap-3 text-center">
            <img src={logo} alt="MeetMind logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-[#0F172A]">You're in! 🎉</h1>
            <p className="text-[#737373] text-base">
              Your account has been created successfully.
            </p>
          </div>
        ) : (
          <div className="w-full max-w-md flex flex-col gap-2">
            {/* logo */}
            <div className="flex justify-center">
              <img src={logo} alt="MeetMind logo" className="h-10 w-10" />
            </div>

            {/* mobile-only welcome text */}
            <div className="lg:hidden text-center mb-2">
              <h1 className="text-2xl font-bold text-[#0F172A]">
                Welcome to Meet <span className="text-[#06B6D4]">Mind</span>
              </h1>
              <p className="text-sm text-[#737373] mt-1">
                Designing intelligence that knows how to speak
              </p>
            </div>

            {/* form */}
            <Signform />

            {/* OR divider */}
            <div className="flex items-center gap-2">
              <p className="h-0.5 w-full bg-[#737373]"></p>
              <p className="text-base font-semibold text-[#91949D] whitespace-nowrap">
                OR
              </p>
              <p className="h-0.5 w-full bg-[#737373]"></p>
            </div>

            {/* Google auth */}
            <Authwith />

            {/* terms */}
            <TermText />
          </div>
        )}
      </div>
    </section>
  );
};

export default SignUp;
