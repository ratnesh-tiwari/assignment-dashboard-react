function ContainerMain({ children }) {
  return (
    <div className="bg-light-blue-bg rounded-[2.5rem] px-3 py-6 sm:p-8 md:p-12 lg:p-10 xl:p-12 2xl:p-16 lg:rounded-[3.5rem] lg:basis-3/4">
      {children}
    </div>
  );
}

export default ContainerMain;
