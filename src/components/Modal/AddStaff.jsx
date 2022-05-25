import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getUserByEmail } from "../../api/users";
import { addUser } from "../../redux/slice/users";
import { uploadImg } from "../../utils/uploadImg";

const AddStaff = ({ show, handleClose }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    file: null,
  });

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    switch (e.target.type) {
      case "text":
        setUser({ ...user, [e.target.name]: e.target.value });
        break;
      case "file":
        setUser({ ...user, file: e.target.files[0] });
        break;
      default:
        return user;
    }
  };

  const handleSubmit = async () => {
    if (!user.email.trim() || !user.username.trim() || !user.file) {
      return toast.error("Nhập đủ thông tin các trường!");
    }

    setLoading(true);

    const result = await getUserByEmail(user.email);

    if (result.data.length > 0) {
      setLoading(false);
      return toast.error("Email này đã được dùng trước đó!");
    }

    try {
      const image = await uploadImg(user.file);
      dispatch(
        addUser({
          username: user.username,
          email: user.email,
          roleId: "user",
          avatar: image,
          password: user.password,
        })
      );
    } catch (error) {
      toast.error("Thêm nhân viên thất bại!");
    }

    setUser({
      username: "",
      email: "",
      password: "",
      file: null,
    });

    setLoading(false);
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
          <Form.Group className="mb-3">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              required
              value={user.password}
              type="text"
              name="password"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Thêm ảnh</Form.Label>
            <Form.Control onChange={handleOnChange} required type="file" />
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

export default AddStaff;
