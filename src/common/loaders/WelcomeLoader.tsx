const WelcomeLoader: React.FC = () => {
  return (
    <div className="w-full h-screen gap-4 flex-col justify-center flex items-center">
      <div className="rounded-md h-10 w-10 border-4 border-t-4 border-secondaryColor animate-spin "></div>
      <div>Please wait Loading...</div>
    </div>
  );
};

export default WelcomeLoader;
