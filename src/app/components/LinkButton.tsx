import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface LinkButtonProps {
  icon: IconDefinition;
  label: string;
}

const LinkButton = ({ icon, label }: LinkButtonProps) => {
  return (
    <div className="min-h-[100px] mx-4 xl:mx-0 flex items-center justify-center w-1/8 selection:bg-slate-300/30 selection:text-slate-900">
      <Button icon={icon} label={label} />
    </div>
  );
};

const Button = ({ icon, label }: { icon: IconDefinition; label: string }) => {
  return (
    <button
        className={`
            px-4 py-2 rounded-lg
            flex items-center gap-3
            max-w-3xl
            text-white text-2xl
            shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
            border border-black/20 border-t-white/20
            
            transition-all

            hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
            hover:text-slate-200
            active:shadow-[-1px_-1px_3px_rgba(255,_255,_255,_0.6),_1px_1px_3px_rgba(0,_0,_0,_0.3),inset_-1px_-1px_2px_rgba(255,_255,_255,_1),inset_1px_1px_2px_rgba(0,_0,_0,_0.3)]
            active:text-slate-300
            active:scale-95
            focus:outline-none
        `}
    >
        <FontAwesomeIcon className='w-8 h-8' icon={icon} />
        <span className='font-medium'>{label}</span>
    </button>
  );
};

export default LinkButton;