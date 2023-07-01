function MainFlexContainer({ children }) {
  return (
    <div className="rounded-[2.5rem] lg:rounded-[3.5rem] bg-dark-blue-bg h-full flex flex-col lg:flex-row w-full">
      {children}
    </div>
  );
}

export default MainFlexContainer;
