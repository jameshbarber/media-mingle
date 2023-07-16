import { Input } from "@geist-ui/core"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


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


    return <form onSubmit={handleSubmit}>
        <Input value={name} placeholder="Search movies & music" onChange={handleInput} />
    </form>
}

export default SearchField