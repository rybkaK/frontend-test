type Props = {
  isActive: boolean;
  badge: string;
  title: string;
  helperText: string;
  setActiveCard: (value: number) => void;
  index: number;
  name: string;
};

export default function RadioButtonCard({
  isActive = false,
  badge,
  title,
  helperText,
  setActiveCard,
  index,
  name,
}: Props) {
  const handleChange = () => setActiveCard(index);

  return (
    <div
      className={`flex gap-2 flex-row border-solid border-2 rounded-md  p-6 cursor-pointer relative ${
        isActive
          ? 'bg-indigo-100 border-indigo-500'
          : 'bg-slate-200 border-slate-500'
      }`}
      onClick={handleChange}
    >
      {!!badge &&
        <div
          className={`absolute top-[-12px] left-1/2 transform -translate-x-1/2 py-1 px-2 text-xs rounded-lg ${
            isActive
              ? 'text-white bg-indigo-500'
              : 'text-black border-slate-500 border bg-slate-200'
          }`}
        >
          {badge?.toUpperCase()}
        </div>
      }
      <div>
        <input
          id={`position-${index}`}
          value={index}
          name={name}
          type="radio"
          className='hidden'
          checked={isActive}
          onChange={() => {}}
        />
        <span
          className={`w-6 h-6 inline-block mr-2 rounded-full border-2 transition bg-white ${
            isActive ? ' border-indigo-500 border-[6px]' : 'border-slate-500 border'
          }`}
        ></span>
      </div>

      <div className='flex flex-col gap-2'>
        <h6 className='leading-4'>{title}</h6>
        <p className='text-xs font-light'>{helperText}</p>
      </div>
    </div>
  );
}