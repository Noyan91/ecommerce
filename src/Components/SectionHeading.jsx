const SectionHeading = ({ tag, title, right }) => {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <span className="w-5 h-10 bg-secondary rounded-sm" />
          <span className="text-secondary font-semibold text-sm">{tag}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      </div>
      {right}
    </div>
  );
};

export default SectionHeading;
