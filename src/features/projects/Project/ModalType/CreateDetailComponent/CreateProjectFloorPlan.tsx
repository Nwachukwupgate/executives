import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import FormField from "@/common/form/FormField";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Accordion from "@/common/form/Accordion";

interface ProjectUnit {
  _id?: string;
  additionalFee?: number;
  additionalFeeComponents?: string;
  initialDeposit: number;
  name: string;
  photos: string[];
  price: number;
  pricePeriod: string;
  totalPrice: number;
}

interface FloorUnit {
  detail_name: string;
  detail_size: string;
  floorPlan_name: string;
  project_units: ProjectUnit[];
}

interface FormValues {
  floor: FloorUnit[];
}

interface CreateDetailsProps {
  id: string;
  handleAccordionToggle: (section: string) => void;
  accordion: string;
}

const CreateProjectFloorPlan: React.FC<CreateDetailsProps> = ({
  id,
  handleAccordionToggle,
  accordion,
}) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      floor: [
        {
          detail_name: "",
          detail_size: "",
          floorPlan_name: "",
          project_units: [
            {
              initialDeposit: 0,
              name: "",
              photos: [],
              price: 0,
              pricePeriod: "",
              totalPrice: 0,
            },
          ],
        },
      ],
    },
  });

  const { fields: floorFields, append: appendFloor, remove: removeFloor } = useFieldArray({
    control,
    name: "floor",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Floor Data:", data);
    console.log("Project ID:", id);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-6 py-5 bg-gray-50 space-y-6">
      <Accordion
        title="Project Floor Plan"
        isOpen={accordion === "floor"}
        toggleAccordion={() => handleAccordionToggle("floor")}
      >
        {floorFields.map((floor, floorIndex) => (
          <div key={floor.id} className="space-y-4 border p-4 rounded-lg bg-white shadow">
            <FormField
              control={control}
              name={`floor.${floorIndex}.detail_name`}
              label="Detail Name"
              placeholder="e.g., Floor A"
            />
            <FormField
              control={control}
              name={`floor.${floorIndex}.detail_size`}
              label="Detail Size"
              placeholder="e.g., 500 sq.ft"
            />
            <FormField
              control={control}
              name={`floor.${floorIndex}.floorPlan_name`}
              label="Floor Plan Name"
              placeholder="e.g., Plan A"
            />

            {/* Nested Project Units */}
            <div className="ml-4 space-y-2">
              <h3 className="font-semibold">Project Units</h3>
              <NestedProjectUnits
                control={control}
                floorIndex={floorIndex}
              />
            </div>

            <Button
              variant="text"
              color="error"
              onClick={() => removeFloor(floorIndex)}
              startIcon={<FontAwesomeIcon icon={faTrash} />}
            >
              Remove Floor
            </Button>
          </div>
        ))}

        <div className="flex justify-between mt-4">
          <Button
            variant="outlined"
            onClick={() =>
              appendFloor({
                detail_name: "",
                detail_size: "",
                floorPlan_name: "",
                project_units: [
                  {
                    initialDeposit: 0,
                    name: "",
                    photos: [],
                    price: 0,
                    pricePeriod: "",
                    totalPrice: 0,
                  },
                ],
              })
            }
            startIcon={<FontAwesomeIcon icon={faCirclePlus} />}
          >
            Add Floor
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </Accordion>
    </form>
  );
};

const NestedProjectUnits: React.FC<{
  control: any;
  floorIndex: number;
}> = ({ control, floorIndex }) => {
  const { fields: projectUnitFields, append, remove } = useFieldArray({
    control,
    name: `floor.${floorIndex}.project_units`,
  });

  return (
    <>
      {projectUnitFields.map((unit, unitIndex) => (
        <div key={unit.id} className="space-y-4 border p-4 rounded-lg bg-gray-100">
          <FormField
            control={control}
            name={`floor.${floorIndex}.project_units.${unitIndex}.name`}
            label="Unit Name"
            placeholder="e.g., Unit A1"
          />
          <FormField
            control={control}
            name={`floor.${floorIndex}.project_units.${unitIndex}.initialDeposit`}
            label="Initial Deposit"
            placeholder="e.g., 1000"
            type="number"
          />
          <FormField
            control={control}
            name={`floor.${floorIndex}.project_units.${unitIndex}.price`}
            label="Price"
            placeholder="e.g., 5000"
            type="number"
          />
          <FormField
            control={control}
            name={`floor.${floorIndex}.project_units.${unitIndex}.pricePeriod`}
            label="Price Period"
            placeholder="e.g., Monthly"
          />
          <Button
            variant="text"
            color="error"
            onClick={() => remove(unitIndex)}
            startIcon={<FontAwesomeIcon icon={faTrash} />}
          >
            Remove Unit
          </Button>
        </div>
      ))}
      <Button
        variant="outlined"
        onClick={() =>
          append({
            initialDeposit: 0,
            name: "",
            photos: [],
            price: 0,
            pricePeriod: "",
            totalPrice: 0,
          })
        }
        startIcon={<FontAwesomeIcon icon={faCirclePlus} />}
      >
        Add Unit
      </Button>
    </>
  );
};

export default CreateProjectFloorPlan;
