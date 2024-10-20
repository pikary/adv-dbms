import {FC} from "react";

const LanguagePicker:FC  = () =>{
    return (
        <select id="language" className="border rounded px-2 py-1">
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="kz">Қазақша</option>
        </select>
    )
}

export default  LanguagePicker