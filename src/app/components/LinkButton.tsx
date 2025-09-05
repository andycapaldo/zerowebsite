import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface LinkButtonProps {
  icon: IconDefinition;
  label: string;
}

const LinkButton = ({ icon, label }: LinkButtonProps) => {
  return (
    <div className="min-h-[200px] flex items-center justify-center w-1/6">
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
            min-w-[120px] h-[48px]
            text-white
            shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
            
            transition-all

            hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
            hover:text-slate-300
        `}
    >
        <FontAwesomeIcon className='w-8 h-8' icon={icon} />
        <span className='text-3xl font-medium'>{label}</span>
    </button>
  );
};

export default LinkButton;