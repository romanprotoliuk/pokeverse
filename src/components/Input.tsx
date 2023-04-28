import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

interface Props {
  handleFilter: (value: string) => void;
}

const Input: React.FC<Props> = ({ handleFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    handleFilter(event.target.value);
  };

  return (
    <>
      <InputGroup className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
        <Button variant="outline-secondary" id="button-addon1">
          Search
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </InputGroup>
    </>
  );
};

export default Input;