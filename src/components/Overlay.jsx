const Overlay = ({ shouldOverlay }) => {
  return (
    <div
      className={`fixed top-0 left-0  ${
        shouldOverlay ? 'block' : 'hidden'
      } w-screen h-screen opacity-50 bg-very-dark-blue`}
    ></div>
  );
};

export default Overlay;
