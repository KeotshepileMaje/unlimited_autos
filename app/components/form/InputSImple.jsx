"use client";

const InputSimple = ({
  id,
  icon: Icon,
  type,
  disabled,
  required,
  register,
  errors,
  roundedCorner = "rounded-xl",
}) => {
  return (
    <div className="w-full relative">
      <div className="relative">
        <input
          autoComplete="off"
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder=""
          type={type}
          className={`
            peer
            w-full
            p-3 pl-12
            outline-none
            bg-white
            font-light
            border-2
            ${roundedCorner}
            disabled:opacity-70
            disabled:cursor-not-allowed
            ${errors[id] ? "border-rose-400" : "border-slate-300"}
            ${errors[id] ? "focus:border-rose-400" : "focus:border-slate-300"}
          `}
        />
        <label
          className={`
            absolute
            top-0
            left-0
            h-full
            flex
            items-center
            pl-3
            pointer-events-none
            text-gray-800
          `}
        >
          {Icon && <Icon size={24} />}
        </label>
      </div>
    </div>
  );
};

export default InputSimple;
