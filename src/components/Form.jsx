import { useRef } from "react";
import { AppContext } from "../ThemedApp";
import { Box, Button, TextField } from "@mui/material";

export default function Form({ add }){
    // const {mode} = useContext(AppContext);
    const contentRef = useRef();
    // const nameRef = useRef();
    return(
        <form
        onSubmit={e => {
            e.preventDefault();
            const content = contentRef.current.value;

            add(content, "Alice");

            e.currentTarget.reset();
        }}

        // style={{
        //     display: "flex",
        //     flexDirection: "column",
        //     gap: 3,
        //     padding: 10,
        //     borderRadius: 8,
        //     marginBottom: 20,
        //     background: mode === "dark" ? "#555" : "#def",
        // }}
        >
            {/* <input ref={contentRef} type="text" placeholder="Content" style={{ padding: 5}}/>
            <input ref={nameRef} type="text" placeholder="Name" style={{ padding: 5}}/>
            <button type="submit" style={{ padding: 8, background: "#0d6efd", color: "#fff", border: "0 none"}}>
                Post
            </button> */}

            <Box sx={{ mb: 4, textAlign: "right" }}>
                <TextField 
                    inputRef={contentRef}
                    type="text"
                    placeholder="Content"
                    fullWidth
                    multiline
                    sx={{ mb: 1 }}
                />
                <Button variant="contained" type="submit">Post</Button>
            </Box>
        </form>
    );
}