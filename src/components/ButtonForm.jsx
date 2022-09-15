import "../css/button.css";
import { Box, Button } from "@mui/material";

export default function ButtonForm({ generate, cancel }) {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex">
        <Button
          onClick={cancel}
          className="btn-cancel"
          sx={{ mr: "12px" }}
          type="button"
        >
          Cancel
        </Button>
        <Button variant="contained" className="btn-submit" type="submit">
          Submit
        </Button>
      </Box>
      <Button
        onClick={generate}
        variant="contained"
        className="btn-generate"
        type="button"
      >
        Auto Generate
      </Button>
    </Box>
  );
}
