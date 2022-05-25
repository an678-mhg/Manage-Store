import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { editCategory } from "../../redux/slice/categories";

const EditCategory = ({ show, handleClose, data }) => {
  const [category, setCategory] = useState({
    name: data.name,
    image: data.image,
    descr: data.descr,
    isSell: data.isSell == "1" ? true : false,
  });

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    switch (e.target.type) {
      case "text":
      case "textarea":
        setCategory({ ...category, [e.target.name]: e.target.value });
        break;
      case "checkbox":
        setCategory({ ...category, isSell: !category.isSell });
        break;
      case "file":
        setCategory({ ...category, file: e.target.files[0] });
        break;

      default:
        return category;
    }
  };

  const handleSubmit = () => {
    if (!category.name.trim() || !category.descr.trim()) {
      return toast.error("Nhập đủ thồn tin các trường!");
    }

    setLoading(true);

    dispatch(
      editCategory({
        id: data.id,
        newCategory: { ...category, isSell: category.isSell ? "1" : "0" },
      })
    );

    setCategory({
      name: "",
      image: "",
      descr: "",
      isSell: "",
    });

    setLoading(false);

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm danh mục mới!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Tên danh mục</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              required
              value={category.name}
              type="text"
              name="name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mô tả danh mục</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              required
              value={category.descr}
              as="textarea"
              rows={2}
              name="descr"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mở bán</Form.Label>
            <Form.Check
              onChange={handleOnChange}
              checked={category.isSell == "1" ? true : false}
              type="checkbox"
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
          {loading ? "Đợi xíu nhé!" : "Thêm danh mục"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditCategory;
