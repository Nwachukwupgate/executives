import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import FormField from "@/common/form/FormField";

interface MatModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  materials: { id: number; name: string }[];
  setMaterials: React.Dispatch<React.SetStateAction<{ id: number; name: string }[]>>;
}

interface MaterialFormInputs {
  name: string;
}

const MatModal: React.FC<MatModalProps> = ({ setShowModal, materials, setMaterials }) => {
  const { control, handleSubmit, reset } = useForm<MaterialFormInputs>();

  const onSubmit: SubmitHandler<MaterialFormInputs> = (data) => {
    const newMaterial = { id: materials.length + 1, ...data };
    setMaterials([...materials, newMaterial]);
    setShowModal(false);
    reset();
  };

  return (
    <Dialog open onClose={() => setShowModal(false)}>
      <DialogTitle>Create Material</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField control={control} name="name" label="Material Name" placeholder="Enter material name" />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowModal(false)}>Cancel</Button>
        <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MatModal;
