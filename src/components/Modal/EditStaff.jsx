import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editUser } from "../../redux/slice/users";
import { toast } from "react-toastify";

const EditStaff = ({ show, handleClose, data }) => {
  const [user, setUser] = useState({
    username: data.username,
    email: data.email,
    password: data.password,
    roleId: data.roleId,
    avatar: data.avatar,
  });

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    switch (e.target.type) {
      case "text":
        setUser({ ...user, [e.target.name]: e.target.value });
        break;
      case "select-one":
        setUser({ ...user, roleId: e.target.value });
        break;
      default:
        return user;
    }
  };

  const handleSubmit = async () => {
    if (!user.email.trim() || !user.username.trim()) {
      return toast.error("Nhập đủ thông tin các trường!");
    }

    setLoading(true);

    dispatch(editUser({ id: data.id, newUser: user }));

    setLoading(false);
    setUser({
      username: "",
      email: "",
      password: "",
      roleId: "",
      avatar: "",
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm nhân viên mới!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Tên nhân viên</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              required
              value={user.username}
              type="text"
              name="username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              required
              value={user.email}
              type="text"
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Chức vụ</Form.Label>
            <Form.Select
              onChange={handleOnChange}
              required
              value={user.roleId}
              name="roleId"
            >
              <option value={"user"}>user</option>
              <option value={"admin"}>admin</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="bg-gray-500 border border-bg-gray-500 hover:bg-gray-600"
          onClick={handleClose}
        >
          Đóng
        </Button>
        <Button
          disabled={loading}
          className={`bg-blue-500 hover:bg-blue-600 ${loading && "opacity-70"}`}
          onClick={handleSubmit}
        >
          {loading ? "Đợi xíu nhé!" : "Thêm nhân viên"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditStaff;
