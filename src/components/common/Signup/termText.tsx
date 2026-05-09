import { Link } from 'react-router-dom';

// interface Props {}

const TermText = () => {
  return (
    <div>
      <p className="text-[#5E6470] text-base flex flex-row gap-3">
        <p> Already have an account?</p>
        <Link to="/signIn" className="text-[#035A69]">
          Sign In
        </Link>
      </p>

      <p className=" text-base text-[#91949D]">
        By using Meetminds you agree to the{' '}
        <span className="text-[#035A69] underline">Terms of Service</span> and{' '}
        <span className="text-[#035A69] underline">Privacy Policy</span>.
      </p>
    </div>
  );
};

export default TermText;
