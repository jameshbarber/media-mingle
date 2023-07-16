import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styles from "./SearchField.module.css"


const SearchField = ({ value }) => {

    const [name, setName] = useState(value ?? "")
    const navigate = useNavigate();

    const handleInput = e => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/results?name=${name}`)
    };

    return <form style={{ width: "100%", textAlign: "center", marginBottom: "48px" }} onSubmit={handleSubmit}>
        <input className={styles.input} value={name} placeholder="Search movies & music" onChange={handleInput} />
    </form>
}

export default SearchField