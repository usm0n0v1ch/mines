import {useState} from "react";
import {Link, useNavigate} from "react-router-dom"; // Импортируем useNavigate
import styles from "./style.module.css";

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    placeholder: string;
}

export const ListLink = ({options}: CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const navigate = useNavigate();

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);

        navigate(option.value);
    };

    return (
        <div className={styles.selectContainer}>
            <div className={styles.selectBox} onClick={toggleDropdown}>
                <span>Menu</span>
                <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
                <div className={styles.optionsList}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={styles.option}
                            onClick={() => handleOptionClick(option)}
                        >
                            <Link to={option.value}>
                                {option.label}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

