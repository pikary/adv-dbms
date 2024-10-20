import {FC, useState, ChangeEvent, useEffect, useRef, useMemo} from 'react'
import {motion, AnimatePresence} from "framer-motion";
import Input from "../Input";

interface DataSelectorProps {
    data: []
    placeholder?: string;
}

const container = {
    hidden: {opacity: 0, y: -20},
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 0.2, // Delay the children's appearance slightly
            staggerChildren: 0.1, // Stagger the children with a small delay between them
        },
    },

};

const item = {
    hidden: {opacity: 0, y: -10},
    show: {opacity: 1, y: 0, transition: {duration: 0.2}},
};


type IconType = 'fas fa-chevron-down' | 'fas fa-search'
const DataSelector: FC<DataSelectorProps> = ({data,}) => {
    const [icon, setIcon] = useState<IconType>('fas fa-chevron-down')
    const [searchTerm, setSearchTerm] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Handle option selection

    useEffect(() => {
        const inp: HTMLInputElement | null = document.getElementById('selector-id') as HTMLInputElement
        inp?.addEventListener('focusin', () => {
            setShowOptions(true)
            setIcon('fas fa-search')
        })
        inp?.addEventListener('focusout', () => {
            setIcon('fas fa-chevron-down')
            setShowOptions(false)
            setSearchTerm('')
        })
    }, []);

    const filteredData = useMemo(
        () =>
            data.filter(item =>
                //@ts-ignore
                item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            ),
        [data, searchTerm] // Recalculate only when 'data' or 'searchTerm' changes
    );

    return (
        <div className="relative w-full">
            <Input
                name={'selector-id'}
                labelText={''}
                placeholder={showOptions ? 'Search for your city' : 'Region'}
                type={'text'}
                formik={false}
                value={(selectedOption && !showOptions) ? selectedOption.name  : searchTerm}
                onChange={handleSearchChange}
                icon={icon}
                className={''}
            />
            <AnimatePresence>
                {showOptions && (
                    <motion.ul
                        variants={container}  // Apply container variants
                        initial="hidden"      // Initial state (hidden)
                        animate="show"        // Animate to show state
                        exit="hidden"         // When exiting, animate to hidden
                        className="absolute w-full bg-white border border-gray-300 max-h-60 overflow-y-auto z-10 mt-2"
                    >
                        {filteredData.map((itemd) =>
                            <motion.li
                                key={itemd['id']}
                                variants={item}
                                initial={'hidden'}
                                animate={'show'}
                                exit={'hidden'}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                onClick={()=>{setSelectedOption(itemd)}}
                            >
                                {itemd["name"]}
                            </motion.li>
                        )}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}


export default DataSelector