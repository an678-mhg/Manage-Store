import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllCategoriesApi } from "../../api/categories";
import { editProduct } from "../../redux/slice/product";

const EditProduct = ({ show, handleClose, data }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getAllCategoriesApi();
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const findCategory = (id) => {
    return categories.filter((p) => p.id == id)[0];
  };

  const checkExitsCategory = (id) => {
    return product.categories.some((p) => p.id == id);
  };

  const deleteCategory = (id) => {
    return product.categories.filter((p) => p.id != id);
  };

  const [product, setProduct] = useState({
    name: data.name,
    categories: data.categories,
    price: data.price,
    status: data.status,
    image: data.image,
    description: data.description,
  });

  const handleOnChange = (e) => {
    switch (e.target.type) {
      case "text":
      case "number":
      case "textarea":
        setProduct({ ...product, [e.target.name]: e.target.value });
        break;
      case "file":
        setProduct({ ...product, file: e.target.files[0] });
        break;
      case "checkbox":
        if (checkExitsCategory(e.target.value)) {
          const newCategory = deleteCategory(e.target.value);
          setProduct({ ...product, categories: newCategory });
        } else {
          const category = findCategory(e.target.value);
          setProduct({
            ...product,
            categories: [...product.categories, category],
          });
        }
        break;
      default:
        return product;
    }
  };

  const handleEditProduct = () => {
    setLoading(true);

    dispatch(
      editProduct({
        id: data.id,
        newProduct: {
          name: product.name,
          categories: product.categories,
          price: Number(product.price),
          status: Number(product.status),
          image: product.image,
          description: product.description,
        },
      })
    );

    setProduct({
      name: "",
      categories: "",
      price: "",
      status: "",
      image: "",
      description: "",
    });

    setLoading(false);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm sản phẩm mới!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              required
              value={product.name}
              type="text"
              name="name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Giá bán</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              required
              value={product.price}
              type="number"
              name="price"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Danh mục sản phẩm</Form.Label>
            <div className="flex items-center flex-wrap">
              {categories.map((category) => {
                if (category.isSell == 1) {
                  return (
                    <Form.Check
                      type="checkbox"
                      onChange={handleOnChange}
                      key={category?.id}
                      label={category.name}
                      value={category.id}
                      checked={product.categories.some(
                        (p) => p.id == category.id
                      )}
                      className="mr-2"
                    />
                  );
                }
              })}
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Số lượng</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              required
              value={product.status}
              type="number"
              name="status"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mô tả sản phẩm</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              required
              value={product.description}
              as="textarea"
              rows={2}
              name="description"
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
          onClick={handleEditProduct}
          disabled={loading}
          className={`bg-blue-500 hover:bg-blue-600 ${loading && "opacity-70"}`}
        >
          Sửa sản phẩm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProduct;
