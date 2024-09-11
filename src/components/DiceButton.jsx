function DiceButton({ GetAdvice }) {
  return (
    <button
      className="rounded-full bg-neonGreen h-16 w-16 flex justify-center items-center  cursor-grab hover:shadow-neon absolute bottom-[-44px]"
      onClick={GetAdvice}
      // {left-[105px] lg:left-[220px] instead i used translate-x which in css is transform : translateX(-x%) but no need for all that found out that my parent div wasn't aligned to the center}
    >
      <img className="h-8 w-8" src="images/icon-dice.svg" alt="Dice Icon" />
    </button>
  );
}

export default DiceButton;
