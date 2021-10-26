import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Container } from "./styles";

export function NewRegisterModal({
  isOpen,
  onRequestClose,
  user,
  selectedKeyId,
  addOrEdit,
  admin,
  isUserPreview,
}) {
  const [checkBoxChange, setCheckBoxChange] = useState(false);

  const initialfieldData = {
    id: admin?.uid,
    name: "",
    email: "",
    password: "",
    isAdmin: false,
    status: "Ativo",
  };
  const [data, setData] = useState(initialfieldData);

  useEffect(() => {
    if (selectedKeyId === "") {
      setData({
        ...initialfieldData,
      });
      setCheckBoxChange(false);
    } else {
      setData({
        ...user,
      });
      setCheckBoxChange(user.isAdmin);
    }
  }, [user, selectedKeyId]);

  const handleChange = (e) => {
    var { name, value } = e.target;

    if (name === "isAdmin") {
      value = e.target.checked;
    }

    setData({
      ...data,
      [name]: value,
    });
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    addOrEdit(data);

    handleCloseModal();
  }

  function handleCloseModal() {
    onRequestClose();
    setData({
      ...initialfieldData,
    });
    setCheckBoxChange(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleFormSubmit}>
        <h2>
          {isUserPreview ? "Visualização" : user ? "Editar" : "Cadastrar"}
        </h2>

        <div>
          <input
            type="text"
            value={admin?.uid}
            placeholder="ID"
            readOnly
            required
            disabled={isUserPreview}
          />
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Nome*"
            required
            disabled={isUserPreview}
          />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email*"
            required
            disabled={isUserPreview}
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Senha (Maior que 6 dígitos)*"
            minLength="6"
            required
            disabled={isUserPreview}
          />
          <div>
            <label htmlFor="admin">Administrador</label>
            <input
              onClick={() => setCheckBoxChange(!checkBoxChange)}
              onChange={handleChange}
              name="isAdmin"
              type="checkbox"
              value={data.isAdmin}
              defaultChecked={user && Boolean(user.isAdmin)}
              disabled={isUserPreview}
            />
          </div>
          <select
            name="status"
            value={data.status}
            onChange={handleChange}
            disabled={isUserPreview}
          >
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
        </div>

        <div>
          <button
            disabled={isUserPreview}
            onClick={handleCloseModal}
            type="button"
          >
            VOLTAR
          </button>
          <button disabled={isUserPreview} type="submit">
            {user ? "ATUALIZAR" : "SALVAR"}
          </button>
        </div>
      </Container>
    </Modal>
  );
}
