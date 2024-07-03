import { Box, Modal } from "@mui/material";
import PropTypes from "prop-types";
import { Button } from "../../../../../../../common/presentation/components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export const ModalFirstLogin = ({ open, handleClose, handleOk }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2>Crea una contraseña</h2>
        <p>
          Para continuar con el inicio de sesión, debes crear una contraseña
          para tu cuenta.
        </p>
        <Button onClick={handleOk} label="Crear contraseña" />
      </Box>
    </Modal>
  );
};

ModalFirstLogin.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleOk: PropTypes.func,
};
