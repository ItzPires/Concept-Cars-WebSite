import React from "react";
import {
  Box,
  Popover,
  Slider,
  TextField,
  Autocomplete,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import "./CarFilter.css";

const CarFilter = ({
  open,
  setOpen,
  ageFilterValue,
  ageFilter,
  brandFilterList,
  designerFilterList,
  anchorEl,
  filterBrand,
  setFilterBrand,
  filterDesigner,
  setFilterDesigner,
  ageFilterLimits,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <Popover
      className="filter_popover"
      anchorEl={anchorEl}
      open={open}
      onClose={() => setOpen(false)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box
        sx={{
          width: 200,
          padding: "20px 20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p className="filter_item">Filter by name:</p>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <p className="filter_item">Filter by year:</p>
        <Slider
          value={ageFilterValue}
          valueLabelDisplay="auto"
          onChange={ageFilter}
          min={ageFilterLimits.min}
          max={ageFilterLimits.max}
          sx={{ color: "#1B1B23", alignSelf: "center", width: "80%" }}
        />
        <p className="filter_item">Filter by brand:</p>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={brandFilterList}
          value={filterBrand}
          onChange={(event, newValue) => {
            console.log(newValue);
            setFilterBrand(newValue);
          }}
          s
          renderInput={(params) => (
            <TextField {...params} label="Brand" size="small" />
          )}
        />

        <p className="filter_item">Filter by Designer:</p>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={designerFilterList}
          value={filterDesigner}
          onChange={(event, newValue) => {
            console.log(newValue);
            setFilterDesigner(newValue);
          }}
          s
          renderInput={(params) => (
            <TextField {...params} label="Designer" size="small" />
          )}
        />
      </Box>
    </Popover>
  );
};

export default CarFilter;
