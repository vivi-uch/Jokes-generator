function LinePause() {
  return (
    <div className="items-center flex">
      <span className="flex-grow border-t border-grayishBlue"></span>
      <img
        src="images/pattern-divider-mobile.svg"
        alt="PauseMobile"
        className="flex lg:hidden"
      />
      <img
        src="images/pattern-divider-desktop.svg"
        alt="PauseDesktop"
        className="hidden lg:flex"
      />
      <span className="flex-grow border-t border-grayishBlue"></span>
    </div>
  );
}

export default LinePause;
