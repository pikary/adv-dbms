import {FC, useState, ChangeEvent, useEffect, useRef} from 'react'
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
    hidden: {opacity: 0, y: -10}, // Each item will fade in and move up slightly
    show: {opacity: 1, y: 0, transition: {duration: 0.2}}, // Animates to full opacity and original position
};


type IconType = 'fas fa-chevron-down' | 'fas fa-search'
const DataSelector: FC<DataSelectorProps> = ({data, placeholder,}) => {
    const [icon, setIcon] = useState<IconType>('fas fa-chevron-down')
    const [searchTerm, setSearchTerm] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Handle option selection


    //fas fa-chevron-down

    useEffect(() => {
        const inp: HTMLInputElement | null = document.getElementById('selector-id') as HTMLInputElement
        inp?.addEventListener('focusin', () => {
            setShowOptions(true)
            setIcon('fas fa-search')

        })
        inp?.addEventListener('focusout', () => {
            setIcon('fas fa-chevron-down')
            console.log('HEYEHY')
            setShowOptions(false)
        })
    }, []);
    //@ts-ignore
    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="relative w-full">

            <Input
                name={'selector-id'}
                labelText={''}
                placeholder={showOptions ? 'Search for your city' : 'Region'}
                type={'text'}
                formik={false}
                value={searchTerm}
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
                            <motion.li variants={item}
                                       className="p-2 hover:bg-gray-200 cursor-pointer">{itemd["name"]}</motion.li>
                        )}
                    </motion.ul>
                )}

            </AnimatePresence>

            {selectedOption && (
                <div className="mt-2">
                    <p>Selected: Test</p>
                </div>
            )}
        </div>
    )
}


export default DataSelector