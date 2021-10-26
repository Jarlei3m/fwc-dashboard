import { Container, Footer } from "./styles";
import { HeaderTable } from "../HeaderTable";
import { MdImageSearch } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { NewRegisterModal } from "../NewRegisterModal";
import firebaseDb, { auth } from "../../lib/firebase";

Modal.setAppElement("#root");

export function UsersTable({ admin }) {
  const [isNewRegisterModalOpen, setIsNewRegisterModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedKeyId, setSelectedKeyId] = useState("");
  const [editableUser, setEditableUser] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [isUserPreview, setIsUserPreview] = useState(false);

  useEffect(() => {
    firebaseDb.child("users").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        const allKeys = Object.keys(snapshot.val());

        const allUsers = Object.values({
          ...snapshot.val(),
        });

        const usersWithKeyId = allUsers.map((user, index) => {
          const updatedUser = {
            ...user,
            keyId: allKeys[index],
          };
          return updatedUser;
        });

        setUsers(usersWithKeyId);
      } else {
        setUsers([]);
      }
    });
  }, []);

  const handlePerPage = (e) => {
    setPerPage(e.target.value);
  };

  const addOrEdit = (data) => {
    if (selectedKeyId === "") {
      //check if already exists
      const userExists = users.find((user) => user.email === data.email);
      if (!userExists) {
        //create user
        firebaseDb.child("users").push(data, (err) => {
          if (err) {
            console.log(err);
          } else {
            setSelectedKeyId("");
          }
        });
      } else {
        window.alert("Email já cadastrado.");
      }
    } else {
      // update user
      firebaseDb.child(`users/${selectedKeyId}`).set(data, (err) => {
        if (err) {
          console.log(err);
        } else {
          setSelectedKeyId("");
        }
      });
    }
  };

  const onDelete = (key) => {
    // eslint-disable-next-line no-restricted-globals
    if (window.confirm("Certeza que deseja deletar?")) {
      firebaseDb.child(`users/${key}`).remove((err) => {
        if (err) {
          console.log(err);
        } else {
          setSelectedKeyId("");
        }
      });
    }
  };

  useEffect(() => {
    if (selectedKeyId !== "") {
      const filteredUser = users.filter((user) => user.keyId === selectedKeyId);

      setEditableUser(filteredUser[0]);
      setIsNewRegisterModalOpen(true);
    }
  }, [selectedKeyId, users]);

  function handleOpenNewRegisterModal() {
    setIsNewRegisterModalOpen(true);
  }

  function handleCloseNewRegisterModal() {
    setIsNewRegisterModalOpen(false);
    setEditableUser("");
    setSelectedKeyId("");
    setIsUserPreview(false);
  }

  function handlePreviewAndEditActions(userKeyId, action) {
    if (userKeyId !== "") {
      setSelectedKeyId(userKeyId);
      if (action === "preview") {
        setIsUserPreview(true);
      } else {
        setIsUserPreview(false);
      }
    }
  }

  console.log("USER PREVIEW:", isUserPreview);

  return (
    <Container>
      <HeaderTable onOpenNewRegisterModal={handleOpenNewRegisterModal} />
      <NewRegisterModal
        isOpen={isNewRegisterModalOpen}
        onRequestClose={handleCloseNewRegisterModal}
        user={editableUser}
        selectedKeyId={selectedKeyId}
        addOrEdit={addOrEdit}
        isUserPreview={isUserPreview}
        admin={admin}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>EMAIL</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.keyId}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>
                  <MdImageSearch
                    onClick={() =>
                      handlePreviewAndEditActions(user.keyId, "preview")
                    }
                  />
                  <RiPencilFill
                    onClick={() =>
                      handlePreviewAndEditActions(user.keyId, "edit")
                    }
                  />
                  <FaTrash onClick={() => onDelete(user.keyId)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Footer>
        <button onClick={() => auth.signOut()}>Sair</button>
        <div>
          <p>Listas por página</p>
          <select onChange={handlePerPage} name="perPage" id="">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <p>
            1 - {perPage} of {users ? users?.length : "0"}
          </p>
        </div>
      </Footer>
    </Container>
  );
}
