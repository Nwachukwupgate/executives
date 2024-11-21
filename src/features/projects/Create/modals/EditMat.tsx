import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import FormField from "@/common/form/FormField";

interface EditMatProps {
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentMaterial: { id: number; name: string };
  materials: { id: number; name: string }[];
  setMaterials: React.Dispatch<React.SetStateAction<{ id: number; name: string }[]>>;
}

interface MaterialFormInputs {
  name: string;
}

const EditMat: React.FC<EditMatProps> = ({ setEditModal, currentMaterial, materials, setMaterials }) => {
  const { control, handleSubmit } = useForm<MaterialFormInputs>({
    defaultValues: { name: currentMaterial.name },
  });

  const onSubmit: SubmitHandler<MaterialFormInputs> = (data) => {
    const updatedMaterials = materials.map((mat) =>
      mat.id === currentMaterial.id ? { ...mat, name: data.name } : mat
    );
    setMaterials(updatedMaterials);
    setEditModal(false);
  };

  return (
    <Dialog open onClose={() => setEditModal(false)}>
      <DialogTitle>Edit Material</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField control={control} name="name" label="Material Name" />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setEditModal(false)}>Cancel</Button>
        <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditMat;
