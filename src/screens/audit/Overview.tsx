import {
  IoAtOutline,
  IoCloseOutline,
  IoHeartOutline,
  IoOpenOutline,
} from "react-icons/io5";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Dashboard from "../../layouts/Dashboard";
import TextInput from "../../components/TextInput";
import SelectWithSearch from "../../components/SelectWithSearch";
import Modal from "../../components/Modal";
import { useState } from "react";

export default function Overview() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <Dashboard>
      <div className="cols-4">
        <Card className="column">
          <h4>Card</h4>
          <p>Some info</p>
        </Card>
        <Card withStackDecorator className="column">
          <h4>Card with Stack decorator</h4>
          <p>Some info</p>
        </Card>

        <Button title="Button primary" variant="primary" />
        <Button
          title="Button with icon"
          variant="success"
          icon={<IoHeartOutline />}
        />
        <Button
          title="Button outline with icon"
          variant="danger-outline"
          icon={<IoHeartOutline />}
        />
        <Button variant="primary-outline" icon={<IoHeartOutline />} />
        <Button
          title="Button rounded"
          rounded
          variant="primary-outline"
          icon={<IoHeartOutline />}
        />
        <TextInput value="" placeholder="TextInput" onTextChange={() => {}} />
        <TextInput
          label="Text input with label"
          value=""
          placeholder="TextInput"
          onTextChange={() => {}}
        />
        <TextInput
          value=""
          label="Text input with icon"
          placeholder="TextInput"
          onTextChange={() => {}}
          icon={<IoAtOutline />}
        />
        <TextInput
          label="Text input with label and help text"
          helpText="This is a help text"
          placeholder="TextInput"
          onTextChange={() => {}}
        />
        <TextInput
          label="Text input with label, help text and rounded"
          helpText="This is a help text"
          placeholder="TextInput"
          onTextChange={() => {}}
          rounded
        />
        <TextInput
          label="Text input for password"
          helpText="This is a help text"
          password
          placeholder="TextInput"
          onTextChange={() => {}}
          rounded
        />
        <SelectWithSearch options={options} />
        <Button
          title="Open Modal"
          rounded
          variant="primary-outline"
          icon={<IoOpenOutline />}
          onClick={() => setModalIsOpen(true)}
        />
        <Modal isOpen={modalIsOpen}>
          <div className="column modal-content">
            <h3>Modal content</h3>
            <Button
              title="Close modal"
              rounded
              variant="danger-outline"
              icon={<IoCloseOutline />}
              onClick={() => setModalIsOpen(false)}
            />
          </div>
        </Modal>
      </div>
    </Dashboard>
  );
}
