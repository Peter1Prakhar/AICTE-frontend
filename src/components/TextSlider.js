import './tailwind.css';


const TextSlider = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-black h-8 flex items-center">
      <div className="inline-block animate-slide-left text-white font-bold">
      <a href="https://www.aicte-india.org/" className="text-link text-white">Approval Process Handbook 2024-27 out! Check here. </a>&nbsp;&nbsp;
        Last date to apply for approval of new institute is 24 December 2023. Get registered at the earliest! &nbsp;&nbsp;
        Corrigendum-5 regarding the approval process handbook.
      </div>
    </div>
  );
};

export default TextSlider;
