import React from "react";

import {
  Box,
  Chip,
  FormControl,
  FormLabel,
  Input,
  MenuItem,
  Select,
} from "@mui/material";

import useStyles from "./styles";
import { IFormElementsProps } from "../../features/configRendering/FormElements";

const VKMultiselect: React.FunctionComponent<IFormElementsProps> = (props) => {
  const classes = useStyles();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <FormControl sx={classes.formControl}>
      <FormLabel id="multiple-select-label">{props.item.label}</FormLabel>
      <Select
        labelId={`label-${props.item.id}`}
        id={props.item.id}
        multiple
        value={props.fields[props.item.name] ?? []}
        onChange={(event) => props.handleFieldChange(event, props.item.name)}
        input={<Input id={`select-chip-${props.item.id}`} />}
        renderValue={(selected: string[]) => (
          <Box sx={classes.chips}>
            {selected.map((value: string) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {props.item.options?.map((option) => (
          <MenuItem key={option.key} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default VKMultiselect;